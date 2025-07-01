import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Clock, Target, Award, BookOpen, Users, UserPlus, ExternalLink, Mail, MapPin, Calendar, ChevronDown, Atom, Zap, Cpu, Brain } from 'lucide-react';
// Enhanced Hero Section with animations and floating elements
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Floating Quantum Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[Atom, Zap, Cpu, Brain].map((Icon, i) => (
          <Icon
            key={i}
            className="absolute text-blue-400/20 animate-bounce"
            size={24}
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Interactive mouse follower */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Title with Gradient Animation */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Quantum
            </span>
            <span className="block text-white">LATAM 2025</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          El hackathon de computación cuántica más grande de Latinoamérica 
          <span className="block mt-2 text-purple-300 font-semibold">
            Quantum Computing for Climate Action
          </span>
        </p>

        {/* Event Details Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <p className="text-white font-semibold">1-3 Octubre 2025</p>
            <p className="text-blue-200 text-sm">72 horas intensivas</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <p className="text-white font-semibold">Universidad de Montevideo</p>
            <p className="text-purple-200 text-sm">Montevideo, Uruguay</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Award className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <p className="text-white font-semibold">Premios & Reconocimiento</p>
            <p className="text-pink-200 text-sm">Global recognition</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#registration"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25"
          >
            Registrarse Ahora
            <ExternalLink className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#event-info"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
          >
            Conocer Más
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};
export default Hero;