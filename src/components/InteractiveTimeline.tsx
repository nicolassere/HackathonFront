import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// 🖼️ Importá las imágenes correspondientes
import timelineImage from '../../img/ImagenInicial.png';
import registrationImage from '../../img/Imagen15_07.png';
import preselectionImage from '../../img/Imagen27_07.png';
import courseImage from '../../img/Imagen04_08.png';
import selectionImage from '../../img/imagen_2damedicion.png';
import hackathonImage from '../../img/Imagen_0210.png';
import { CountdownTimer } from './CountDownTimer';

interface ColumnData {
  id: string;
  name: string;
  description: string;
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
  const { t } = useLanguage();

  const columns: ColumnData[] = [
    {
      id: 'registration',
      name: 'Inscripción',
      description: 'Período de registro para el hackathon',
      startX: 15,
      endX: 32,
      color: 'bg-cyan-500',
      textColor: 'text-cyan-700',
      image: registrationImage,
      targetDate: '2025-07-15T23:59:59',
    },
    {
      id: 'preselection',
      name: 'Preselección',
      description: 'Período de preselección para el hackathon',
      startX: 32,
      endX: 49,
      color: 'bg-cyan-500',
      textColor: 'text-cyan-700',
      image: preselectionImage,
      targetDate: '2025-07-27T23:59:59',
    },
    {
      id: 'course',
      name: 'Curso',
      description: 'Curso preparatorio de QWorld',
      startX: 49,
      endX: 66,
      color: 'bg-green-500',
      textColor: 'text-green-700',
      image: courseImage,
      targetDate: '2025-08-04T09:00:00',
    },
    {
      id: 'selection',
      name: 'Selección',
      description: 'Proceso de selección de participantes',
      startX: 66,
      endX: 81,
      color: 'bg-orange-500',
      textColor: 'text-orange-700',
      image: selectionImage,
      targetDate: '2025-09-01T23:59:59',
    },
    {
      id: 'hackathon',
      name: 'Hackathon',
      description: 'Evento principal del Quantum Climate Hackathon',
      startX: 83,
      endX: 97,
      color: 'bg-orange-600',
      textColor: 'text-orange-700',
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

    setHoveredColumn(column ? column.id : null);
  };

  const handleMouseLeave = () => {
    setHoveredColumn(null);
  };

  const getColumnData = (columnId: string): ColumnData | undefined =>
    columns.find((col) => col.id === columnId);

  const activeColumn = hoveredColumn
    ? getColumnData(hoveredColumn)
    : null;

  return (
    <div
      className={`w-full min-h-screen py-16 bg-white ${className}`}    >
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        {/* Imagen dinámica */}
        <div className="relative mb-6 w-full">
          <div
            className="relative cursor-pointer group w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={activeColumn?.image || imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-3xl transition-all duration-300"
              style={{
                minHeight: '400px',
                maxHeight: '600px',
                objectFit: 'cover',
              }}
            />

            {/* Texto fijo para cada columna */}
            {columns.map((column) => {
              const centerX = Math.min((column.startX + column.endX) / 2, 98);
              return (
                <div
                  key={column.id}
                  className={`absolute -top-5 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10 whitespace-nowrap max-w-xs text-center transition-opacity duration-300 ${
                    hoveredColumn === column.id
                      ? `${column.color} text-white opacity-100`
                      : 'opacity-30 bg-white text-slate-600'
                  }`}
                  style={{ left: `${centerX}%` }}
                >
                  {column.name}
                </div>
              );
            })}
          </div>
        </div>

        {/* Timer debajo */}
        {activeColumn && (
          <div className="w-full max-w-5xl mx-auto">
            <CountdownTimer
              eventType={activeColumn.id as any}
              targetDate={activeColumn.targetDate}
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTimeline;
