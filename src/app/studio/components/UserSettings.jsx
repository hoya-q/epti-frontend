'use client';

import { useState } from 'react';

export default function UserSettings({
  voiceDescription,
  onVoiceDescriptionChange,
  intensity,
  onIntensityChange,
  isPublishing,
  isPublished,
  onPublish,
  onDownload,
  structureProgress,
  ttsProgress,
}) {
  const [isPublishingLocal, setIsPublishingLocal] = useState(false);
  const [isPublishedLocal, setIsPublishedLocal] = useState(false);

  const handlePublish = async () => {
    setIsPublishingLocal(true);
    try {
      await onPublish();
      setIsPublishedLocal(true);
    } catch (error) {
      console.error('Publishing failed:', error);
    } finally {
      setIsPublishingLocal(false);
    }
  };

  const handleDownload = () => {
    onDownload();
  };

  return (
    <div className="studio-main-bg border border-[#6c757d] rounded-xl h-[calc(100vh-68px)] px-5 py-4 w-96 items-center overflow-y-hidden border-none">
      <div className="mb-2.5 text-2xl font-semibold">
        <span className="text-white font-bold cursor-pointer">
          EPUB Generator
        </span>
      </div>

      <div className="mb-5">
        <label className="block pt-2.5 text-base font-medium mb-3 border-t border-[#e9ecef] text-white">
          Enter the narration voice you want.
        </label>
        <textarea
          value={voiceDescription}
          onChange={e => onVoiceDescriptionChange(e.target.value)}
          placeholder="Enter voice description..."
          className="studio-voice-input w-full min-h-20 p-3 rounded-lg text-sm resize-none font-inherit focus:outline-none"
        />
      </div>

      <div className="mb-5">
        <label className="block pt-2.5 text-base font-medium mb-3 border-t border-[#e9ecef] text-white">
          Adjust the intensity of sound effects.
        </label>
        <div className="flex gap-3">
          <label
            className={`studio-radio-option flex items-center cursor-pointer text-white px-4 py-2 rounded-full ${
              intensity === 'none' ? 'border-[#0ea5e9]' : ''
            }`}
          >
            <input
              type="radio"
              name="intensity"
              value="none"
              checked={intensity === 'none'}
              onChange={e => onIntensityChange(e.target.value)}
              className="mr-2"
            />
            <span
              className={`studio-radio-text text-sm ${intensity === 'none' ? 'text-[#0ea5e9]' : ''}`}
            >
              None
            </span>
          </label>

          <label
            className={`studio-radio-option flex items-center cursor-pointer text-white px-4 py-2 rounded-full ${
              intensity === 'light' ? 'border-[#0ea5e9]' : ''
            }`}
          >
            <input
              type="radio"
              name="intensity"
              value="light"
              checked={intensity === 'light'}
              onChange={e => onIntensityChange(e.target.value)}
              className="mr-2"
            />
            <span
              className={`studio-radio-text text-sm ${intensity === 'light' ? 'text-[#0ea5e9]' : ''}`}
            >
              Light
            </span>
          </label>

          <label
            className={`studio-radio-option flex items-center cursor-pointer text-white px-4 py-2 rounded-full ${
              intensity === 'strong' ? 'border-[#0ea5e9]' : ''
            }`}
          >
            <input
              type="radio"
              name="intensity"
              value="strong"
              checked={intensity === 'strong'}
              onChange={e => onIntensityChange(e.target.value)}
              className="mr-2"
            />
            <span
              className={`studio-radio-text text-sm ${intensity === 'strong' ? 'text-[#0ea5e9]' : ''}`}
            >
              Strong
            </span>
          </label>
        </div>
      </div>

      <div className="mb-5">
        <label className="block pt-2.5 text-base font-medium mb-3 border-t border-[#e9ecef] text-white">
          Click when you're all set.
        </label>
        {!isPublishedLocal ? (
          <button
            onClick={handlePublish}
            disabled={isPublishingLocal}
            className="w-full studio-button-primary text-white border-none px-6 py-3 rounded-lg text-base font-medium cursor-pointer flex items-center justify-center gap-2 active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPublishingLocal ? (
              <>
                <span>Publishing...</span>
              </>
            ) : (
              <>
                <span>Publish</span>
              </>
            )}
          </button>
        ) : (
          <button
            onClick={handleDownload}
            className="w-full studio-button-primary text-white border-none px-6 py-3 rounded-lg text-base font-medium cursor-pointer flex items-center justify-center gap-2 active:translate-y-px"
          >
            <span>Download</span>
          </button>
        )}
      </div>

      <div className="mt-0 pt-5 border-t border-[#e9ecef]">
        <div className="grid grid-cols-[1fr_auto] items-center gap-1.5">
          <label
            className={`text-base font-medium mb-3.5 flex items-center gap-2 ${
              structureProgress.visible ? 'opacity-100' : 'opacity-0'
            } whitespace-nowrap`}
          >
            {structureProgress.message || 'Analyzing Book'}
          </label>
          <div
            className={`text-right mb-3.5 ${structureProgress.visible ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="text-sm">
              {Math.round(structureProgress.percent || 0)}%
            </span>
          </div>
          <div
            className={`w-full h-2 studio-progress-bar col-span-2 ${
              structureProgress.visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="studio-progress-fill"
              style={{ width: `${structureProgress.percent || 0}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center gap-1.5 mt-5">
          <label
            className={`text-base font-medium mb-3.5 flex items-center gap-2 ${
              ttsProgress.visible ? 'opacity-100' : 'opacity-0'
            } whitespace-nowrap`}
          >
            {ttsProgress.message || 'Generating speech'}
          </label>
          <div
            className={`text-right mb-3.5 ${ttsProgress.visible ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="text-sm">
              {Math.round(ttsProgress.percent || 0)}%
            </span>
          </div>
          <div
            className={`w-full h-2 studio-progress-bar col-span-2 ${
              ttsProgress.visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="studio-progress-fill"
              style={{ width: `${ttsProgress.percent || 0}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
