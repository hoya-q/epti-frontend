'use client';

import { useState, useRef, useCallback } from 'react';

export function useStudioState() {
  const [pdfFile, setPdfFile] = useState(null);
  const [isPublished, setIsPublished] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [voiceDescription, setVoiceDescription] = useState('');
  const [intensity, setIntensity] = useState('none');
  const [channel, setChannel] = useState(null);
  const [currentEpubBlob, setCurrentEpubBlob] = useState(null);
  const [currentEpubUrl, setCurrentEpubUrl] = useState(null);
  const [epubName, setEpubName] = useState('mybook.epub');

  // Progress states
  const [structureProgress, setStructureProgress] = useState({
    visible: false,
    percent: 0,
    message: 'Analyzing Book',
  });
  const [ttsProgress, setTtsProgress] = useState({
    visible: false,
    percent: 0,
    message: 'Generating speech',
  });

  // Status message
  const [statusMessage, setStatusMessage] = useState({
    visible: false,
    message: '',
    type: 'info',
  });

  const eventSourceRef = useRef(null);

  const clearPdf = useCallback(() => {
    setPdfFile(null);
    setIsPublished(false);
    setCurrentEpubBlob(null);
    setCurrentEpubUrl(null);
    setStructureProgress({
      visible: false,
      percent: 0,
      message: 'Analyzing Book',
    });
    setTtsProgress({
      visible: false,
      percent: 0,
      message: 'Generating speech',
    });
  }, []);

  const cleanupEpubUrl = useCallback(() => {
    try {
      if (currentEpubUrl) {
        URL.revokeObjectURL(currentEpubUrl);
      }
    } catch (e) {
      console.warn('URL 해제 실패:', e);
    } finally {
      setCurrentEpubUrl(null);
      setCurrentEpubBlob(null);
    }
  }, [currentEpubUrl]);

  const showStatus = useCallback((message, type = 'info') => {
    setStatusMessage({ visible: true, message, type });
    setTimeout(() => {
      setStatusMessage(prev => ({ ...prev, visible: false }));
    }, 3000);
  }, []);

  const initChannel = useCallback(async () => {
    try {
      const res = await fetch('/api/new-channel', { method: 'POST' });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      const data = await res.json();
      setChannel(data.channel);

      // Close existing EventSource if any
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }

      const es = new EventSource(`/stream?channel=${data.channel}`);
      eventSourceRef.current = es;

      es.onmessage = e => {
        const raw = e.data;

        if (typeof raw === 'string' && raw.startsWith('PROGRESS:')) {
          try {
            const progressData = JSON.parse(raw.slice('PROGRESS:'.length));
            updateProgress(progressData);
            return;
          } catch (e) {
            console.warn('Progress 메시지 파싱 실패:', e);
          }
        }

        try {
          const data = JSON.parse(raw);
          updateProgress(data);
        } catch (e) {
          console.warn('SSE 메시지 파싱 실패:', e);
        }
      };

      es.onopen = () => {
        console.log('SSE 연결 성공');
      };

      es.onerror = e => {
        console.warn('SSE 연결 오류, 재시도 중...');
        setTimeout(() => {
          initChannel();
        }, 1000);
      };
    } catch (e) {
      showStatus('Failed to initialize.', 'error');
    }
  }, [showStatus]);

  const updateProgress = useCallback(
    progressData => {
      const type =
        progressData.type ||
        (progressData.stage === 'pdf' ? 'structure' : progressData.stage);
      const message = progressData.message || progressData.msg || '';
      const percent =
        typeof progressData.percent === 'number' ? progressData.percent : null;

      if (percent != null) {
        const clampedPercent = Math.max(0, Math.min(100, percent));

        if (type === 'structure') {
          setStructureProgress({
            visible: true,
            percent: clampedPercent,
            message: message || 'Analyzing Structure',
          });
        } else if (type === 'tts') {
          setTtsProgress({
            visible: true,
            percent: clampedPercent,
            message: message || 'Synthesizing Audio...',
          });
        }
        return;
      }

      // Legacy progress format handling
      const match = message.match(/(\d+)\s*\/\s*(\d+)/);
      const pct = match
        ? Math.round((parseInt(match[1], 10) / parseInt(match[2], 10)) * 100)
        : null;
      const isComplete = /complete/i.test(message || '');
      const isFail = /(fail|error)/i.test(message || '');

      if (type === 'structure') {
        setStructureProgress(prev => ({
          ...prev,
          visible: true,
          percent: pct || prev.percent,
          message: isComplete ? 'Analysis complete' : prev.message,
        }));
        if (isComplete && pct === 100) {
          showStatus('Analysis complete', 'success');
        }
      }

      if (type === 'tts') {
        setTtsProgress(prev => ({
          ...prev,
          visible: true,
          percent: pct || prev.percent,
          message: isComplete ? 'Synthesis complete' : prev.message,
        }));
        if (isComplete && pct === 100) {
          showStatus('Synthesis complete', 'success');
        }
      }
    },
    [showStatus]
  );

  const publishBook = useCallback(async () => {
    if (!pdfFile) {
      showStatus('Upload PDF file first.', 'error');
      return;
    }
    if (!channel) {
      showStatus('Generating new channel. Please wait', 'error');
      return;
    }

    const form = new FormData();
    form.append('channel', channel);
    form.append('json', JSON.stringify({ prompt: voiceDescription }));
    form.append('pdf', pdfFile);

    try {
      setIsPublishing(true);
      showStatus('Start Publishing...', 'info');

      const res = await fetch('/api/publishbook', {
        method: 'POST',
        body: form,
      });
      if (!res.ok) {
        setIsPublishing(false);
        showStatus('Fail publishing', 'error');
        return;
      }

      cleanupEpubUrl();
      const epubBlob = await res.blob();
      const epubUrl = URL.createObjectURL(epubBlob);
      const filename = resolveFilename(res) ?? 'mybook.epub';

      setCurrentEpubBlob(epubBlob);
      setCurrentEpubUrl(epubUrl);
      setEpubName(filename);
      setIsPublished(true);
      setIsPublishing(false);
      showStatus('eBook successfully published', 'success');
    } catch (e) {
      setIsPublishing(false);
      showStatus('Error during publishing', 'error');
    }
  }, [pdfFile, channel, voiceDescription, cleanupEpubUrl, showStatus]);

  const downloadEpub = useCallback(() => {
    if (!currentEpubBlob || !currentEpubUrl) return;

    const a = document.createElement('a');
    a.href = currentEpubUrl;
    a.download = epubName.endsWith('.epub') ? epubName : `${epubName}.epub`;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showStatus('Download has started', 'success');
  }, [currentEpubBlob, currentEpubUrl, epubName, showStatus]);

  return {
    // State
    pdfFile,
    isPublished,
    isPublishing,
    voiceDescription,
    intensity,
    structureProgress,
    ttsProgress,
    statusMessage,

    // Actions
    setPdfFile,
    setVoiceDescription,
    setIntensity,
    clearPdf,
    publishBook,
    downloadEpub,
    initChannel,
    showStatus,
  };
}

function resolveFilename(response) {
  const cd = response.headers.get('Content-Disposition');
  const meta = response.headers.get('X-Metadata');

  if (cd) {
    const m1 = cd.match(/filename\*=UTF-8''([^;]+)/i);
    if (m1) {
      try {
        return decodeURIComponent(m1[1].trim());
      } catch {}
    }
    const m2 = cd.match(/filename="([^"]+)"/i);
    if (m2?.[1]) return m2[1];
  }

  if (meta) {
    try {
      const parsed = JSON.parse(atob(meta));
      if (parsed?.title && parsed?.author) {
        return `${parsed.title}_${parsed.author}.epub`;
      }
    } catch (err) {
      console.warn('Failed to parse X-Metadata header', err);
    }
  }

  return null;
}
