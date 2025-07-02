import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const QuantumYearSection = () => {
    const { t } = useLanguage();

    // Array de fotos de Uruguay - una para cada letra de MONTEVIDEO
    const uruguayPhotos = [
        {
            src: 'https://www.peñarol.org/imgnoticias/202501/W723_H488/26970.jpeg',
            alt: 'Montevideo - M',
            caption: 'Montevideo'
        },
        {
            src: 'https://www.geaconsultores.com/wp-content/uploads/2018/01/CAP.jpg',
            alt: 'Montevideo - O',
            caption: 'Rambla'
        },
        {
            src: 'https://a.espncdn.com/photo/2024/0515/r1333421_1296x729_16-9.jpg',
            alt: 'Montevideo - N',
            caption: 'Ciudad Vieja'
        },
        {
            src: 'https://media.carasycaretas.com.uy/p/222531da77930975e51f1b85a0250f62/adjuntos/328/imagenes/000/101/0000101916/dan_2794jpg.jpg',
            alt: 'Montevideo - T',
            caption: 'Teatro Solís'
        },
        {
            src: 'https://www.peñarol.org/imgnoticias/202501/W723_H488/26970.jpeg',
            alt: 'Montevideo - E',
            caption: 'Estadio Centenario'
        },
        {
            src: 'https://www.peñarol.org/imgnoticias/202501/W723_H488/26970.jpeg',
            alt: 'Montevideo - V',
            caption: 'Puerto'
        },
        {
            src: 'https://www.peñarol.org/imgnoticias/202501/W723_H488/26970.jpeg',
            alt: 'Montevideo - I',
            caption: 'Palacio Legislativo'
        },
        {
            src: 'https://www.peñarol.org/imgnoticias/202501/W723_H488/26970.jpeg',
            alt: 'Montevideo - D',
            caption: 'Mercado del Puerto'
        },
        {
            src: 'https://www.peñarol.org/imgnoticias/202501/W723_H488/26970.jpeg',
            alt: 'Montevideo - E',
            caption: 'Parque Rodó'
        },
        {
            src: 'https://www.peñarol.org/imgnoticias/202501/W723_H488/26970.jpeg',
            alt: 'Montevideo - O',
            caption: 'Plaza Independencia'
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
        <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-400"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-orange-400"></div>
                <div className="absolute top-40 right-1/4 w-16 h-16 rounded-full bg-yellow-400"></div>
            </div>

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
                                        src="img/logo_um/img.png"
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
                                            src="img/Partners/Quantum2025.png"
                                            alt="UNESCO 2025"
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white/80 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center mb-4 h-16">
                                    <a href="https://open-quantum-institute.cern/" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="img/Partners/OQI_Logo_2024_d.png"
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
                                    <div className="absolute inset-0">
                                        {uruguayPhotos.map((_, index) => {
                                            const angle = (index * 36) - 90; // 360/10 = 36 degrees per photo
                                            const radius = 130; // Distance from center
                                            const x = Math.cos(angle * Math.PI / 180) * radius;
                                            const y = Math.sin(angle * Math.PI / 180) * radius;

                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentPhoto(index)}
                                                    className={`absolute w-4 h-4 rounded-full transition-all duration-300 ${
                                                        index === currentPhoto
                                                            ? 'bg-green-600 scale-125 shadow-lg'
                                                            : 'bg-white/60 hover:bg-white/80 shadow-md'
                                                    }`}
                                                    style={{
                                                        left: `calc(50% + ${x}px)`,
                                                        top: `calc(50% + ${y}px)`,
                                                        transform: 'translate(-50%, -50%)'
                                                    }}
                                                    aria-label={`Ver foto ${index + 1}`}
                                                />
                                            );
                                        })}
                                    </div>

                                    {/* Previous/Next buttons */}
                                    <button
                                        onClick={() => setCurrentPhoto((prev) => prev === 0 ? uruguayPhotos.length - 1 : prev - 1)}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 hover:opacity-100"
                                        aria-label="Foto anterior"
                                    >
                                        ←
                                    </button>

                                    <button
                                        onClick={() => setCurrentPhoto((prev) => (prev + 1) % uruguayPhotos.length)}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 hover:opacity-100"
                                        aria-label="Foto siguiente"
                                    >
                                        →
                                    </button>
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