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
        dateRange: '1 - 25 Julio 2025',
        participants: t('timeline.registration.participants'),
        primaryInfo: { title: t('timeline.registration.primaryInfo.title'), items: [t('timeline.registration.primaryInfo.items.0'), t('timeline.registration.primaryInfo.items.3'), t('timeline.registration.primaryInfo.items.1')] },
        secondaryInfo: { title: t('timeline.registration.secondaryInfo.title'), items: [t('timeline.registration.secondaryInfo.items.0'), t('timeline.registration.secondaryInfo.items.3'), t('timeline.registration.secondaryInfo.items.1')] }
      },
      startX: 15, endX: 32, color: 'bg-[#27bfe6]', textColor: 'text-[#27bfe6]', image: registrationImage, targetDate: '2025-07-25T23:59:59',
    },
    {
      id: 'preselection',
      name: t('timeline.preselection.name'),
      description: t('timeline.preselection.description'),
      detailedInfo: {
        dateRange: '27 Julio 2025',
        participants: t('timeline.preselection.participants'),
        primaryInfo: { title: t('timeline.preselection.primaryInfo.title'), items: [t('timeline.preselection.primaryInfo.items.0'), t('timeline.preselection.primaryInfo.items.1')] },
        secondaryInfo: { title: t('timeline.preselection.secondaryInfo.title'), items: [t('timeline.preselection.secondaryInfo.items.0'), t('timeline.preselection.secondaryInfo.items.1'), t('timeline.preselection.secondaryInfo.items.2'), t('timeline.preselection.secondaryInfo.items.3')] }
      },
      startX: 32, endX: 49, color: 'bg-[#27bfe6]', textColor: 'text-[#27bfe6]', image: preselectionImage, targetDate: '2025-07-27T23:59:59',
    },
    {
      id: 'course',
      name: t('timeline.course.name'),
      description: t('timeline.course.description'),
      detailedInfo: {
        dateRange: '04 - 13 Ago 2025',
        participants: t('timeline.course.participants'),
        primaryInfo: { title: t('timeline.course.primaryInfo.title'), items: [t('timeline.course.primaryInfo.items.0'), t('timeline.course.primaryInfo.items.1'), t('timeline.course.primaryInfo.items.2')] },
        secondaryInfo: { title: t('timeline.course.secondaryInfo.title'), items: [t('timeline.course.secondaryInfo.items.0'), t('timeline.course.secondaryInfo.items.1'), t('timeline.course.secondaryInfo.items.2'), t('timeline.course.secondaryInfo.items.3')] }
      },
      startX: 49, endX: 66, color: 'bg-[#467e4a]', textColor: 'text-[#467e4a]', image: courseImage, targetDate: '2025-08-04T09:00:00',
    },
    {
      id: 'selection',
      name: t('timeline.selection.name'),
      description: t('timeline.selection.description'),
      detailedInfo: {
        dateRange: '27 Ago 2025',
        participants: t('timeline.selection.participants'),
        primaryInfo: { title: t('timeline.selection.primaryInfo.title'), items: [t('timeline.preselection.primaryInfo.items.0'), t('timeline.preselection.primaryInfo.items.1'), t('timeline.selection.primaryInfo.items.3')] },
        secondaryInfo: { title: t('timeline.selection.secondaryInfo.title'), items: [t('timeline.selection.secondaryInfo.items.0'), t('timeline.selection.secondaryInfo.items.1'), t('timeline.selection.secondaryInfo.items.2'), t('timeline.selection.secondaryInfo.items.3')] }
      },
      startX: 66, endX: 81, color: 'bg-[#467e4a]', textColor: 'text-[#467e4a]', image: selectionImage, targetDate: '2025-08-27T23:59:59',
    },
    {
      id: 'hackathon',
      name: t('timeline.hackathon.name'),
      description: t('timeline.hackathon.description'),
      detailedInfo: {
        dateRange: '1 - 3 Oct 2025',
        participants: t('timeline.hackathon.participants'),
        primaryInfo: { title: t('timeline.hackathon.primaryInfo.title'), items: [t('timeline.hackathon.primaryInfo.items.0'), t('timeline.hackathon.primaryInfo.items.1'), t('timeline.hackathon.primaryInfo.items.2'), t('timeline.hackathon.primaryInfo.items.3')] },
        secondaryInfo: { title: t('timeline.hackathon.secondaryInfo.title'), items: [t('timeline.hackathon.secondaryInfo.items.0'), t('timeline.hackathon.secondaryInfo.items.1'), t('timeline.hackathon.secondaryInfo.items.2'), t('timeline.hackathon.secondaryInfo.items.3')] }
      },
      startX: 81, endX: 95, color: 'bg-[#fd9d24]', textColor: 'text-[#fd9d24]', image: hackathonImage, targetDate: '2025-10-01T09:00:00',
    },
  ];
  const defaultColumn: ColumnData = {
  id: 'default',
  name: '',
  description: '',
  detailedInfo: {
    dateRange: '',
    primaryInfo: { title: '', items: [] },
    secondaryInfo: { title: '', items: [] }
  },
  startX: 0,
  endX: 0,
  color: 'bg-gray-300',
  textColor: 'text-gray-400',
  image: timelineImage,
  targetDate: '',
  
};

  // MODIFICACIÓN 1: La columna activa ahora prioriza la que está "fijada" (pinned).
  const activeColumnId = pinnedColumn || hoveredColumn;
  const activeColumn = activeColumnId
   ? columns.find((col) => col.id === activeColumnId)
   : defaultColumn;

  useEffect(() => {
    const updateImageDimensions = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setImageDimensions({ width: rect.width, height: rect.height });
      }
    };

    const currentImageRef = imageRef.current;
    if (currentImageRef?.complete) {
      updateImageDimensions();
    }
    
    currentImageRef?.addEventListener('load', updateImageDimensions);
    window.addEventListener('resize', updateImageDimensions);

    return () => {
      currentImageRef?.removeEventListener('load', updateImageDimensions);
      window.removeEventListener('resize', updateImageDimensions);
    };
  }, [activeColumn?.image]);

  const getButtonStyles = () => ({
      fontSize: Math.max(10, Math.min(16, imageDimensions.width * 0.012)) + 'px',
      padding: `${Math.max(6, Math.min(12, imageDimensions.height * 0.015))}px ${Math.max(10, Math.min(16, imageDimensions.width * 0.015))}px`,
      minWidth: Math.max(100, imageDimensions.width * 0.08) + 'px',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // No hacer nada si hay una columna fijada
    if (!isMouseInside || pinnedColumn) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const column = columns.find((col) => percentage >= col.startX && percentage < col.endX);
    setHoveredColumn(column ? column.id : null);
  };

  const handleMouseEnter = () => setIsMouseInside(true);
  
  const handleMouseLeave = () => {
    setIsMouseInside(false);
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    // Ocultar el hover solo si no hay nada fijado
    if (!pinnedColumn) {
      hoverTimeoutRef.current = setTimeout(() => setHoveredColumn(null), 50);
    }
  };

  const handleTimelineClick = (columnId: string | null) => {
    if (columnId) {
        setPinnedColumn((prev) => (prev === columnId ? null : columnId));
        // Mantiene el hover para que el panel no desaparezca y reaparezca
        setHoveredColumn(columnId);
    }
  };


  return (
    <div className={`w-full py-8 bg-white ${className} max-[930px]:hidden`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8 w-full flex items-start gap-6 justify-center">
          <div className="w-full max-w-5xl flex-shrink-0">
            <div
              ref={containerRef}
              className="relative cursor-pointer group w-full"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percentage = (x / rect.width) * 100;
                  const column = columns.find((col) => percentage >= col.startX && percentage < col.endX);
                  if (column) {
                      handleTimelineClick(column.id);
                  }
              }}
            >
              <img
                ref={imageRef}
                src={activeColumn?.image || imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-300 mx-auto block"
                style={{ minHeight: '400px', maxHeight: '70vh', objectFit: 'cover' }}
              />
              <div className="absolute inset-0 pointer-events-none">
                {columns.map((column) => {
                  const isActive = activeColumn?.id === column.id;
                  const isPinned = pinnedColumn === column.id;
                  const buttonStyles = getButtonStyles();
                  const centerX = (column.startX + column.endX) / 2;
                  return (
                    <div key={column.id} className="absolute pointer-events-auto flex justify-center items-center" style={{ left: `${centerX}%`, top: `${Math.max(20, imageDimensions.height * 0.05)}px`, transform: 'translateX(-50%)' }}>
                      <div
                        className={`relative rounded-full font-semibold shadow-lg transition-all duration-200 cursor-pointer backdrop-blur-sm text-center flex items-center justify-center ${isActive ? `${column.color} text-white scale-105 ${isPinned ? 'ring-2 ring-yellow-400' : ''}` : 'bg-gray-800/90 text-white hover:bg-gray-700/90 hover:scale-102'}`}
                        style={{ ...buttonStyles, minWidth: 'fit-content' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTimelineClick(column.id);
                        }}
                      >
                        <span className="font-bold whitespace-nowrap text-center">{column.detailedInfo.dateRange}</span>
                        {isPinned && <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full border-2 border-white" style={{ width: Math.max(12, imageDimensions.width * 0.015) + 'px', height: Math.max(12, imageDimensions.width * 0.015) + 'px' }}></div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MODIFICACIÓN 2: El panel lateral ahora se muestra si hay una columna activa (hover O pinned) */}
          {activeColumn && (
            <div className="w-96 flex-shrink-0" style={{ height: imageDimensions.height > 0 ? `${imageDimensions.height}px` : 'auto' }}>
                <div className="bg-white rounded-2xl shadow-xl border-l-4 h-full flex flex-col p-6" style={{ borderLeftColor: activeColumn.color.replace(/bg-\[|\]/g, '') }}>
                  <div className="flex-grow overflow-y-auto pr-2">
                    {activeColumn.id === 'default' ? (
                      <div className="text-center text-gray-500 mt-10 px-4">
                        <h3 className="text-lg font-semibold mb-2">{t('timeline.hoverInstruction') || 'Pasá el mouse sobre la imagen o hacé clic en las fechas'}</h3>
                        <p className="text-sm text-gray-400">{t('timeline.clickToPin') || 'Hacé clic para fijar la información de una fase'}</p>
                      </div>
                    ) : (
                      <>
                        <div className="mb-4">
                          <h3 className={`text-xl font-bold ${activeColumn.textColor} mb-2`}>{activeColumn.name}</h3>
                          <p className="text-gray-600 text-sm">{activeColumn.description}</p>
                          <p className="text-gray-500 text-xs mt-1">{activeColumn.detailedInfo.dateRange} • {activeColumn.detailedInfo.participants}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 mb-4">
                          <h4 className="font-semibold text-blue-800 mb-3 text-sm">{activeColumn.detailedInfo.primaryInfo.title}</h4>
                          <ul className="space-y-2 text-blue-700 text-sm">
                            {activeColumn.detailedInfo.primaryInfo.items.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-blue-400 mr-2 text-xs">•</span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h3 className="font-semibold text-green-800 mb-3 flex items-center text-sm">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                            {t('timeline.timeRemaining') || 'Tiempo Restante'}
                          </h3>
                          <div className="bg-white/80 rounded-md p-3 backdrop-blur-sm">
                            <CountdownTimer eventType={activeColumn.id as any} targetDate={activeColumn.targetDate} size="compact" className="w-full" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {activeColumn.id !== 'default' && (
                    <div className="flex-shrink-0 pt-4 text-center">
                      <button 
                        onClick={() => handleTimelineClick(activeColumn.id)}
                        className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                          pinnedColumn === activeColumn.id
                            ? 'bg-red-100 text-red-700 hover:bg-red-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {pinnedColumn === activeColumn.id ? (t('timeline.unpin') || 'Desfijar') : (t('timeline.pin.pin') || 'Fijar')}
                      </button>
                    </div>
                  )}
                </div>
              </div>

          )}
        </div>

        {/* MODIFICACIÓN 4: El panel grande de abajo fue eliminado. */}

        {/* Mensaje inicial cuando no hay nada activo */}
        {!activeColumn && (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"><span className="text-2xl">👆</span></div>
            <p className="text-gray-500 text-lg font-medium">{t('timeline.hoverInstruction') || 'Pasá el mouse sobre la imagen o hacé clic en las fechas'}</p>
            <p className="text-gray-400 text-sm mt-2">{t('timeline.clickToPin') || 'Hacé clic para fijar la información de una fase'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTimeline;