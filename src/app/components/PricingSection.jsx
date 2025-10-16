'use client';

import { PRICING_CONTENT } from '../lib/content';

export default function PricingSection({ language, isActive }) {
  return (
    <section
      id="pricing"
      className={`section scrollable-section ${isActive ? 'active' : ''}`}
      style={{
        background:
          'linear-gradient(135deg, #2d3748 0%, #374151 25%, #4b5563 50%, #374151 75%, #2d3748 100%)',
      }}
    >
      <div className="flex flex-col justify-center items-center min-h-screen px-8 py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            {PRICING_CONTENT.title[language]}
          </h2>
          <p className="text-base text-gray-400 mb-16">
            {PRICING_CONTENT.description[language]}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_CONTENT.plans.map(plan => (
              <div
                key={plan.name.en}
                className={`rounded-2xl p-10 border transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                  plan.highlight
                    ? 'bg-primary/20 backdrop-blur-md border-2 border-primary relative hover:bg-primary/25'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {plan.badge[language]}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {plan.name[language]}
                </h3>
                <div
                  className={`text-4xl font-bold mb-2 ${
                    plan.highlight ? 'text-[#25C9FF]' : 'text-primary'
                  }`}
                >
                  {plan.price}
                  <span className="text-lg text-gray-400">
                    {plan.unit[language]}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-8">
                  {plan.description[language]}
                </p>
                <ul className="space-y-4 text-gray-300 mb-10">
                  {plan.features.map(feature => (
                    <li key={feature.en} className="flex items-center">
                      <i
                        className="ri-check-line mr-3"
                        style={{ color: '#25C9FF' }}
                      />
                      <span>{feature[language]}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`w-full py-3 rounded-button font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    plan.highlight
                      ? 'text-white'
                      : 'text-white bg-white/10 hover:bg-white/20'
                  }`}
                  style={
                    plan.highlight
                      ? {
                          backgroundColor: '#25C9FF',
                        }
                      : undefined
                  }
                >
                  {plan.cta[language]}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-32 w-full">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {PRICING_CONTENT.guaranteeTitle[language]}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {PRICING_CONTENT.guarantees.map(item => (
                <div
                  key={item.title.en}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/20 rounded-2xl mx-auto mb-6">
                    <i className={`${item.icon} text-3xl text-primary`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {item.title[language]}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
