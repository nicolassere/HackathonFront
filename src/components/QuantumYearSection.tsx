import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CountdownTimer } from './CountdownTimer';

// 🖼️ Importá las imágenes correspondientes
import timelineImage from '../../img/ImagenInicial.png';
import registrationImage from '../../img/Imagen15_07.png';
import preselectionImage from '../../img/Imagen27_07.png';
import courseImage from '../../img/Imagen04_08.png';
import selectionImage from '../../img/imagen_2damedicion.png';
import hackathonImage from '../../img/Imagen_0210.png';

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
    duration?: string;
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
  const { t } = useLanguage();

  const columns: ColumnData[] = [
    {
      id: 'registration',
      name: 'Inscripción',
      description: 'Período de registro para el hackathon',
      detailedInfo: {
        dateRange: '1 - 15 Julio 2025',
        duration: '15 días',
        participants: 'Abierto a todos',
        primaryInfo: {
          title: 'Requisitos',
          items: [
            'Completar formulario de inscripción online',
            'Carta de motivación (máximo 500 palabras)',
            'CV actualizado en formato PDF',
            'Conocimientos básicos de programación'
          ]
        },
        secondaryInfo: {
          title: 'Proceso',
          items: [
            'Registro en plataforma oficial del evento',
            'Verificación automática de documentos',
            'Confirmación por email dentro de 48hs',
            'Acceso al canal de comunicación oficial'
          ]
        }
      },
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
      description: 'Evaluación inicial de candidatos',
      detailedInfo: {
        dateRange: '16 - 27 Julio 2025',
        duration: '12 días',
        participants: 'Candidatos inscritos',
        primaryInfo: {
          title: 'Evaluación',
          items: [
            'Revisión de aplicaciones por comité técnico',
            'Evaluación de perfiles y experiencia',
            'Entrevistas virtuales (casos selectos)',
            'Análisis de compatibilidad con objetivos'
          ]
        },
        secondaryInfo: {
          title: 'Resultados',
          items: [
            'Notificación de resultados vía email',
            'Lista oficial de preseleccionados',
            'Feedback personalizado para cada candidato',
            'Invitación al curso preparatorio'
          ]
        }
      },
      startX: 32,
      endX: 49,
      color: 'bg-cyan-500',
      textColor: 'text-cyan-700',
      image: preselectionImage,
      targetDate: '2025-07-27T23:59:59',
    },
    {
      id: 'course',
      name: 'Curso QWorld',
      description: 'Curso preparatorio de computación cuántica',
      detailedInfo: {
        dateRange: '28 Jul - 4 Ago 2025',
        duration: '1 semana intensiva',
        participants: 'Participantes preseleccionados',
        primaryInfo: {
          title: 'Contenido',
          items: [
            'Fundamentos de computación cuántica',
            'Programación con Qiskit y Python',
            'Algoritmos cuánticos fundamentales',
            'Aplicaciones en problemas climáticos'
          ]
        },
        secondaryInfo: {
          title: 'Metodología',
          items: [
            'Sesiones en vivo con expertos internacionales',
            'Laboratorios prácticos con simuladores',
            'Proyecto grupal colaborativo',
            'Certificación oficial de QWorld'
          ]
        }
      },
      startX: 49,
      endX: 66,
      color: 'bg-green-500',
      textColor: 'text-green-700',
      image: courseImage,
      targetDate: '2025-08-04T09:00:00',
    },
    {
      id: 'selection',
      name: 'Selección Final',
      description: 'Proceso de selección definitiva de equipos',
      detailedInfo: {
        dateRange: '5 Ago - 1 Sep 2025',
        duration: '4 semanas',
        participants: 'Graduados del curso QWorld',
        primaryInfo: {
          title: 'Evaluación',
          items: [
            'Análisis del proyecto final de QWorld',
            'Entrevistas técnicas individuales',
            'Evaluación de habilidades colaborativas',
            'Compatibilidad para trabajo en equipo'
          ]
        },
        secondaryInfo: {
          title: 'Formación de Equipos',
          items: [
            'Creación de equipos multidisciplinarios',
            'Asignación de mentores especializados',
            'Entrega del kit de herramientas',
            'Acceso a recursos exclusivos del hackathon'
          ]
        }
      },
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
      description: 'Evento principal: Quantum Climate Hackathon',
      detailedInfo: {
        dateRange: '2 - 10 Oct 2025',
        duration: '9 días intensivos',
        participants: 'Equipos seleccionados',
        primaryInfo: {
          title: 'Desarrollo',
          items: [
            'Kick-off con presentación de desafíos',
            'Desarrollo intensivo de soluciones',
            'Sesiones diarias de mentoría especializada',
            'Workshops técnicos con expertos del sector'
          ]
        },
        secondaryInfo: {
          title: 'Presentación y Premiación',
          items: [
            'Demo Day con presentaciones finales',
            'Pitch de 10 minutos por equipo',
            'Evaluación por jurado internacional',
            'Ceremonia de premiación y networking'
          ]
        }
      },
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

  const formatDateForFolder = (dateRange: string): { month: string; dates: string } => {
    const [startDate, endDate] = dateRange.split(' - ');
    const startParts = startDate.trim().split(' ');
    const endParts = endDate ? endDate.trim().split(' ') : startParts;
    
    const month = startParts[1] || startParts[0];
    const dates = endDate ? `${startParts[0]}-${endParts[0]}` : startParts[0];
    
    return { month: month.toUpperCase(), dates };
  };

  return (
    <div
      className={`w-full min-h-screen py-16 bg-gradient-to-br from-slate-50 to-gray-100 ${className}`}
    >
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        {/* Imagen dinámica */}
        <div className="relative mb-8 w-full">
          <div
            className="relative cursor-pointer group w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={activeColumn?.image || imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-300"
              style={{
                minHeight: '400px',
                maxHeight: '600px',
                objectFit: 'cover',
              }}
            />

            {/* Etiquetas de fase */}
            {columns.map((column) => {
              const centerX = Math.min((column.startX + column.endX) / 2, 98);
              return (
                <div
                  key={column.id}
                  className={`absolute -top-5 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10 whitespace-nowrap max-w-xs text-center transition-all duration-300 ${
                    hoveredColumn === column.id
                      ? `${column.color} text-white opacity-100 scale-110`
                      : 'opacity-30 bg-white text-slate-600 hover:opacity-60'
                  }`}
                  style={{ left: `${centerX}%` }}
                >
                  {column.name}
                </div>
              );    
            })}
          </div>
        </div>

        {/* Panel de información detallada */}
        {activeColumn && (
          <div className="w-full max-w-6xl mx-auto mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-opacity-80"
                 style={{ borderLeftColor: activeColumn.color.replace('bg-', '').replace('-500', '').replace('-600', '') }}>
              
              {/* Header con información básica */}
              <div className="flex flex-wrap items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div>
                  <h2 className={`text-3xl font-bold ${activeColumn.textColor} mb-2`}>
                    {activeColumn.name}
                  </h2>
                  <p className="text-gray-600 text-lg">{activeColumn.description}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {activeColumn.detailedInfo.participants} • Duración: {activeColumn.detailedInfo.duration}
                  </p>
                </div>
              </div>

              {/* Contenido en grid: 2 cuadrados + 1 carpetita */}
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Primer cuadrado */}
                <div className="bg-blue-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-200">
                  <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    {activeColumn.detailedInfo.primaryInfo.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-blue-700">
                    {activeColumn.detailedInfo.primaryInfo.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1 text-lg">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Segundo cuadrado */}
                <div className="bg-green-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-200">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    {activeColumn.detailedInfo.secondaryInfo.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-green-700">
                    {activeColumn.detailedInfo.secondaryInfo.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1 text-lg">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Carpetita de fecha */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl p-6 border border-amber-300 shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    {/* Efecto de carpeta doblada */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-amber-300 to-amber-400 transform rotate-45 translate-x-4 -translate-y-4"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-bl from-amber-200 to-amber-300 border-l border-b border-amber-400"></div>
                    
                    <div className="text-center">
                      <div className="mb-3">
                        <span className="inline-block w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-lg mb-2">
                          📅
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-amber-800 text-lg mb-2">
                        Fechas Importantes
                      </h3>
                      
                      <div className="bg-white/80 rounded-lg p-4 backdrop-blur-sm">
                        <div className="text-2xl font-bold text-amber-900 mb-1">
                          {formatDateForFolder(activeColumn.detailedInfo.dateRange).dates}
                        </div>
                        <div className="text-sm font-semibold text-amber-700 uppercase tracking-wider">
                          {formatDateForFolder(activeColumn.detailedInfo.dateRange).month}
                        </div>
                        <div className="text-xs text-amber-600 mt-2 font-medium">
                          {activeColumn.detailedInfo.duration}
                        </div>
                      </div>
                      
                      <div className="mt-3 text-xs text-amber-700 font-medium">
                        {activeColumn.detailedInfo.participants}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Timer */}
        {activeColumn && (
          <div className="w-full max-w-5xl mx-auto">
            <CountdownTimer
              eventType={activeColumn.id as any}
              targetDate={activeColumn.targetDate}
              className="w-full"
            />
          </div>
        )}

        {/* Instrucción cuando no hay hover */}
        {!activeColumn && (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl">👆</span>
            </div>
            <p className="text-gray-500 text-lg font-medium">
              Pasa el cursor sobre la imagen para explorar cada fase
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Descubre requisitos, actividades y fechas importantes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTimeline;