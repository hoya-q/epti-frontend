'use client';

import { useRef, useCallback, useState } from 'react';

export default function UploadArea({ onFileSelect }) {
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = useCallback(
    file => {
      if (
        file &&
        (file.type === 'application/pdf' ||
          file.name.toLowerCase().endsWith('.pdf'))
      ) {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const handleDragOver = useCallback(e => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback(e => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    e => {
      e.preventDefault();
      setIsDragOver(false);

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFileSelect(files[0]);
      }
    },
    [handleFileSelect]
  );

  const handleInputChange = useCallback(
    e => {
      const file = e.target.files?.[0];
      if (file) {
        handleFileSelect(file);
      }
      e.target.value = ''; // Reset input
    },
    [handleFileSelect]
  );

  return (
    <div
      className={`studio-upload-area rounded-xl text-center cursor-pointer transition-all duration-300 h-full flex flex-col justify-center items-center ${
        isDragOver ? 'dragover' : ''
      }`}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="text-base text-white leading-6">
        <img
          src="/file.svg"
          alt="pdf-icon"
          className="max-w-10 mb-2.5 mx-auto text-white"
        />
        <div>Click here to open the file explorer</div>
        <div>or drag and drop a PDF file.</div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleInputChange}
      />
    </div>
  );
}
