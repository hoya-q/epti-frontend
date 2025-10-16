'use client';

import { EXPERIENCE_CONTENT } from '../lib/content';

export default function ExperienceSection({ language, isActive, onNavigate }) {
  return (
    <section
      id="experience"
      className={`section scrollable-section ${isActive ? 'active' : ''}`}
      style={{
        background:
          'linear-gradient(135deg, #2d3748 0%, #374151 25%, #4b5563 50%, #374151 75%, #2d3748 100%)',
      }}
    >
      <div className="flex flex-col justify-center items-center min-h-screen px-8 py-32">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              {EXPERIENCE_CONTENT.title[language]}
            </h2>
            <p className="text-md text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto">
              {EXPERIENCE_CONTENT.description[language]}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-white">
                {EXPERIENCE_CONTENT.stepsTitle[language]}
              </h3>
              <div className="space-y-10">
                {EXPERIENCE_CONTENT.steps.map((step, index) => (
                  <div
                    key={step.title.en}
                    className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
                  >
                    <div
                      className="absolute -left-6 top-8 w-16 h-16 flex items-center justify-center rounded-2xl text-white font-bold text-xl shadow-2xl"
                      style={{
                        background:
                          'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="ml-8">
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title[language]}
                      </h4>
                      <p
                        className="text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: step.description[language],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              {EXPERIENCE_CONTENT.highlights.map((highlight, idx) => (
                <div
                  key={highlight.title.en}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center relative ${
                    idx === 1 ? 'pb-20' : ''
                  }`}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/20 rounded-2xl mx-auto mb-6">
                    <i className={`${highlight.icon} text-3xl text-primary`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {highlight.title[language]}
                  </h3>
                  <p
                    className="text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: highlight.description[language],
                    }}
                  />
                  {idx === 1 && (
                    <button
                      type="button"
                      className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-primary rounded-full animate-bounce cursor-pointer hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                      onClick={() => onNavigate('pricing')}
                    >
                      <i className="ri-arrow-down-line text-white text-xl" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            className="min-h-[400px] flex flex-col items-center justify-center px-8 py-24 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md"
            style={{
              background:
                'linear-gradient(135deg, #374151 0%, #4b5563 25%, #6b7280 50%, #4b5563 75%, #374151 100%)',
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              {EXPERIENCE_CONTENT.demoTitle[language]}
            </h3>
            <p className="text-lg text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto text-center">
              {EXPERIENCE_CONTENT.demoDescription[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
