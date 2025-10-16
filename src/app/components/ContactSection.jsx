'use client';

import { CONTACT_CONTENT } from '../lib/content';

export default function ContactSection({ language, isActive }) {
  const placeholders = CONTACT_CONTENT.placeholders;

  return (
    <section
      id="contact"
      className={`section scrollable-section ${isActive ? 'active' : ''}`}
      style={{
        background:
          'linear-gradient(135deg, #2d3748 0%, #374151 25%, #4b5563 50%, #374151 75%, #2d3748 100%)',
      }}
    >
      <div className="flex flex-col justify-center items-center min-h-screen px-8 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-16 text-center">
            {CONTACT_CONTENT.title[language]}
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15">
              <h3 className="text-2xl font-bold text-white mb-6">
                {CONTACT_CONTENT.formTitle[language]}
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder={placeholders.firstName[language]}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary hover:bg-white/15 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={placeholders.lastName[language]}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary hover:bg-white/15 transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={placeholders.email[language]}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary hover:bg-white/15 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={placeholders.organization[language]}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary hover:bg-white/15 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    {CONTACT_CONTENT.questionLabel[language]}
                  </label>
                  <textarea
                    rows="4"
                    placeholder={placeholders.message[language]}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none hover:bg-white/15 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-600 text-white py-3 rounded-button font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer"
                >
                  {CONTACT_CONTENT.submit[language]}
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15">
                <h3 className="text-2xl font-bold text-white mb-8">
                  {CONTACT_CONTENT.companyTitle[language]}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-lg mr-4"
                      style={{ backgroundColor: 'rgba(37, 201, 255, 0.2)' }}
                    >
                      <i
                        className="ri-map-pin-line text-xl"
                        style={{ color: '#25C9FF' }}
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        {CONTACT_CONTENT.address.label[language]}
                      </div>
                      <div className="text-gray-300">
                        <div>{CONTACT_CONTENT.address.line1[language]}</div>
                        <div>{CONTACT_CONTENT.address.line2[language]}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-lg mr-4"
                      style={{ backgroundColor: 'rgba(37, 201, 255, 0.2)' }}
                    >
                      <i
                        className="ri-phone-line text-xl"
                        style={{ color: '#25C9FF' }}
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {CONTACT_CONTENT.phone.label[language]}
                      </div>
                      <div className="text-gray-300">
                        {CONTACT_CONTENT.phone.value}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-lg mr-4"
                      style={{ backgroundColor: 'rgba(37, 201, 255, 0.2)' }}
                    >
                      <i
                        className="ri-global-line text-xl"
                        style={{ color: '#25C9FF' }}
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {CONTACT_CONTENT.website.label[language]}
                      </div>
                      <a
                        href={CONTACT_CONTENT.website.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 hover:text-primary transition-colors cursor-pointer"
                      >
                        {CONTACT_CONTENT.website.text}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rounded-2xl p-8 border border-primary/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(37, 201, 255, 0.15) 0%, rgba(30, 64, 175, 0.15) 100%)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="flex items-start">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-lg mr-4 flex-shrink-0"
                    style={{ backgroundColor: 'rgba(37, 201, 255, 0.3)' }}
                  >
                    <i
                      className="ri-question-line text-xl"
                      style={{ color: '#25C9FF' }}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {CONTACT_CONTENT.faq.title[language]}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {CONTACT_CONTENT.faq.description[language]}
                    </p>
                    <button
                      type="button"
                      className="text-white font-semibold hover:text-gray-200 transition-colors cursor-pointer"
                    >
                      {CONTACT_CONTENT.faq.cta[language]}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
