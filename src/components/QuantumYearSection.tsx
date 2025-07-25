import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import image2 from '../../img/imagen2.jpg';
import image1 from '../../img/imagen1.jpg';
import image5 from '../../img/imagen5.jpeg';
import image7 from '../../img/imagen7.jpeg';
import image8 from '../../img/imagen8.jpeg';
import image9 from '../../img/imagen9.jpeg';
import image4 from '../../img/imagen4.jpg';
import image11 from '../../img/imagen11.jpeg';
import puertobuceo from '../../img/puertobuceo.jpeg';
import FIUM from '../../img/FIUM.jpg';

import oqiLogo from '../../img/Partners/OQI_Logo_2024_d.png'
import quantum2025Logo from '../../img/Partners/Quantum2025.png';

import logoUM from '../../img/logo_um/logo.png';




const QuantumYearSection = () => {
    const { t } = useLanguage();

    // Array de fotos de Uruguay - una para cada letra de MONTEVIDEO
    const uruguayPhotos = [
                {
            src: image2,
            alt: 'Montevideo - O',
            caption: 'Plaza Independencia'
        },
        {
            src: image1,
            alt: 'Montevideo - M',
            caption: 'Punta Colorada'
        },

        {
            src: FIUM,
            alt: 'Montevideo - N',
            caption: 'FIUM'
        },

        {
            src: image5,
            alt: 'Montevideo - E',
            caption: 'Palacio Salvo'
        },
        {
            src: image7,
            alt: 'Montevideo - V',
            caption: 'Puerta de la Ciudadela'
        },
        {
            src: image8,
            alt: 'Montevideo - I',
            caption: 'Plaza Independencia'
        },
        {
            src: image9,
            alt: 'Montevideo - D',
            caption: 'Rambla de Montevideo'
        },
        {
            src: image4,
            alt: 'Montevideo - T',
            caption: 'FIUM'
        },
        {
            src: puertobuceo,
            alt: 'Montevideo - E',
            caption: 'Puerto del Buceo'
        },
        {
            src: image11,
            alt: 'Montevideo - O',
            caption: 'Punta del Este'
        }
    ];

    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState({});

    const montevideoLetters = 'MONTEVIDEO'.split('');

    // Precargar todas las imágenes al montar el componente
    useEffect(() => {
        uruguayPhotos.forEach((photo, index) => {
            const img = new Image();
            img.onload = () => {
                setImagesLoaded(prev => ({ ...prev, [index]: true }));
            };
            img.src = photo.src;
        });
    }, []);

    // Cambio automático de fotos cada 4 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhoto((prev) => (prev + 1) % uruguayPhotos.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 bg-gradient-to-br from-amber-50 to-white-50  relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* UNESCO/Quantum Year Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                        {t('quantumYear.title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text Content */}
                    <div className="space-y-8">
                        {/* Main Description Card */}
                        <div className="bg-white/90 rounded-3xl p-8 border border-amber-200 shadow-xl">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
                                    <img
                                        src={logoUM}
                                        alt="Universidad de Montevideo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    {t('quantumYear.subtitle')}
                                </h3>
                            </div>

                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-green-600">{t('quantumYear.subtitle')}</strong> {t('quantumYear.description')}
                            </p>
                        </div>

                        {/* Organizations Highlights */}
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white/80 rounded-2xl p-6 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center mb-4 h-16">
                                    <a href="https://quantum2025.org" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={quantum2025Logo}
                                            alt="UNESCO Quantum 2025"
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white/80 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center mb-4 h-16">
                                    <a href="https://open-quantum-institute.cern/" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={oqiLogo}
                                            alt="Open Quantum Institute"
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white/80 rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center mb-4 h-16">
                                    <a href="https://www.um.edu.uy" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="https://www.um.edu.uy/themes/custom/um/images/logo.png"
                                            alt="Universidad de Montevideo"
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Circular Images with MONTEVIDEO */}
                    <div className="flex flex-col items-center space-y-8">
                        {/* Circular Image Container */}
                        <div className="relative">
                            <div className="w-80 h-80 relative">
                                {/* Image Carousel - Circular */}
                                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 via-blue-100 to-green-200 border-4 border-white">
                                    {/* Loader inicial mientras cargan las primeras imágenes */}
                                    {!Object.keys(imagesLoaded).length && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-green-200">
                                            <div className="text-center">
                                                <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                                                <p className="text-slate-600 text-sm">Cargando fotos...</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Todas las imágenes pre-renderizadas */}
                                    {uruguayPhotos.map((photo, index) => (
                                        <img
                                            key={index}
                                            src={photo.src}
                                            alt={photo.alt}
                                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                                currentPhoto === index ? 'opacity-100' : 'opacity-0'
                                            }`}
                                            onError={(e) => {
                                                e.currentTarget.classList.add('hidden');
                                            }}
                                        />
                                    ))}

                                    {/* Fallback para imagen específica que no carga */}
                                    {!imagesLoaded[currentPhoto] && Object.keys(imagesLoaded).length > 0 && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-100 to-green-200 flex flex-col items-center justify-center text-center p-8">
                                            <div className="text-6xl mb-4">🏞️</div>
                                            <p className="text-slate-600 text-lg font-medium">
                                                {uruguayPhotos[currentPhoto].caption}
                                            </p>
                                        </div>
                                    )}

                                    {/* Navigation dots - positioned around the circle */}

                                </div>
                            </div>
                        </div>

                        {/* MONTEVIDEO Letters - Con altura fija para evitar saltos */}
                        <div className="h-16 flex items-center justify-center">
                            <div className="flex space-x-3 text-4xl font-bold">
                                {montevideoLetters.map((letter, index) => {
                                    const isActive = currentPhoto === index;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPhoto(index)}
                                            className={`relative transition-all duration-500 cursor-pointer hover:text-green-500 ${
                                                isActive ? 'text-green-600' : 'text-slate-400'
                                            }`}
                                            style={{
                                                transform: isActive ? 'scale(1.25)' : 'scale(1)',
                                                textShadow: isActive ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
                                            }}
                                        >
                                            {letter}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Caption - Con altura fija */}
                        <div className="h-8 flex items-center justify-center">
                            <p className="text-xl font-medium text-slate-700">
                                {uruguayPhotos[currentPhoto].caption}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuantumYearSection;