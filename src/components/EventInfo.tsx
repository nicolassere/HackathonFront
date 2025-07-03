import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Clock, Target, Award, BookOpen, Users, UserPlus, ExternalLink, Mail, MapPin, Calendar, ChevronDown, Atom, Zap, Cpu, Brain } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Importa tus imágenes aquí
import image1 from '../../img/osd1.png';
import image2 from '../../img/osd2.png';
import image3 from '../../img/osd3.png';

const EventInfo = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

 const features = [
  {
    title: t("osd1.title"),
    description: t("osd1.description"),
    color: "from-[#27bfe6] to-[#48c9b0]", // turquesa claro como cierre
    bgColor: "from-[#e0f7fb] to-[#d0f5f0]", // tonos pastel compatibles
    image: image1
  },
  {
    title: t("osd2.title"),
    description: t("osd2.description"),
    color: "from-[#fd9d24] to-[#faaa63]", // naranja cálido a durazno
    bgColor: "from-[#fff3e0] to-[#ffeed9]", // crema suave
    image: image2
  },
  {
    title: t("osd3.title") ,
    description: t("osd3.description") ,
    color: "from-[#467e4a] to-[#7dbf75]", // verde bosque a verde claro
    bgColor: "from-[#e6f2e7] to-[#dff5de]", // verdes pasteles suaves
    image: image3
  }
];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="event-info" className="pt-24 pb-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/50 to-pink-100/50 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t("osd.title1") }
            <span className="block bg-gradient-to-r from-[#075184] to-blue-600 bg-clip-text text-transparent">
              {t("osd.title2")} 
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t("osd.description")} 
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl transition-all duration-500 transform cursor-pointer ${
                activeFeature === index
                  ? 'scale-105 shadow-2xl'
                  : 'hover:scale-105 hover:shadow-xl'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              {/* Imagen principal como icono */}
              <div className="relative z-10 p-8 text-center">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-6 shadow-lg transform transition-transform duration-300 hover:rotate-3 overflow-hidden ${
                  activeFeature === index ? 'ring-4 ring-white/50' : ''
                }`}>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Fondo con gradiente sutil */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                activeFeature === index 
                  ? feature.bgColor 
                  : 'from-slate-50 to-blue-50'
              } transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventInfo;