import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Clock, Target, Award, BookOpen, Users, UserPlus, ExternalLink, Mail, MapPin, Calendar, ChevronDown, Atom, Zap, Cpu, Brain } from 'lucide-react';

// Enhanced Header Component with smooth animations
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    } border-b border-slate-200/50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center overflow-hidden group">
              <Atom className="w-6 h-6 text-white transition-transform duration-500 group-hover:rotate-180" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quantum LATAM 2025
              </h1>
              <p className="text-sm text-slate-600">Universidad de Montevideo</p>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#event-info" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Evento
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#registration" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Registro
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#partners" className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
              Partners
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="flex items-center space-x-2 bg-slate-100 rounded-lg px-3 py-1">
              <Globe className="w-4 h-4 text-slate-500" />
              <select className="text-sm bg-transparent border-none text-slate-700 font-medium cursor-pointer">
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-4">
              <a href="#hero" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </a>
              <a href="#event-info" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Evento
              </a>
              <a href="#registration" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Registro
              </a>
              <a href="#partners" className="text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Partners
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;