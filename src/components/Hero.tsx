import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = "img/Banner.png";
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('event-info')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Loading State */}
      <div className="absolute inset-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 animate-pulse"></div>
        )}
        <img
          src="img/Banner.png" 
          alt="Quantum LATAM 2025"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="block mb-2">Hackathon LATAM</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum 2025
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Computación Cuántica para la Acción Climática
          </p>

          {/* Event Details Cards */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-200">1-3 Octubre</p>
              <p className="text-xs text-slate-300">2025</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-200">Montevideo</p>
              <p className="text-xs text-slate-300">Uruguay</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-200">72 Horas</p>
              <p className="text-xs text-slate-300">Intensivas</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="#requirements"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Únete al Hackathon
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
            <a
              href="https://qworld.net/oqi-hackathon-course/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50"
            >
              Curso de Preparación
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-scroll"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;