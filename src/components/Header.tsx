import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";
import logo from '../../img/HackathonLogoHeader.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    } border-b border-slate-200/50`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="hidden sm:flex items-center space-x-2 group transition-all duration-300 hover:scale-105"
            >
              <img
                src= {logo}
                alt="Hackathon Logo"
                className="h-8 w-auto transition-transform duration-300 group-hover:rotate-3"
              />
              <div className="text-left space-y-1">
                <p className="text-sm font-semibold text-slate-800 group-hover:text-[#a2832f] transition-colors whitespace-nowrap">
                  Quantum LATAM 2025
                </p>
                <p className="text-xs text-slate-600 whitespace-nowrap">Universidad de Montevideo</p>
              </div>
            </button>
            {/* Mobile Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="sm:hidden flex items-center space-x-2 group transition-all duration-300"
            >
              <img
                src= {logo}
                alt="Hackathon Logo"
                className="h-8 w-auto transition-transform duration-300 group-hover:rotate-3"
              />
            </button>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex w-full items-center px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center flex-1 space-x-4">
              <a href="#hero" className="px-2 text-center text-slate-700 hover:text-[#a2832f] transition-all duration-300 font-medium relative group">
                {t('nav.home')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a2832f] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#event-info" className="px-2 text-center text-slate-700 hover:text-[#a2832f] transition-all duration-300 font-medium relative group">
                {t('nav.event')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a2832f] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#requirements" className="px-2 text-center text-slate-700 hover:text-[#a2832f] transition-all duration-300 font-medium relative group">
                {t('nav.requirements')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a2832f] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#inscripcion" className="px-2 text-center text-slate-700 hover:text-[#a2832f] transition-all duration-300 font-medium relative group">
                {t('nav.registration')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a2832f] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#partners" className="px-2 text-center text-slate-700 hover:text-[#a2832f] transition-all duration-300 font-medium relative group">
                {t('nav.partners')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a2832f] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center justify-center space-x-1 w-12 h-8 rounded-lg transition-all ${
                  language === 'es'
                    ? 'bg-[#f0e6c8] text-[#a2832f] shadow-sm'
                    : 'text-slate-600 hover:text-[#a2832f]'
                }`}
              >
                <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f1ea-1f1f8.png" alt="ES" className="h-5 w-5"/>
                <span className="text-sm font-medium">ES</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center justify-center space-x-1 w-12 h-8 rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-[#f0e6c8] text-[#a2832f] shadow-sm'
                    : 'text-slate-600 hover:text-[#a2832f]'
                }`}
              >
                <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f1ec-1f1e7.png" alt="EN" className="h-5 w-5"/>
                <span className="text-sm font-medium">EN</span>
              </button>
                <button
                  onClick={() => setLanguage('pt')}
                  className={`flex items-center justify-center space-x-1 w-12 h-8 rounded-lg transition-all ${
                  language === 'pt'
                    ? 'bg-[#f0e6c8] text-[#a2832f] shadow-sm'
                    : 'text-slate-600 hover:text-[#a2832f]'
                }`}
              >
                <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f1f5-1f1f9.png" alt="PT" className="h-5 w-5"/>
                <span className="text-sm font-medium">PT</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-4">
              <a href="#hero" className="text-slate-700 hover:text-[#a2832f] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </a>
              <a href="#event-info" className="text-slate-700 hover:text-[#a2832f] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.event')}
              </a>
              <a href="#requirements" className="text-slate-700 hover:text-[#a2832f] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.requirements')}
              </a>
              <a href="#inscripcion" className="text-slate-700 hover:text-[#a2832f] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.registration')}
              </a>
              <a href="#partners" className="text-slate-700 hover:text-[#a2832f] transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.partners')}
              </a>
              
              {/* Language Selector for Mobile */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm font-medium text-slate-600 mb-3">Idioma / Language</p>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => {
                      setLanguage('es');
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      language === 'es'
                        ? 'bg-[#f0e6c8] text-[#a2832f] shadow-sm'
                        : 'text-slate-600 hover:text-[#a2832f] hover:bg-slate-50'
                    }`}
                  >
                    <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f1ea-1f1f8.png" alt="ES" className="h-5 w-5"/>
                    <span className="text-sm font-medium">Español</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      language === 'en'
                        ? 'bg-[#f0e6c8] text-[#a2832f] shadow-sm'
                        : 'text-slate-600 hover:text-[#a2832f] hover:bg-slate-50'
                    }`}
                  >
                    <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f1ec-1f1e7.png" alt="EN" className="h-5 w-5"/>
                    <span className="text-sm font-medium">English</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('pt');
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      language === 'pt'
                        ? 'bg-[#f0e6c8] text-[#a2832f] shadow-sm'
                        : 'text-slate-600 hover:text-[#a2832f] hover:bg-slate-50'
                    }`}
                  >
                    <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f1f5-1f1f9.png" alt="PT" className="h-5 w-5"/>
                    <span className="text-sm font-medium">Português</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;