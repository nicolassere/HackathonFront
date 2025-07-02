import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hidden sm:flex items-center space-x-2 group transition-all duration-300 hover:scale-105"
            >
              <img 
                src="img/HackathonLogoHeader.png" 
                alt="Hackathon Logo" 
                className="h-8 w-auto transition-transform duration-300 group-hover:rotate-3" 
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                  Quantum LATAM 2025
                </p>
                <p className="text-xs text-slate-600">Universidad de Montevideo</p>
              </div>
            </button>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
<<<<<<< HEAD
            <a href="#hero" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              {t('nav.home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#event-info" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              {t('nav.event')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#requirements" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              {t('nav.requirements')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#inscripcion" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              {t('nav.registration')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#partners" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              {t('nav.partners')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
=======
            {[
              { key: 'nav.home', id: 'hero' },
              { key: 'nav.event', id: 'event-info' },
              { key: 'nav.requirements', id: 'requirements' },
              { key: 'nav.registration', id: 'registration' },
              { key: 'nav.partners', id: 'partners' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Language Switcher */}
>>>>>>> 9fa209bbab27ea7dcacb29e1200f612853bc1c4d
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-all ${
                  language === 'es'
                    ? 'bg-blue-100 text-blue-700 shadow-sm'
                    : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                <span className="text-lg">🇪🇸</span>
                <span className="text-sm font-medium">ES</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-blue-100 text-blue-700 shadow-sm'
                    : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                <span className="text-lg">🇬🇧</span>
                <span className="text-sm font-medium">EN</span>
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
<<<<<<< HEAD
              <a href="#hero" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </a>
              <a href="#event-info" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.event')}
              </a>
              <a href="#requirements" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.requirements')}
              </a>
              <a href="#inscripcion" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.registration')}
              </a>
              <a href="#partners" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.partners')}
              </a>
=======
              {[
                { key: 'nav.home', id: 'hero' },
                { key: 'nav.event', id: 'event-info' },
                { key: 'nav.requirements', id: 'requirements' },
                { key: 'nav.registration', id: 'registration' },
                { key: 'nav.partners', id: 'partners' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  {t(item.key)}
                </button>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setLanguage('es')}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-all ${
                    language === 'es'
                      ? 'bg-blue-100 text-blue-700'
                      : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <span className="text-lg">🇪🇸</span>
                  <span className="text-sm font-medium">ES</span>
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-all ${
                    language === 'en'
                      ? 'bg-blue-100 text-blue-700'
                      : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <span className="text-lg">🇬🇧</span>
                  <span className="text-sm font-medium">EN</span>
                </button>
              </div>
>>>>>>> 9fa209bbab27ea7dcacb29e1200f612853bc1c4d
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;