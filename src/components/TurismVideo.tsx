import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import turism_es from '../../img/videos/turismo_es.mp4';
import turism_en from '../../img/videos/turismo_en.mp4';
import turism_pt from '../../img/videos/turismo_pt.mp4';

const Turism = () => {
    const { t, language } = useLanguage();
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const volumeBarRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(100);
    const [isDragging, setIsDragging] = useState(false);
    const [isDraggingVolume, setIsDraggingVolume] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Obtener el video según el idioma
    const getVideoSource = () => {
        switch (language) {
            case 'en':
                return turism_en;
            case 'pt':
                return turism_pt;
            case 'es':
            default:
                return turism_es;
        }
    };

    // Función para formatear tiempo en MM:SS
    const formatTime = (time: number) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            if (isMuted) {
                videoRef.current.muted = false;
                videoRef.current.volume = volume / 100;
                setIsMuted(false);
            } else {
                videoRef.current.muted = true;
                setIsMuted(true);
            }
        }
    };

    const handleVolumeChange = (newVolume: number) => {
        if (videoRef.current) {
            const volumeValue = Math.max(0, Math.min(100, newVolume));
            setVolume(volumeValue);
            videoRef.current.volume = volumeValue / 100;
            
            if (volumeValue === 0) {
                setIsMuted(true);
                videoRef.current.muted = true;
            } else {
                setIsMuted(false);
                videoRef.current.muted = false;
            }
        }
    };

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (!isFullscreen) {
                if (videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
            setIsFullscreen(!isFullscreen);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current && !isDragging) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(progress);
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
            videoRef.current.volume = volume / 100;
        }
    };

    const getTimeFromPosition = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
        if (progressBarRef.current && videoRef.current) {
            const rect = progressBarRef.current.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const percentage = Math.max(0, Math.min(1, clickX / width));
            return percentage * videoRef.current.duration;
        }
        return 0;
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current) {
            const newTime = getTimeFromPosition(e);
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
            const progress = (newTime / videoRef.current.duration) * 100;
            setProgress(progress);
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
        
        // Pausar el video al empezar a arrastrar
        const wasPlaying = isPlaying;
        if (wasPlaying && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (videoRef.current) {
                const newTime = getTimeFromPosition(e);
                videoRef.current.currentTime = newTime;
                setCurrentTime(newTime);
                const progress = (newTime / videoRef.current.duration) * 100;
                setProgress(progress);
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            
            // Reanudar el video si estaba reproduciéndose antes
            if (wasPlaying && videoRef.current) {
                videoRef.current.play();
                setIsPlaying(true);
            }
            
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const getVolumeFromPosition = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
        if (volumeBarRef.current) {
            const rect = volumeBarRef.current.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const percentage = Math.max(0, Math.min(1, clickX / width));
            return percentage * 100;
        }
        return volume;
    };

    const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const newVolume = getVolumeFromPosition(e);
        handleVolumeChange(newVolume);
    };

    const handleVolumeMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDraggingVolume(true);

        const handleMouseMove = (e: MouseEvent) => {
            const newVolume = getVolumeFromPosition(e);
            handleVolumeChange(newVolume);
        };

        const handleMouseUp = () => {
            setIsDraggingVolume(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    // Efecto para cambiar el video cuando cambia el idioma
    useEffect(() => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            const wasPlaying = isPlaying;
            
            videoRef.current.src = getVideoSource();
            videoRef.current.load();
            
            const handleLoadedData = () => {
                if (videoRef.current) {
                    videoRef.current.currentTime = currentTime;
                    if (wasPlaying) {
                        videoRef.current.play();
                    }
                }
            };
            
            videoRef.current.addEventListener('loadeddata', handleLoadedData);
            
            return () => {
                if (videoRef.current) {
                    videoRef.current.removeEventListener('loadeddata', handleLoadedData);
                }
            };
        }
    }, [language]);

    return (
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a2832f] to-[#8a6f28] mb-4">
                        {t('video.title') || 'Descubre Uruguay'}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#a2832f] to-[#8a6f28] mx-auto mb-6"></div>
                    <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                        {t('video.subtitle') || 'Un mensaje especial del Ministerio de Turismo de Uruguay para los participantes del Quantum LATAM 2025'}
                    </p>
                </div>

                {/* Video Container */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
                    <div className="relative">
                        {/* Video Player */}
                        <div 
                            className="relative bg-black rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                            onMouseEnter={() => setShowControls(true)}
                            onMouseLeave={() => setShowControls(false)}
                            onClick={togglePlay}
                        >
                            <video
                                ref={videoRef}
                                className="w-full h-auto max-h-[600px] object-cover"
                                onTimeUpdate={handleTimeUpdate}
                                onLoadedMetadata={handleLoadedMetadata}
                                onEnded={() => setIsPlaying(false)}
                                poster="https://via.placeholder.com/800x450/1e293b/ffffff?text=Video+Institucional+Uruguay"
                            >
                                <source src={getVideoSource()} type="video/mp4" />
                                {t('video.notSupported') || 'Tu navegador no soporta el elemento video.'}
                            </video>

                            {/* Overlay de Play cuando está pausado */}
                            {!isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300">
                                    <div className="bg-white/90 rounded-full p-4 shadow-xl transform hover:scale-110 transition-transform">
                                        <Play className="w-12 h-12 text-[#a2832f] ml-1" />
                                    </div>
                                </div>
                            )}

                            {/* Controles del Video */}
                            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-all duration-300 ${
                                showControls ? 'opacity-100' : 'opacity-0'
                            }`}>
                                {/* Barra de progreso */}
                                <div 
                                    ref={progressBarRef}
                                    className="w-full bg-white/20 rounded-full h-1.5 mb-4 cursor-pointer relative group/progress hover:h-2 transition-all duration-200"
                                    onClick={handleProgressClick}
                                >
                                    <div 
                                        className="bg-[#a2832f] h-full rounded-full transition-all duration-100 relative shadow-sm"
                                        style={{ width: `${progress}%` }}
                                    >
                                        {/* Indicador de posición mejorado */}
                                        <div 
                                            className={`absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg cursor-grab transition-all duration-200 ${
                                                isDragging ? 'scale-125 cursor-grabbing' : 'scale-100 group-hover/progress:scale-110'
                                            }`}
                                            onMouseDown={handleMouseDown}
                                            style={{ 
                                                boxShadow: isDragging ? '0 0 0 3px rgba(162, 131, 47, 0.3)' : '0 2px 4px rgba(0,0,0,0.3)' 
                                            }}
                                        ></div>
                                    </div>
                                    
                                    {/* Línea de preview al hover */}
                                    <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity duration-200"></div>
                                </div>

                                {/* Controles */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                togglePlay();
                                            }}
                                            className="text-white hover:text-[#a2832f] transition-colors p-1 rounded-full hover:bg-white/10"
                                        >
                                            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                                        </button>

                                        {/* Control de volumen */}
                                        <div 
                                            className="relative flex items-center space-x-2"
                                            onMouseEnter={() => setShowVolumeSlider(true)}
                                            onMouseLeave={() => !isDraggingVolume && setShowVolumeSlider(false)}
                                        >
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleMute();
                                                }}
                                                className="text-white hover:text-[#a2832f] transition-colors p-1 rounded-full hover:bg-white/10"
                                            >
                                                {isMuted || volume === 0 ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                                            </button>

                                            {/* Slider de volumen */}
                                            <div className={`absolute left-10 bottom-0 transition-all duration-200 ${
                                                showVolumeSlider ? 'opacity-100 visible' : 'opacity-0 invisible'
                                            }`}>
                                                <div className="bg-black/80 rounded-lg p-3 shadow-xl">
                                                    <div 
                                                        ref={volumeBarRef}
                                                        className="w-20 bg-white/20 rounded-full h-1.5 cursor-pointer relative group/volume hover:h-2 transition-all duration-200"
                                                        onClick={handleVolumeClick}
                                                    >
                                                        <div 
                                                            className="bg-[#a2832f] h-full rounded-full transition-all duration-100 relative"
                                                            style={{ width: `${volume}%` }}
                                                        >
                                                            {/* Indicador de volumen */}
                                                            <div 
                                                                className={`absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg cursor-grab transition-all duration-200 ${
                                                                    isDraggingVolume ? 'scale-125 cursor-grabbing' : 'scale-100 group-hover/volume:scale-110'
                                                                }`}
                                                                onMouseDown={handleVolumeMouseDown}
                                                                style={{ 
                                                                    boxShadow: isDraggingVolume ? '0 0 0 3px rgba(162, 131, 47, 0.3)' : '0 2px 4px rgba(0,0,0,0.3)' 
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Porcentaje de volumen */}
                                                    <div className="text-white text-xs text-center mt-1 font-medium">
                                                        {Math.round(volume)}%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tiempo actual / Tiempo total */}
                                        <div className="text-white text-sm font-medium">
                                            {formatTime(currentTime)} / {formatTime(duration)}
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFullscreen();
                                        }}
                                        className="text-white hover:text-[#a2832f] transition-colors p-1 rounded-full hover:bg-white/10"
                                    >
                                        {isFullscreen ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Turism;