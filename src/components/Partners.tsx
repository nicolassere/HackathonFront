import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import oqiLogo from '../../img/Partners/OQI_Logo_2024_d.png';
import quantum2025Logo from '../../img/Partners/Quantum2025.png';
import ieeeR9Logo from '../../img/Partners/IeeeR9.png';
import cleiLogo from '../../img/CLEI2025.png';
import ripaiscLogo from '../../img/Partners/Ripaisc.png';
import aniiLogo from '../../img/Partners/anii.png'; 

const Partners: React.FC = () => {
  const { t } = useLanguage();
  const partners = [
    {
      name: "Open Quantum Institute",
      description: "CERN's initiative advancing quantum technology for humanity",
      url: "https://open-quantum-institute.cern/",
      logo: oqiLogo
    },
    {
      name: "Quantum 2025",
      description: "Leading quantum computing conference",
      url: "https://quantum2025.org/es/",
      logo: quantum2025Logo
    },
    {
      name: "IEEE Region 9",
      description: "IEEE Latin America and Caribbean",
      url: "https://r9.ieee.org/",
      logo: ieeeR9Logo
    }
  ];

  const supporters = [
    {
      name: "CLEI",
      description: "Latin American Center for Informatics Studies",
      url: "https://clei.org/",
      logo: cleiLogo
    },
    {
      name: "RIPAISAC",
      description: "Latin American Network for High Performance Computing",
      url: "https://www.ripaisc.net/",
      logo: ripaiscLogo
    },
    {
      name: "ANII",
      description: "National Research and Innovation Agency of Uruguay",
      url: "https://www.anii.org.uy/",
      logo: aniiLogo
    }
  ];

  return (
      <section id="partners" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t('partners.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('partners.subtitle')}
            </p>
          </div>

          {/* Strategic Partners Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{t('partners.strategic')}</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
              {partners.map((partner, index) => (
                  <a
                      key={index}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transition-all duration-300 transform hover:scale-110"
                      title={partner.description}
                  >
                    <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-16 w-auto max-w-[200px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'h-16 w-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold';
                          fallback.textContent = partner.name;
                          target.parentNode?.appendChild(fallback);
                        }}
                    />
                  </a>
              ))}
            </div>
          </div>

          {/* Academic Supporters Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{t('partners.academic')}</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
              {supporters.map((supporter, index) => (
                  <a
                      key={index}
                      href={supporter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transition-all duration-300 transform hover:scale-110"
                      title={supporter.description}
                  >
                    <img
                        src={supporter.logo}
                        alt={`${supporter.name} logo`}
                        className="h-16 w-auto max-w-[200px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'h-16 w-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center text-green-600 font-semibold';
                          fallback.textContent = supporter.name;
                          target.parentNode?.appendChild(fallback);
                        }}
                    />
                  </a>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Partners;