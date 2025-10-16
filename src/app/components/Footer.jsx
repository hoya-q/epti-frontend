'use client';

import { FOOTER_CONTENT, HERO_CONTENT } from '../lib/content';

export default function Footer({ language }) {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={HERO_CONTENT.logo} alt="epti" className="h-8 mr-3" />
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {FOOTER_CONTENT.description[language]}
            </p>
            <p className="text-gray-500 text-sm">
              {FOOTER_CONTENT.tagline[language]}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {FOOTER_CONTENT.product.title[language]}
            </h3>
            <ul className="space-y-3 text-gray-400">
              {FOOTER_CONTENT.product.links.map(link => (
                <li key={link.label.en}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {FOOTER_CONTENT.support.title[language]}
            </h3>
            <ul className="space-y-3 text-gray-400">
              {FOOTER_CONTENT.support.links.map(link => (
                <li key={link.label.en}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            {FOOTER_CONTENT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
