import React, { useState, useEffect } from 'react';

const QuantumYearSection = () => {
    // Array de fotos de Uruguay
    const uruguayPhotos = [
        {
            src: 'https://cdn-italiani-media.italiani.it/site-montevideo/sites/84/2020/04/Rambla-de-Montevideo-Parque-Rodo.jpg',
            alt: 'Montevideo',
            caption: 'Montevideo'
        },
        {
            src: 'https://www.peñarol.org/imgnoticias/202101/22314.jpeg',
            alt: 'Campeon del Siglo',
            caption: 'Campeón del Siglo'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/3/37/R%C3%ADo_Negro_Paso_del_Puerto.jpg',
            alt: 'Rio Negro',
            caption: 'Río Negro'
        },
        {
            src: 'https://www.awahotel.com/assets/cache/uploads/entorno/1920x1080/punta-del-este-uruguay-awa-boutique-design-hotel-1724749818.jpeg',
            alt: 'Cabo Polonio',
            caption: 'Cabo Polonio'
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAEhICC1_AKgQG2jSmQfK8ciKcgkXnY37GA&s',
            alt: 'Salto',
            caption: 'Salto'
        }
    ];

    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Cambio automático de fotos cada 4 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhoto((prev) => (prev + 1) % uruguayPhotos.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [uruguayPhotos.length]);

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
                        2025 - Año Internacional de la Ciencia y Tecnología Cuántica
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
                                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center">
                                    <span className="text-white text-2xl">🏆</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Quantum Hackathon LATAM 2025
                                </h3>
                            </div>

                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-green-600">Quantum Hackathon LATAM 2025</strong> es una iniciativa de la
                                Universidad de Montevideo, organizada en colaboración con el Open Quantum Institute (CERN),
                                como parte de las actividades para el Año Internacional de la Ciencia y Tecnología Cuántica,
                                declarado por UNESCO para 2025.
                            </p>
                        </div>

                        {/* Organizations Highlights */}
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white/80 rounded-2xl p-6 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center mb-4 h-16">
                                    <a href="https://quantum2025.org" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="https://quantum2025.org/wp-content/uploads/2024/12/IYQST-horiz-rgb.png"
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
                                            src="https://hackathon.nyuad.nyu.edu/wp-content/uploads/2025/02/OQI-Logo-2.png"
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

                    {/* Right side - Uruguay Image Placeholder */}
                    <div className="space-y-6">
                        {/* Main Image Container */}
                        <div className="relative group">
                            <div className="bg-white/90 rounded-3xl p-6 border border-amber-200 shadow-xl">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                                    🇺🇾 Hermosos paisajes de Uruguay
                                </h3>

                                <p className="text-center text-slate-600 mb-4 text-sm">
                                    Descubre los lugares más emblemáticos de nuestro país anfitrión
                                </p>

                                {/* Image Carousel */}
                                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-100 via-blue-100 to-green-200">
                                    {isLoading && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                                                <p className="text-slate-600 text-sm">Cargando fotos...</p>
                                            </div>
                                        </div>
                                    )}

                                    <img
                                        src={uruguayPhotos[currentPhoto].src}
                                        alt={uruguayPhotos[currentPhoto].alt}
                                        className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                        onLoad={() => setIsLoading(false)}
                                        onError={(e) => {
                                            setIsLoading(false);
                                            // Ocultar imagen fallida
                                            e.currentTarget.classList.add('hidden');
                                            // Mostrar placeholder de fallback
                                            const fallback = e.currentTarget.parentNode.querySelector('.fallback-placeholder');
                                            if (fallback) fallback.classList.remove('hidden');
                                        }}
                                    />
                                    <div className="fallback-placeholder absolute inset-0 bg-gradient-to-br from-green-100 via-blue-100 to-green-200 border-2 border-dashed border-green-300 flex flex-col items-center justify-center text-center p-8 hidden">
                                        <div className="text-6xl mb-4">🏞️</div>
                                        <p className="text-slate-600 text-lg font-medium">
                                            {uruguayPhotos[currentPhoto].caption}
                                        </p>
                                        <p className="text-slate-500 text-sm mt-2">
                                            (Imagen no disponible)
                                        </p>
                                    </div>

                                    {/* Caption overlay */}
                                    {!isLoading && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                            <p className="text-white font-medium text-lg">
                                                {uruguayPhotos[currentPhoto].caption}
                                            </p>
                                        </div>
                                    )}

                                    {/* Navigation dots */}
                                    {!isLoading && (
                                        <div className="absolute bottom-4 right-4 flex space-x-2">
                                            {uruguayPhotos.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        setCurrentPhoto(index);
                                                        setIsLoading(true);
                                                    }}
                                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                        index === currentPhoto
                                                            ? 'bg-white scale-110'
                                                            : 'bg-white/50 hover:bg-white/75'
                                                    }`}
                                                    aria-label={`Ver foto ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {/* Previous/Next buttons */}
                                    {!isLoading && (
                                        <>
                                            <button
                                                onClick={() => {
                                                    setCurrentPhoto((prev) =>
                                                        prev === 0 ? uruguayPhotos.length - 1 : prev - 1
                                                    );
                                                    setIsLoading(true);
                                                }}
                                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                                                aria-label="Foto anterior"
                                            >
                                                ←
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setCurrentPhoto((prev) => (prev + 1) % uruguayPhotos.length);
                                                    setIsLoading(true);
                                                }}
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                                                aria-label="Foto siguiente"
                                            >
                                                →
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Card */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuantumYearSection;