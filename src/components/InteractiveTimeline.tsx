import React, { useState, useRef, useEffect } from 'react';
import { CountdownTimer } from './CountdownTimer';

// 🖼️ Importá las imágenes correspondientes
import timelineImage from '../../img/ImagenInicial.png';
import registrationImage from '../../img/Imagen15_07.png';
import preselectionImage from '../../img/Imagen27_07.png';
import courseImage from '../../img/Imagen04_08.png';
import selectionImage from '../../img/imagen_2damedicion.png';
import hackathonImage from '../../img/Imagen_0210.png';
import { useLanguage } from '../contexts/LanguageContext';

interface ColumnData {
  id: string;
  name: string;
  description: string;
  detailedInfo: {
    dateRange: string;
    primaryInfo: {
      title: string;
      items: string[];
    };
    secondaryInfo: {
      title: string;
      items: string[];
    };
    participants?: string;
  };
  startX: number;
  endX: number;
  color: string;
  textColor: string;
  image: string;
  targetDate: string;
}

interface InteractiveTimelineProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({
  className = '',
  imageSrc = timelineImage,
  imageAlt = 'Timeline del Hackathon',
}) => {
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [pinnedColumn, setPinnedColumn] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  const columns: ColumnData[] = [
    {
      id: 'registration',
      name: t('timeline.registration.name'),
      description: t('timeline.registration.description'),
      detailedInfo: {
        dateRange: '1 - 15 Julio 2025',
        participants: t('timeline.registration.participants'),
        primaryInfo: {
          title: t('timeline.registration.primaryInfo.title'),
          items: [
            t('timeline.registration.primaryInfo.items.0'),
            t('timeline.registration.primaryInfo.items.3'),
            t('timeline.registration.primaryInfo.items.1')
          ]
        },
        secondaryInfo: {
          title: t('timeline.registration.secondaryInfo.title'),
          items: [
            t('timeline.registration.secondaryInfo.items.0'),
            t('timeline.registration.secondaryInfo.items.3'),
            t('timeline.registration.secondaryInfo.items.1'),
          ]
        }
      },
      startX: 15,
      endX: 32,
      color: 'bg-[#27bfe6]',
      textColor: 'text-cyan-700',
      image: registrationImage,
      targetDate: '2025-07-15T23:59:59',
    },
    {
      id: 'preselection',
      name: t('timeline.preselection.name'),
      description: t('timeline.preselection.description'),
      detailedInfo: {
        dateRange: '27 Julio 2025',
        participants: t('timeline.preselection.participants'),
        primaryInfo: {
          title: t('timeline.preselection.primaryInfo.title'),
          items: [
            t('timeline.preselection.primaryInfo.items.0'),
            t('timeline.preselection.primaryInfo.items.1'),
          ]
        },
        secondaryInfo: {
          title: t('timeline.preselection.secondaryInfo.title'),
          items: [
            t('timeline.preselection.secondaryInfo.items.0'),
            t('timeline.preselection.secondaryInfo.items.1'),
            t('timeline.preselection.secondaryInfo.items.2'),
            t('timeline.preselection.secondaryInfo.items.3')
          ]
        }
      },
      startX: 32,
      endX: 49,
      color: 'bg-[#27bfe6]',
      textColor: 'text-cyan-700',
      image: preselectionImage,
      targetDate: '2025-07-27T23:59:59',
    },
    {
      id: 'course',
      name: t('timeline.course.name'),
      description: t('timeline.course.description'),
      detailedInfo: {
        dateRange: '04 - 13 Ago 2025',
       participants: t('timeline.course.participants'),
        primaryInfo: {
          title: t('timeline.course.primaryInfo.title'),
          items: [
            t('timeline.course.primaryInfo.items.0'),
            t('timeline.course.primaryInfo.items.1'),
            t('timeline.course.primaryInfo.items.2'),
          ]
        },
        secondaryInfo: {
          title: t('timeline.course.secondaryInfo.title'),
          items: [
            t('timeline.course.secondaryInfo.items.0'),
            t('timeline.course.secondaryInfo.items.1'),
            t('timeline.course.secondaryInfo.items.2'),
            t('timeline.course.secondaryInfo.items.3')
          ]
        }
      },
      startX: 49,
      endX: 66,
      color: 'bg-[#467e4a]',
      textColor: 'text-[#467e4a]',
      image: courseImage,
      targetDate: '2025-08-04T09:00:00',
    },
    {
      id: 'selection',
      name: t('timeline.selection.name'),
      description: t('timeline.selection.description'),
      detailedInfo: {
        dateRange: '27 Ago  2025',
        participants: t('timeline.selection.participants'),
        primaryInfo: {
          title: t('timeline.selection.primaryInfo.title'),
          items: [
            t('timeline.preselection.primaryInfo.items.0'),
            t('timeline.preselection.primaryInfo.items.1'),
            t('timeline.selection.primaryInfo.items.3')
          ]
        },
        secondaryInfo: {
          title: t('timeline.selection.secondaryInfo.title'),
          items: [
            t('timeline.selection.secondaryInfo.items.0'),
            t('timeline.selection.secondaryInfo.items.1'),
            t('timeline.selection.secondaryInfo.items.2'),
            t('timeline.selection.secondaryInfo.items.3')
          ]
        }
      },
      startX: 66,
      endX: 81,
      color: 'bg-[#467e4a]',
      textColor: 'text-[#467e4a]',
      image: selectionImage,
      targetDate: '2025-08-27T23:59:59',
    },
    {
      id: 'hackathon',
      name: t('timeline.hackathon.name'),
      description: t('timeline.hackathon.description'),
      detailedInfo: {
        dateRange: '1 - 3 Oct 2025',
        participants: t('timeline.hackathon.participants'),
        primaryInfo: {
          title: t('timeline.hackathon.primaryInfo.title'),
          items: [
            t('timeline.hackathon.primaryInfo.items.0'),
            t('timeline.hackathon.primaryInfo.items.1'),
            t('timeline.hackathon.primaryInfo.items.2'),
            t('timeline.hackathon.primaryInfo.items.3')
          ]
        },
        secondaryInfo: {
          title: t('timeline.hackathon.secondaryInfo.title'),
          items: [
            t('timeline.hackathon.secondaryInfo.items.0'),
            t('timeline.hackathon.secondaryInfo.items.1'),
            t('timeline.hackathon.secondaryInfo.items.2'),
            t('timeline.hackathon.secondaryInfo.items.3')
          ]
        }
      },
      startX: 81,
      endX: 95,
      color: 'bg-[#fd9d24]',
      textColor: 'text-[#fd9d24]',
      image: hackathonImage,
      targetDate: '2025-10-01T09:00:00',
    },
  ];

  // Update image dimensions when image loads or window resizes
  useEffect(() => {
    const updateImageDimensions = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setImageDimensions({
          width: rect.width,
          height: rect.height
        });
      }
    };

    const handleResize = () => {
      updateImageDimensions();
    };

    const handleImageLoad = () => {
      updateImageDimensions();
    };

    if (imageRef.current) {
      imageRef.current.addEventListener('load', handleImageLoad);
    }

    window.addEventListener('resize', handleResize);
    
    // Initial measurement
    updateImageDimensions();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (imageRef.current) {
        imageRef.current.removeEventListener('load', handleImageLoad);
      }
    };
  }, []);

  // Calculate responsive button sizing based on image dimensions
  const getButtonStyles = () => {
    const baseSize = Math.min(imageDimensions.width, imageDimensions.height);
    
    return {
      fontSize: Math.max(12, Math.min(18, imageDimensions.width * 0.012)) + 'px',
      padding: `${Math.max(8, Math.min(14, imageDimensions.height * 0.02))}px ${Math.max(12, Math.min(20, imageDimensions.width * 0.02))}px`,
      minWidth: Math.max(120, imageDimensions.width * 0.08) + 'px',
    };
  };

  // Calculate responsive indicator sizing
  const getIndicatorStyles = () => {
    const baseSize = Math.min(imageDimensions.width, imageDimensions.height);
    const size = Math.max(14, Math.min(22, baseSize * 0.025));
    
    return {
      width: size + 'px',
      height: size + 'px',
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseInside || pinnedColumn) return;

    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if mouse is within the image bounds
    const isWithinBounds = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
    
    if (!isWithinBounds) {
      setHoveredColumn(null);
      return;
    }

    const percentage = (x / rect.width) * 100;

    const column = columns.find(
      (col) => percentage >= col.startX && percentage < col.endX
    );

    // Respuesta inmediata, sin delay
    setHoveredColumn(column ? column.id : null);
  };

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
    
    // Clear any pending timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Solo delay muy corto para evitar flickering
    if (!pinnedColumn) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredColumn(null);
      }, 50);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    const column = columns.find(
      (col) => percentage >= col.startX && percentage < col.endX
    );

    if (column) {
      if (pinnedColumn === column.id) {
        setPinnedColumn(null);
        setHoveredColumn(null);
      } else {
        setPinnedColumn(column.id);
        setHoveredColumn(column.id);
      }
    } else {
      setPinnedColumn(null);
      setHoveredColumn(null);
    }
  };

  const getColumnData = (columnId: string): ColumnData | undefined =>
    columns.find((col) => col.id === columnId);

  const activeColumn = hoveredColumn
    ? getColumnData(hoveredColumn)
    : null;

  const showInfo = activeColumn || pinnedColumn;

  return (
    <div
      className={`w-full py-8 bg-white ${className} max-[930px]:hidden`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor principal con imagen y hover lateral */}
        <div className="relative mb-8 w-full flex gap-6">
          {/* Imagen con botones de fechas superpuestos */}
          <div className="flex-grow">
            <div
              ref={containerRef}
              className="relative cursor-pointer group w-full"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <img
                ref={imageRef}
                src={activeColumn?.image || imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-300"
                style={{
                  minHeight: '60vh',
                  maxHeight: '70vh',
                  objectFit: 'cover',
                  width: '100%',
                }}
                onLoad={() => {
                  if (imageRef.current) {
                    const rect = imageRef.current.getBoundingClientRect();
                    setImageDimensions({
                      width: rect.width,
                      height: rect.height
                    });
                  }
                }}
              />

              {/* Botones de fechas superpuestos - posicionados por porcentaje */}
              <div className="absolute inset-0 pointer-events-none">
                {columns.map((column) => {
                  const isActive = hoveredColumn === column.id;
                  const isPinned = pinnedColumn === column.id;
                  const buttonStyles = getButtonStyles();
                  
                  // Calculate center position of this column
                  const centerX = (column.startX + column.endX) / 2;
                  
                  return (
                    <div
                      key={column.id}
                      className="absolute pointer-events-auto"
                      style={{
                        left: `${centerX}%`,
                        top: `${imageDimensions.height * 0.05}px`,
                        transform: 'translateX(-50%)',
                      }}
                    >
                      <div
                        className={`relative rounded-full font-semibold shadow-lg transition-all duration-200 cursor-pointer backdrop-blur-sm ${
                          isActive || isPinned
                            ? `${column.color} text-white scale-105 ${isPinned ? 'ring-2 ring-yellow-400' : ''}`
                            : 'bg-gray-800/90 text-white hover:bg-gray-700/90 hover:scale-102 hover:shadow-xl'
                        }`}
                        style={{
                          ...buttonStyles,
                          minWidth: 'fit-content'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (pinnedColumn === column.id) {
                            setPinnedColumn(null);
                            setHoveredColumn(null);
                          } else {
                            setPinnedColumn(column.id);
                            setHoveredColumn(column.id);
                          }
                        }}
                      >
                        <span className="font-bold whitespace-nowrap">
                          {column.detailedInfo.dateRange}
                        </span>
                        {isPinned && (
                          <div 
                            className="absolute -top-1 -right-1 bg-yellow-400 rounded-full border-2 border-white"
                            style={{
                              width: Math.max(12, imageDimensions.width * 0.015) + 'px',
                              height: Math.max(12, imageDimensions.width * 0.015) + 'px'
                            }}
                          ></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Indicadores de posición en la imagen - SIEMPRE VISIBLES */}
              {columns.map((column) => {
                const centerX = Math.min((column.startX + column.endX) / 2, 92);
                const isActive = hoveredColumn === column.id;
                const isPinned = pinnedColumn === column.id;
                const indicatorStyles = getIndicatorStyles();
                
                return (
                  <div
                    key={column.id}
                    className={`absolute transform -translate-x-1/2 transition-all duration-200 ${
                      isActive || isPinned
                        ? 'scale-110 opacity-100'
                        : 'scale-90 opacity-60'
                    }`}
                    style={{ 
                      left: `${centerX}%`,
                      bottom: imageDimensions.height * 0.05,
                    }}
                  >
                    <div 
                      className={`rounded-full ${column.color} shadow-lg border-2 border-white ${isPinned ? 'ring-2 ring-yellow-400' : ''}`}
                      style={indicatorStyles}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Panel lateral para hover - SIN CONTADOR */}
          {hoveredColumn && !pinnedColumn && activeColumn && (
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-opacity-80 sticky top-4"
                   style={{ borderLeftColor: activeColumn.color.replace('bg-', '').replace('-500', '').replace('-600', '') }}>
                
                {/* Header */}
                <div className="mb-4">
                  <h3 className={`text-xl font-bold ${activeColumn.textColor} mb-2`}>
                    {activeColumn.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{activeColumn.description}</p>
                  <p className="text-gray-500 text-xs mt-1">
                    {activeColumn.detailedInfo.dateRange} • {activeColumn.detailedInfo.participants} 
                  </p>
                </div>

                {/* Información primaria condensada */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-3 text-sm">
                    {activeColumn.detailedInfo.primaryInfo.title}
                  </h4>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    {activeColumn.detailedInfo.primaryInfo.items.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2 text-xs">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón para fijar - más prominente */}
                <div className="text-center">
                  <button
                    onClick={() => {
                      setPinnedColumn(activeColumn.id);
                      setHoveredColumn(activeColumn.id);
                    }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    📌 Clic para fijar
                  </button>
                  <p className="text-gray-400 text-xs mt-2">
                    Ver información completa y contador
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Panel de información detallada (solo cuando está fijado) */}
        {pinnedColumn && activeColumn && (
          <div className="w-full max-w-6xl mx-auto mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-opacity-80"
                 style={{ borderLeftColor: activeColumn.color.replace('bg-', '').replace('-500', '').replace('-600', '') }}>
              
              {/* Header con información básica */}
              <div className="flex flex-wrap items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className={`text-3xl font-bold ${activeColumn.textColor}`}>
                      {activeColumn.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-gray-500">Fijado</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg">{activeColumn.description}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {activeColumn.detailedInfo.dateRange} • {activeColumn.detailedInfo.participants} 
                  </p>
                </div>
                <button
                  onClick={() => {
                    setPinnedColumn(null);
                    setHoveredColumn(null);
                  }}
                  className="ml-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-600 transition-colors duration-200"
                >
                  {t('timeline.unpin') || 'Desfijar'}
                </button>
              </div>

              {/* Contenido en grid: 2 cuadrados con más espacio */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Primer cuadrado - Información primaria */}
                <div className="bg-blue-50 rounded-xl p-8 transform hover:scale-105 transition-transform duration-200">
                  <h3 className="font-semibold text-blue-800 mb-6 flex items-center text-lg">
                    <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                    {activeColumn.detailedInfo.primaryInfo.title}
                  </h3>
                  <ul className="space-y-4 text-blue-700">
                    {activeColumn.detailedInfo.primaryInfo.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1 text-lg">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Segundo cuadrado - Countdown Timer */}
                <div className="bg-green-50 rounded-xl p-8 transform hover:scale-105 transition-transform duration-200">
                  <h3 className="font-semibold text-green-800 mb-6 flex items-center text-lg">
                    <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                    {t('timeline.timeRemaining') || 'Tiempo Restante'}
                  </h3>
                  
                  <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm">
                    <CountdownTimer
                      eventType={activeColumn.id as any}
                      targetDate={activeColumn.targetDate}
                      className="w-full"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Instrucción cuando no hay hover ni fijado */}
        {!hoveredColumn && !pinnedColumn && (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl">👆</span>
            </div>
            <p className="text-gray-500 text-lg font-medium">
              {t('timeline.hoverInstruction') || 'Haz hover sobre la imagen o haz clic en las fechas para ver más información'}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {t('timeline.hoverDescription') || 'Explora cada fase del hackathon'}
            </p>
            <p className="text-gray-400 text-xs mt-2">
              {t('timeline.clickToPin') || 'Haz clic para fijar la información'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTimeline;