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
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HzBZF32jm2GlG0iIQbLbMYQRAlyrFptSSQ&s',
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
    const [imagesLoaded, setImagesLoaded] = useState({});

<<<<<<< HEAD
=======
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

>>>>>>> a4fd95b3f02c02571861194024695d702c098b6a
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
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
                                    <img
                                        src="img/logo_um/img.png"
                                        alt="Universidad de Montevideo"
                                        className="w-full h-full object-contain"
                                    />
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

<<<<<<< HEAD
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
=======
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
>>>>>>> a4fd95b3f02c02571861194024695d702c098b6a
                                            <div className="text-center">
                                                <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                                                <p className="text-slate-600 text-sm">Cargando fotos...</p>
                                            </div>
                                        </div>
                                    )}

<<<<<<< HEAD
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
=======
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
>>>>>>> a4fd95b3f02c02571861194024695d702c098b6a
                                </div>
                            </div>
                        </div>

<<<<<<< HEAD
                        {/* Additional Info Card */}
=======
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
>>>>>>> a4fd95b3f02c02571861194024695d702c098b6a
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuantumYearSection;