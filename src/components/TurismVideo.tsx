import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Turism = () => {
    const { t, language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // YouTube video IDs for each language
    const getVideoId = () => {
        switch (language) {
            case 'en':
                return 'wYJA6fYfVwI'; 
            case 'pt':
                return 'wYJA6fYfVwI'; // POR AHORA SE USA SIEMPRE EL MISMO HASTA VER QUE HACER CON LOS DE INGLES Y PORTUGUES
            case 'es':
            default:
                return 'wYJA6fYfVwI'; 
        }
    };

    // Intersection Observer para animaciones
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Generate YouTube embed URL with parameters
    const getYouTubeEmbedUrl = () => {
        const videoId = getVideoId();
        const params = new URLSearchParams({
            // Basic embed parameters
            enablejsapi: '1',
            origin: window.location.origin,
            // Quality and playback settings
            hd: '1',
            rel: '0', // Don't show related videos from other channels
            modestbranding: '1', // Minimal YouTube branding
            // Language settings
            hl: language,
            cc_lang_pref: language,
            cc_load_policy: '1', // Show captions by default
            // Player appearance
            color: 'white',
            // Controls and info
            showinfo: '0',
            iv_load_policy: '3', // Don't show video annotations
        });
        
        return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    };

    return (
        <section 
            ref={containerRef}
            className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
        >
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#a2832f]/10 to-[#8a6f28]/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header mejorado */}
                <div className={`text-center mb-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="inline-flex items-center justify-center mb-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-[#a2832f] to-transparent w-24"></div>
                        <div className="mx-4 w-3 h-3 bg-[#a2832f] rounded-full"></div>
                        <div className="h-px bg-gradient-to-r from-transparent via-[#a2832f] to-transparent w-24"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a2832f] via-[#c4a73b] to-[#8a6f28] mb-6 tracking-tight leading-tight">
                        {t('video.title') || 'Descubre Uruguay'}
                    </h2>
                    
                    <div className="w-32 h-1.5 bg-gradient-to-r from-[#a2832f] to-[#8a6f28] mx-auto mb-8 rounded-full shadow-lg"></div>
                    
                    <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light">
                        {t('video.subtitle') || 'Un mensaje especial del Ministerio de Turismo de Uruguay para los participantes del Quantum LATAM 2025'}
                    </p>
                </div>

                {/* YouTube Video Container */}
                <div className={`transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
                        <div className="relative">
                            {/* YouTube Embed Container */}
                            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl group transform transition-all duration-300 hover:shadow-3xl">
                                {/* Responsive YouTube iframe */}
                                <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-2xl"
                                        src={getYouTubeEmbedUrl()}
                                        title={t('video.title') || 'Uruguay Tourism Video'}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        loading="lazy"
                                        style={{
                                            border: 'none',
                                            borderRadius: '1rem'
                                        }}
                                    />
                                </div>
                                
                                {/* Optional: Loading overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                    <div className="text-white text-lg font-medium">
                                        {t('video.loading') || 'Cargando video...'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optional: Video description or additional info */}
                <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
     
                </div>
            </div>
        </section>
    );
};

export default Turism;