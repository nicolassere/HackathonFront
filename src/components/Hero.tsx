import React from 'react';
import { useLanguage } from '../contexts/LanguageContext'; // Ajustá esto según tu estructura

const Hero = () => {
  const { language } = useLanguage(); // Suponiendo que retorna 'en', 'es', etc.

  const bannerByLanguage = {
    en: 'img/Banner_en.png',
    es: 'img/Banner_es.png',
  };

  const bannerSrc = bannerByLanguage[language] || 'img/Banner_en.png'; // Fallback

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <img
        src={bannerSrc}
        alt="Quantum LATAM 2025"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default Hero;