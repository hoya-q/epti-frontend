'use client';

import { useEffect } from 'react';
import { useStudioState } from './hooks/useStudioState';
import Sidebar from './components/Sidebar';
import UploadArea from './components/UploadArea';
import PdfViewer from './components/PdfViewer';
import UserSettings from './components/UserSettings';
import Header from '../components/Header';

export default function Studio({
  language,
  onLanguageChange,
  activeSection,
  onNavigate,
}) {
  const {
    pdfFile,
    isPublished,
    isPublishing,
    voiceDescription,
    intensity,
    structureProgress,
    ttsProgress,
    statusMessage,
    setPdfFile,
    setVoiceDescription,
    setIntensity,
    clearPdf,
    publishBook,
    downloadEpub,
    initChannel,
    showStatus,
  } = useStudioState();

  // PDF.js 초기화
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.pdfjsLib) {
      const script = document.createElement('script');
      script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
      script.onload = () => {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      };
      document.head.appendChild(script);
    }
  }, []);

  // 채널 초기화
  useEffect(() => {
    initChannel();
  }, [initChannel]);

  const handleFileSelect = file => {
    setPdfFile(file);
  };

  return (
    <div className="min-h-screen studio-bg text-white font-noto">
      <Header language={language} />
      {/* Main Container */}
      <div className="pt-20 flex h-screen overflow-hidden pr-3">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 h-[calc(100vh-68px)] px-3 pr-6">
          {pdfFile ? (
            <PdfViewer pdfFile={pdfFile} onClearPdf={clearPdf} />
          ) : (
            <UploadArea onFileSelect={handleFileSelect} />
          )}
        </main>

        {/* User Settings */}
        <UserSettings
          voiceDescription={voiceDescription}
          onVoiceDescriptionChange={setVoiceDescription}
          intensity={intensity}
          onIntensityChange={setIntensity}
          isPublishing={isPublishing}
          isPublished={isPublished}
          onPublish={publishBook}
          onDownload={downloadEpub}
          structureProgress={structureProgress}
          ttsProgress={ttsProgress}
        />
      </div>

      {/* Status Message */}
      {statusMessage.visible && (
        <div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-[9999] w-72 max-w-[50%] mt-5 p-3 rounded-lg text-center font-medium ${
            statusMessage.type === 'success'
              ? 'bg-[#d4edda] text-[#16702b] border-none'
              : statusMessage.type === 'error'
                ? 'bg-[#f8d7da] text-[#721c24] border-none'
                : 'bg-[#d1ecf1] text-[#0c5460] border border-[#bee5eb]'
          }`}
        >
          {statusMessage.message}
        </div>
      )}
    </div>
  );
}
