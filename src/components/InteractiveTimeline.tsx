import React, { useState } from 'react';
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
      startX: 83,
      endX: 97,
      color: 'bg-[#fd9d24]',
      textColor: 'text-[#fd9d24]',
      image: hackathonImage,
      targetDate: '2025-10-01T09:00:00',
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    const column = columns.find(
      (col) => percentage >= col.startX && percentage < col.endX
    );

    // Solo cambiar el hover si no hay columna fijada
    if (!pinnedColumn) {
      setHoveredColumn(column ? column.id : null);
    }
  };

  const handleMouseLeave = () => {
    // Solo limpiar el hover si no hay columna fijada
    if (!pinnedColumn) {
      setHoveredColumn(null);
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
      // Si ya está fijada la misma columna, desfija
      if (pinnedColumn === column.id) {
        setPinnedColumn(null);
        setHoveredColumn(null);
      } else {
        // Fija la nueva columna
        setPinnedColumn(column.id);
        setHoveredColumn(column.id);
      }
    } else {
      // Si hace clic fuera de cualquier columna, desfija
      setPinnedColumn(null);
      setHoveredColumn(null);
    }
  };

  const getColumnData = (columnId: string): ColumnData | undefined =>
    columns.find((col) => col.id === columnId);

  const activeColumn = hoveredColumn
    ? getColumnData(hoveredColumn)
    : null;

  // Mostrar información si hay columna activa (hover o fijada)
  const showInfo = activeColumn || pinnedColumn;

  return (
    <div
      className={`w-full min-h-screen py-16 bg-white ${className} max-[930px]:hidden ${className}`}
    >
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        {/* Imagen dinámica */}
        <div className="relative mb-8 w-full">
          <div
            className="relative cursor-pointer group w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <img
              src={activeColumn?.image || imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-3xl -2xl transition-all duration-300"
              style={{
                minHeight: '400px',
                maxHeight: '600px',
                objectFit: 'cover',
              }}
            />

            {/* Etiquetas de fase con fechas */}
            {columns.map((column) => {
              const centerX = Math.min((column.startX + column.endX) / 2, 98);
              const isActive = hoveredColumn === column.id;
              const isPinned = pinnedColumn === column.id;
              
              return (
                <div
                  key={column.id}
                  className={`absolute -top-5 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10 whitespace-nowrap max-w-xs text-center transition-all duration-300 ${
                    isActive || isPinned
                      ? `${column.color} text-white opacity-100 scale-110 ${isPinned ? 'ring-2 ring-white' : ''}`
                      : 'opacity-30 bg-white text-slate-600 hover:opacity-60'
                  }`}
                  style={{ left: `${centerX}%` }}
                >
                  <div className="text-xs mb-1">
                  <span className="font-bold">{column.detailedInfo.dateRange}</span>
                </div>

                  <div>
                    {column.name}
                  </div>
                  {isPinned && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
                  )}
                </div>
              );    
            })}
          </div>
        </div>

        {/* Panel de información detallada */}
        {showInfo && activeColumn && (
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
                    {pinnedColumn === activeColumn.id && (
                      <div className="flex items-center gap-2">
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-lg">{activeColumn.description}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {activeColumn.detailedInfo.dateRange} • {activeColumn.detailedInfo.participants} 
                  </p>
                </div>
                {pinnedColumn === activeColumn.id && (
                  <button
                    onClick={() => {
                      setPinnedColumn(null);
                      setHoveredColumn(null);
                    }}
                    className="ml-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-600 transition-colors duration-200"
                  >
                    {t('timeline.unpin') || 'Desfijar'}
                  </button>
                )}
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
        {!showInfo && (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl">👆</span>
            </div>
            <p className="text-gray-500 text-lg font-medium">
              {t('timeline.hoverInstruction')}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {t('timeline.hoverDescription')}
            </p>
            <p className="text-gray-400 text-xs mt-2">
              {t('timeline.clickToPin')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTimeline;