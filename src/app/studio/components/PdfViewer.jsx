'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

export default function PdfViewer({ pdfFile, onClearPdf }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pdfDoc, setPdfDoc] = useState(null);
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);

  const loadPDF = useCallback(async file => {
    if (!file) return;

    try {
      const ab = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: ab }).promise;
      setPdfDoc(pdf);
      setCurrentPage(1);
      setTotalPages(pdf.numPages);
      await renderPage(pdf, 1);
    } catch (e) {
      console.error('PDF 로딩 실패:', e);
    }
  }, []);

  const renderPage = useCallback(async (doc, pageNum) => {
    if (!doc || !canvasRef.current) return;

    // 이전 렌더링 작업이 있다면 취소
    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
      renderTaskRef.current = null;
    }

    try {
      const page = await doc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });
      const ctx = canvasRef.current.getContext('2d');

      canvasRef.current.height = viewport.height;
      canvasRef.current.width = viewport.width;

      // 렌더링 작업을 저장하고 시작
      renderTaskRef.current = page.render({ canvasContext: ctx, viewport });
      await renderTaskRef.current.promise;
      renderTaskRef.current = null;
    } catch (error) {
      if (error.name !== 'RenderingCancelledException') {
        console.error('PDF 렌더링 오류:', error);
      }
      renderTaskRef.current = null;
    }
  }, []);

  const goToPage = useCallback(
    async pageNum => {
      if (!pdfDoc || pageNum < 1 || pageNum > totalPages) return;

      setCurrentPage(pageNum);
      await renderPage(pdfDoc, pageNum);
    },
    [pdfDoc, totalPages, renderPage]
  );

  const handlePrevPage = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const handleDelete = () => {
    setPdfDoc(null);
    setCurrentPage(1);
    setTotalPages(1);
    onClearPdf();
  };

  // PDF 파일이 변경될 때 로드
  useEffect(() => {
    if (pdfFile) {
      loadPDF(pdfFile);
    }
  }, [pdfFile, loadPDF]);

  // 컴포넌트 언마운트 시 렌더링 작업 취소
  useEffect(() => {
    return () => {
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
        renderTaskRef.current = null;
      }
    };
  }, []);

  return (
    <div className="h-full studio-pdf-viewer rounded-xl overflow-hidden flex flex-col pb-3">
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="max-w-full max-h-full shadow-lg" />
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center justify-center gap-4 p-1 bg-[#596270] border-t-0">
        <div></div>

        <div className="flex items-center gap-2 justify-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
            className="studio-button-primary text-white border-none rounded-xl px-2.5 py-2 text-sm cursor-pointer flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
            Prev
          </button>

          <span className="text-base font-bold text-white min-w-20 text-center">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
            className="studio-button-primary text-white border-none rounded-xl px-2.5 py-2 text-sm cursor-pointer flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>

        <button
          onClick={handleDelete}
          className="justify-self-end border-none studio-button-danger text-white px-4 py-2 text-sm rounded-xl cursor-pointer flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3,6 5,6 21,6"></polyline>
            <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}
