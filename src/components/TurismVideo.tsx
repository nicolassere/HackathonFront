import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, RotateCcw, SkipBack, SkipForward } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import turism_es from '../../img/videos/turismo_es.mp4';
import turism_en from '../../img/videos/turismo_en.mp4';
import turism_pt from '../../img/videos/turismo_pt.mp4';

const Turism = () => {
    const { t, language } = useLanguage();
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const volumeBarRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(80);
    const [isDragging, setIsDragging] = useState(false);
    const [isDraggingVolume, setIsDraggingVolume] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isBuffering, setIsBuffering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [previewTime, setPreviewTime] = useState(0);
    const [showPreview, setShowPreview] = useState(false);
    const [previewPosition, setPreviewPosition] = useState(0);
    const [hoverTime, setHoverTime] = useState(0);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);

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

    // Obtener el video según el idioma
    const getVideoSource = () => {
        switch (language) {
            case 'en':
                return turism_en;
            case 'pt':
                return turism_pt;
            case 'es':
            default:
                return "/nextcloud/index.php/s/2rMQpzFgjMQoN7x/download?path=%2F&amp;files=MICE%202022%20castellano.mp4";
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

    const skipTime = (seconds: number) => {
        if (videoRef.current) {
            const newTime = Math.max(0, Math.min(duration, videoRef.current.currentTime + seconds));
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const restart = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            setCurrentTime(0);
            setProgress(0);
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

    const handleWaiting = () => setIsBuffering(true);
    const handleCanPlay = () => setIsBuffering(false);

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
            
            // Auto-play when clicking on timeline
            if (!isPlaying) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handleProgressMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (progressBarRef.current && videoRef.current) {
            const rect = progressBarRef.current.getBoundingClientRect();
            const hoverX = e.clientX - rect.left;
            const percentage = Math.max(0, Math.min(1, hoverX / rect.width));
            const hoverTimeValue = percentage * videoRef.current.duration;
            
            setHoverTime(hoverTimeValue);
            setPreviewPosition(hoverX);
            setShowPreview(true);
            
            // Generate preview frame
            generatePreviewFrame(hoverTimeValue);
        }
    };

    const handleProgressMouseLeave = () => {
        if (!isDragging) {
            setShowPreview(false);
        }
    };

    const generatePreviewFrame = (time: number) => {
        if (videoRef.current && previewCanvasRef.current) {
            const canvas = previewCanvasRef.current;
            const ctx = canvas.getContext('2d');
            
            if (ctx) {
                // Create a temporary video element for preview
                const tempVideo = document.createElement('video');
                tempVideo.src = videoRef.current.src;
                tempVideo.currentTime = time;
                tempVideo.muted = true;
                
                tempVideo.addEventListener('seeked', () => {
                    canvas.width = 160;
                    canvas.height = 90;
                    ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);
                    setPreviewTime(time);
                }, { once: true });
            }
        }
    };
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
        setShowPreview(true);
        
        const wasPlaying = isPlaying;
        if (wasPlaying && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (videoRef.current) {
                const newTime = getTimeFromPosition(e);
                
                // Update preview position and time during drag
                if (progressBarRef.current) {
                    const rect = progressBarRef.current.getBoundingClientRect();
                    const dragX = e.clientX - rect.left;
                    setPreviewPosition(Math.max(0, Math.min(rect.width, dragX)));
                }
                
                videoRef.current.currentTime = newTime;
                setCurrentTime(newTime);
                const progress = (newTime / videoRef.current.duration) * 100;
                setProgress(progress);
                
                // Generate preview frame while dragging
                generatePreviewFrame(newTime);
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            setShowPreview(false);
            
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

    // Auto-hide controls
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showControls && isPlaying) {
            timer = setTimeout(() => {
                setShowControls(false);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [showControls, isPlaying]);

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

                {/* Video Container mejorado */}
                <div className={`transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 border border-white/20 hover:shadow-3xl transition-all duration-500">
                        <div className="relative">
                            {/* Video Player */}
                            <div 
                                className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transform transition-all duration-300 hover:shadow-3xl"
                                onMouseEnter={() => setShowControls(true)}
                                onMouseLeave={() => !isDragging && !showVolumeSlider && setShowControls(false)}
                                onClick={togglePlay}
                            >
                                <video
                                    ref={videoRef}
                                    className="w-full h-auto max-h-[600px] object-cover transition-all duration-300"
                                    onTimeUpdate={handleTimeUpdate}
                                    onLoadedMetadata={handleLoadedMetadata}
                                    onEnded={() => setIsPlaying(false)}
                                    onWaiting={handleWaiting}
                                    onCanPlay={handleCanPlay}
                                    poster="/nextcloud/apps/files_videoplayer/img/poster.png"
                                >
                                    <source src={getVideoSource()} type="video/mp4" />
                                    {t('video.notSupported') || 'Tu navegador no soporta el elemento video.'}
                                </video>

                                {/* Indicador de buffering */}
                                {isBuffering && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#a2832f]"></div>
                                    </div>
                                )}

                                {/* Overlay de Play mejorado */}
                                {!isPlaying && !isBuffering && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-500">
                                        <div className="bg-white/95 backdrop-blur-sm rounded-full p-6 shadow-2xl transform hover:scale-110 transition-all duration-300 group-hover:shadow-3xl">
                                            <Play className="w-16 h-16 text-[#a2832f] ml-2 drop-shadow-lg" />
                                        </div>
                                    </div>
                                )}

                                {/* Controles del Video mejorados */}
                                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 transition-all duration-500 ${
                                    showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}>
                                    {/* Barra de progreso mejorada */}
                                    <div 
                                        ref={progressBarRef}
                                        className="w-full bg-white/20 rounded-full h-2 mb-6 cursor-pointer relative group/progress hover:h-3 transition-all duration-300"
                                        onClick={handleProgressClick}
                                        onMouseMove={handleProgressMouseMove}
                                        onMouseLeave={handleProgressMouseLeave}
                                    >
                                        {/* Preview tooltip */}
                                        {showPreview && (
                                            <div 
                                                className="absolute bottom-6 transform -translate-x-1/2 transition-all duration-200 z-50"
                                                style={{ left: `${Math.max(80, Math.min(previewPosition, progressBarRef.current?.offsetWidth ? progressBarRef.current.offsetWidth - 80 : previewPosition))}px` }}
                                            >
                                                <div className="bg-black/95 backdrop-blur-sm rounded-xl p-3 shadow-2xl border border-white/10">
                                                    {/* Preview canvas */}
                                                    <canvas
                                                        ref={previewCanvasRef}
                                                        className="rounded-lg mb-2 shadow-lg"
                                                        width={160}
                                                        height={90}
                                                    />
                                                    
                                                    {/* Preview time */}
                                                    <div className="text-white text-xs text-center font-medium">
                                                        {formatTime(isDragging ? currentTime : hoverTime)}
                                                    </div>
                                                </div>
                                                
                                                {/* Tooltip arrow */}
                                                <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95"></div>
                                                </div>
                                            </div>
                                        )}
                                        
                                        <div 
                                            className="bg-gradient-to-r from-[#a2832f] to-[#c4a73b] h-full rounded-full transition-all duration-200 relative shadow-lg"
                                            style={{ width: `${progress}%` }}
                                        >
                                            {/* Indicador de posición mejorado */}
                                            <div 
                                                className={`absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-xl cursor-grab transition-all duration-200 z-10 ${
                                                    isDragging ? 'scale-150 cursor-grabbing ring-4 ring-[#a2832f]/30' : 'scale-100 group-hover/progress:scale-125'
                                                }`}
                                                onMouseDown={handleMouseDown}
                                                style={{ 
                                                    boxShadow: isDragging 
                                                        ? '0 0 0 4px rgba(162, 131, 47, 0.3), 0 4px 12px rgba(0,0,0,0.3)' 
                                                        : '0 2px 8px rgba(0,0,0,0.4)',
                                                    background: isDragging 
                                                        ? 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' 
                                                        : '#ffffff'
                                                }}
                                            ></div>
                                        </div>
                                        
                                        {/* Hover preview line */}
                                        {showPreview && !isDragging && (
                                            <div 
                                                className="absolute top-0 w-0.5 h-full bg-white/60 rounded-full transition-all duration-100"
                                                style={{ left: `${previewPosition}px` }}
                                            ></div>
                                        )}
                                        
                                        {/* Línea de preview de fondo mejorada */}
                                        <div className="absolute inset-0 bg-white/15 rounded-full opacity-0 group-hover/progress:opacity-100 transition-all duration-300"></div>
                                    </div>

                                    {/* Controles principales */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            {/* Botón de reinicio */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    restart();
                                                }}
                                                className="text-white/80 hover:text-[#a2832f] transition-all duration-200 p-2 rounded-full hover:bg-white/10 hover:scale-110 transform"
                                            >
                                                <RotateCcw className="w-5 h-5" />
                                            </button>

                                            {/* Botón de retroceso */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    skipTime(-10);
                                                }}
                                                className="text-white/80 hover:text-[#a2832f] transition-all duration-200 p-2 rounded-full hover:bg-white/10 hover:scale-110 transform"
                                            >
                                                <SkipBack className="w-5 h-5" />
                                            </button>

                                            {/* Botón de play/pause mejorado */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    togglePlay();
                                                }}
                                                className="text-white hover:text-[#a2832f] transition-all duration-200 p-3 rounded-full hover:bg-white/10 hover:scale-110 transform bg-white/5"
                                            >
                                                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7" />}
                                            </button>

                                            {/* Botón de avance */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    skipTime(10);
                                                }}
                                                className="text-white/80 hover:text-[#a2832f] transition-all duration-200 p-2 rounded-full hover:bg-white/10 hover:scale-110 transform"
                                            >
                                                <SkipForward className="w-5 h-5" />
                                            </button>

                                            {/* Control de volumen mejorado */}
                                            <div 
                                                className="relative flex items-center space-x-3"
                                                onMouseEnter={() => setShowVolumeSlider(true)}
                                                onMouseLeave={() => !isDraggingVolume && setShowVolumeSlider(false)}
                                            >
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleMute();
                                                    }}
                                                    className="text-white/80 hover:text-[#a2832f] transition-all duration-200 p-2 rounded-full hover:bg-white/10 hover:scale-110 transform"
                                                >
                                                    {isMuted || volume === 0 ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                                                </button>

                                                {/* Slider de volumen mejorado */}
                                                <div className={`absolute left-12 bottom-0 transition-all duration-300 ${
                                                    showVolumeSlider ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                                                }`}>
                                                    <div className="bg-black/90 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-white/10">
                                                        <div 
                                                            ref={volumeBarRef}
                                                            className="w-24 bg-white/20 rounded-full h-2 cursor-pointer relative group/volume hover:h-3 transition-all duration-200"
                                                            onClick={handleVolumeClick}
                                                        >
                                                            <div 
                                                                className="bg-gradient-to-r from-[#a2832f] to-[#c4a73b] h-full rounded-full transition-all duration-200 relative shadow-lg"
                                                                style={{ width: `${volume}%` }}
                                                            >
                                                                {/* Indicador de volumen */}
                                                                <div 
                                                                    className={`absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-xl cursor-grab transition-all duration-200 ${
                                                                        isDraggingVolume ? 'scale-125 cursor-grabbing' : 'scale-100 group-hover/volume:scale-110'
                                                                    }`}
                                                                    onMouseDown={handleVolumeMouseDown}
                                                                    style={{ 
                                                                        boxShadow: isDraggingVolume ? '0 0 0 3px rgba(162, 131, 47, 0.3)' : '0 2px 6px rgba(0,0,0,0.4)' 
                                                                    }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Porcentaje de volumen */}
                                                        <div className="text-white text-xs text-center mt-2 font-medium">
                                                            {Math.round(volume)}%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tiempo actual / Tiempo total */}
                                            <div className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm">
                                                {formatTime(currentTime)} / {formatTime(duration)}
                                            </div>
                                        </div>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleFullscreen();
                                            }}
                                            className="text-white/80 hover:text-[#a2832f] transition-all duration-200 p-2 rounded-full hover:bg-white/10 hover:scale-110 transform"
                                        >
                                            {isFullscreen ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
                                        </button>
                                    </div>
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