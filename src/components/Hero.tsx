import React from 'react';
import { useLanguage } from '../contexts/LanguageContext'; // Ajustá esto según tu estructura
import banner_en from '../../img/Banner_en.png';
import banner_es from '../../img/Banner_es.png';

const Hero = () => {
  const { language } = useLanguage(); // Suponiendo que retorna 'en', 'es', etc.

  const bannerByLanguage = {
    en: banner_en,
    es: banner_es,
    pt: banner_es,
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