'use client';

import { useRef } from 'react';
import {
  CTA_CONTENT,
  HERO_CONTENT,
  INTRO_FEATURES,
  INTRO_PAIN_HEADING,
  MID_HERO_COPY,
  TESTIMONIALS,
} from '../lib/content';

export default function IntroSection({ language, isActive, onNavigate }) {
  const sliderRef = useRef(null);

  const handleScroll = direction => {
    if (!sliderRef.current) {
      return;
    }
    const firstCard = sliderRef.current.querySelector('[data-card]');
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 32
      : 320;
    sliderRef.current.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth',
    });
  };

  const painHeading = (
    <h2 className="text-3xl md:text-4xl font-medium text-white leading-relaxed tracking-tight">
      <span className="font-semibold" style={{ color: '#25C9FF' }}>
        {INTRO_PAIN_HEADING.highlight[language]}
      </span>
      {language === 'ko' ? (
        <>
          {INTRO_PAIN_HEADING.postfix.ko}
          <span className="block mt-6">
            {INTRO_PAIN_HEADING.question[language]}
          </span>
        </>
      ) : (
        <span className="block mt-6">
          {INTRO_PAIN_HEADING.question[language]}
        </span>
      )}
    </h2>
  );

  return (
    <section id="intro" className={`section ${isActive ? 'active' : ''}`}>
      <div className="hero-bg">
        <div className="hero-video">
          <video
            className="absolute inset-0 w-full h-full object-cover z-[1]"
            src={HERO_CONTENT.videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="hero-overlay" />
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-8 max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <img
              src={HERO_CONTENT.logo}
              alt="epti"
              className="h-32 mx-auto mb-6"
            />
          </div>
          <h1
            className="text-xl md:text-2xl font-medium text-white leading-relaxed tracking-tight animate-fade-in-up max-w-5xl mx-auto text-center"
            style={{ animationDelay: '0.3s' }}
          >
            {HERO_CONTENT.message[language].map(line => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>
      </div>

      <div
        className="min-h-screen flex items-center px-8"
        style={{
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left pl-8">{painHeading}</div>
            <div className="relative">
              <div className="testimonial-container" id="testimonialContainer">
                <div
                  ref={sliderRef}
                  className="testimonial-slider flex space-x-8 overflow-x-auto no-scrollbar scroll-smooth overflow-hidden"
                >
                  {TESTIMONIALS.map(item => (
                    <div
                      key={item.emoji}
                      data-card
                      className="testimonial-card bg-white/10 backdrop-blur-md rounded-3xl p-12 min-w-80 md:min-w-[20rem] h-80 border border-white/20 flex flex-col"
                    >
                      <div className="text-6xl md:text-8xl mb-4 testimonial-emoji flex-shrink-0">
                        {item.emoji}
                      </div>
                      <div className="flex-1 flex items-start pt-4">
                        <p className="text-white text-base font-normal leading-relaxed">
                          {item.text[language]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="scroll-controls prev cursor-pointer"
                  onClick={() => handleScroll(-1)}
                >
                  <i className="ri-arrow-left-line text-white text-xl" />
                </button>
                <button
                  type="button"
                  className="scroll-controls next cursor-pointer"
                  onClick={() => handleScroll(1)}
                >
                  <i className="ri-arrow-right-line text-white text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-center px-8 py-32"
        style={{
          background:
            'linear-gradient(135deg, #111827 0%, #1f2937 25%, #374151 50%, #4b5563 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto text-center text-white space-y-12">
          <h2
            className="text-3xl md:text-4xl font-semibold leading-relaxed tracking-tight"
            style={{ color: '#25C9FF' }}
          >
            {MID_HERO_COPY.title[language]}
          </h2>
          <p
            className="text-lg md:text-xl font-normal leading-relaxed text-gray-200 mx-auto max-w-5xl"
            dangerouslySetInnerHTML={{
              __html: MID_HERO_COPY.description[language],
            }}
          />
          <p
            className="text-lg md:text-xl font-medium leading-relaxed text-gray-100 mx-auto max-w-5xl"
            dangerouslySetInnerHTML={{
              __html: MID_HERO_COPY.emphasis[language],
            }}
          />
        </div>
      </div>

      <div
        className="min-h-screen flex flex-col justify-center items-center px-8 py-64"
        style={{
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-medium text-white mb-20 tracking-tight leading-relaxed">
            {MID_HERO_COPY.lead[language]}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {INTRO_FEATURES.map(feature => (
              <div
                key={feature.title.en}
                className="glass-card rounded-3xl p-12 text-center hover:transform hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className="w-24 h-24 flex items-center justify-center bg-navy-900/35 rounded-3xl mx-auto mb-8">
                  <i className={`${feature.icon} text-4xl text-navy-200`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  {feature.title[language]}
                </h3>
                <p className="text-gray-300 font-normal text-base leading-relaxed">
                  {feature.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            {CTA_CONTENT.title[language]}
          </h2>
          <p className="text-lg text-slate-300 mb-12 font-normal leading-relaxed">
            {CTA_CONTENT.description[language]}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              type="button"
              className="px-8 py-4 rounded-button text-base font-semibold whitespace-nowrap cursor-pointer transition-all duration-300"
              style={{ backgroundColor: '#25C9FF', color: 'white' }}
              onClick={() => onNavigate('contact')}
            >
              {CTA_CONTENT.primary.label[language]}
            </button>
            <button
              type="button"
              className="border-2 border-white text-white px-8 py-4 rounded-button text-base font-semibold whitespace-nowrap cursor-pointer hover:bg-white hover:text-slate-800 transition-all duration-300"
              onClick={() => onNavigate('experience')}
            >
              {CTA_CONTENT.secondary.label[language]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
