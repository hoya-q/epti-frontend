'use client';

import { useEffect, useRef, useState } from 'react';
import { HERO_CONTENT, NAV_LINKS } from '../lib/content';

export default function NavBar({
  language,
  onLanguageChange,
  activeSection,
  onNavigate,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleLanguageSelect = value => {
    onLanguageChange(value);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10">
      <div className="w-full px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => onNavigate('intro')}
            >
              <img src={HERO_CONTENT.logo} alt="epti" className="h-8" />
            </button>
          </div>
          <div className="flex items-center space-x-10 animate-slide-in">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                type="button"
                className={`nav-link text-white text-sm cursor-pointer ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => onNavigate(link.id)}
              >
                {link.label[language]}
              </button>
            ))}
            <div className="relative" id="langDropdown" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center space-x-2 lang-toggle apple-button px-3 py-2 rounded-full cursor-pointer"
                onClick={handleToggle}
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-global-line text-white text-sm" />
                </span>
                <span className="text-white text-sm font-medium" id="langText">
                  {language.toUpperCase()}
                </span>
                <span className="w-4 h-4 flex items-center justify-center">
                  <i
                    className={`ri-arrow-down-s-line text-white text-sm transition-transform ${
                      isMenuOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </span>
              </button>
              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden z-50">
                  <div className="py-1 min-w-[140px]">
                    <button
                      type="button"
                      className="flex w-full items-center px-4 py-2 text-white hover:bg-white/10 cursor-pointer transition-all duration-200 text-left"
                      onClick={() => handleLanguageSelect('ko')}
                    >
                      <span className="text-sm font-medium">한국어</span>
                      <span className="text-xs text-gray-300 ml-2">(KO)</span>
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center px-4 py-2 text-white hover:bg-white/10 cursor-pointer transition-all duration-200 text-left"
                      onClick={() => handleLanguageSelect('en')}
                    >
                      <span className="text-sm font-medium">English</span>
                      <span className="text-xs text-gray-300 ml-2">(EN)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
