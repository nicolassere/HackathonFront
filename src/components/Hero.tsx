import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Imágenes para desktop
import banner_en from '../../img/Banner_en.png';
import banner_es from '../../img/Banner_es.png';

// Imágenes para móvil (agregar estas nuevas imágenes)
import banner_mobile_en from '../../img/Banner_mobile_en.png';
import banner_mobile_es from '../../img/Banner_mobile_es.png';

const Hero = () => {
  const { language } = useLanguage();
  
  const bannerByLanguage = {
    en: banner_en,
    es: banner_es,
    pt: banner_es,
  };

  const bannerMobileByLanguage = {
    en: banner_mobile_es,
    es: banner_mobile_es,
    pt: banner_mobile_es,
  };

  const bannerSrc = bannerByLanguage[language] || banner_en;
  const bannerMobileSrc = bannerMobileByLanguage[language] || banner_mobile_en;

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Imagen para Desktop - oculta en móvil */}
      <div className="hidden md:block w-full h-[80vh] lg:h-[90vh] xl:h-[100vh]">
        <img
          src={bannerSrc}
          alt="Quantum LATAM 2025"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Imagen para Móvil - oculta en desktop */}
      <div className="block md:hidden w-full h-[60vh] sm:h-[65vh]">
        <img
          src={bannerMobileSrc}
          alt="Quantum LATAM 2025"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Contenido superpuesto (opcional) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Aquí puedes agregar contenido superpuesto si es necesario */}
        </div>
      </div>
    </section>
  );
};

export default Hero;