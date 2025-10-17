'use client';

import { useCallback, useState } from 'react';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import IntroSection from './components/IntroSection';
import Header from './components/Header';
import PricingSection from './components/PricingSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('intro');
  const [language, setLanguage] = useState('ko');

  const navigateToSection = useCallback(sectionId => {
    setActiveSection(sectionId);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen text-white font-noto">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        activeSection={activeSection}
        onNavigate={navigateToSection}
      />
      <main className="pt-[71px]">
        <IntroSection
          language={language}
          isActive={activeSection === 'intro'}
          onNavigate={navigateToSection}
        />
        <ExperienceSection
          language={language}
          isActive={activeSection === 'experience'}
          onNavigate={navigateToSection}
        />
        <PricingSection
          language={language}
          isActive={activeSection === 'pricing'}
        />
        <ContactSection
          language={language}
          isActive={activeSection === 'contact'}
        />
      </main>
      <Footer language={language} />
    </div>
  );
}
