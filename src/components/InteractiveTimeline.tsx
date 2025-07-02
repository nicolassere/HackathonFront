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
    requirements?: string[];
    activities?: string[];
    deliverables?: string[];
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
        dateRange: '1 - 15 de Julio, 2025',
        duration: '15 días',
        participants: 'Abierto a todos',
        requirements: [
          'Completar formulario de inscripción',
          'Carta de motivación (máx. 500 palabras)',
          'CV actualizado',
          'Conocimientos básicos de programación'
        ],
        activities: [
          'Registro en plataforma oficial',
          'Verificación de documentos',
          'Confirmación por email'
        ]
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
        dateRange: '16 - 27 de Julio, 2025',
        duration: '12 días',
        participants: 'Candidatos inscritos',
        activities: [
          'Revisión de aplicaciones',
          'Evaluación de perfiles técnicos',
          'Entrevistas virtuales (opcional)',
          'Notificación de resultados'
        ],
        deliverables: [
          'Lista de preseleccionados',
          'Feedback individual por email'
        ]
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
        dateRange: '28 de Julio - 4 de Agosto, 2025',
        duration: '1 semana intensiva',
        participants: 'Participantes preseleccionados',
        requirements: [
          'Disponibilidad de 20-25 horas semanales',
          'Acceso a computadora con internet estable',
          'Participación obligatoria en sesiones en vivo'
        ],
        activities: [
          'Fundamentos de computación cuántica',
          'Programación con Qiskit',
          'Algoritmos cuánticos básicos',
          'Proyecto práctico grupal',
          'Sesiones de mentoría'
        ],
        deliverables: [
          'Certificado de QWorld',
          'Proyecto cuántico completado'
        ]
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
        dateRange: '5 de Agosto - 1 de Septiembre, 2025',
        duration: '4 semanas',
        participants: 'Graduados del curso QWorld',
        activities: [
          'Evaluación del proyecto QWorld',
          'Entrevistas técnicas individuales',
          'Formación de equipos multidisciplinarios',
          'Asignación de mentores especializados'
        ],
        deliverables: [
          'Equipos finales confirmados',
          'Acceso a recursos exclusivos',
          'Kit de herramientas del hackathon'
        ]
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
        dateRange: '2 - 10 de Octubre, 2025',
        duration: '9 días intensivos',
        participants: 'Equipos seleccionados',
        requirements: [
          'Disponibilidad tiempo completo',
          'Participación presencial/virtual',
          'Presentación final obligatoria'
        ],
        activities: [
          'Kick-off y presentación de desafíos',
          'Desarrollo de soluciones cuánticas',
          'Sesiones de mentoría diarias',
          'Workshops técnicos especializados',
          'Demo Day y presentaciones finales',
          'Ceremonia de premiación'
        ],
        deliverables: [
          'Prototipo funcional',
          'Documentación técnica completa',
          'Pitch de 10 minutos',
          'Código fuente en repositorio'
        ]
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
              
              {/* Header con fecha y duración */}
              <div className="flex flex-wrap items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div>
                  <h2 className={`text-3xl font-bold ${activeColumn.textColor} mb-2`}>
                    {activeColumn.name}
                  </h2>
                  <p className="text-gray-600 text-lg">{activeColumn.description}</p>
                </div>
                <div className="text-right">
                  <div className={`inline-block px-4 py-2 rounded-lg ${activeColumn.color} text-white font-semibold text-lg mb-2`}>
                    {activeColumn.detailedInfo.dateRange}
                  </div>
                  <p className="text-gray-500 text-sm">
                    Duración: {activeColumn.detailedInfo.duration}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {activeColumn.detailedInfo.participants}
                  </p>
                </div>
              </div>

              {/* Contenido en grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Requisitos */}
                {activeColumn.detailedInfo.requirements && (
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Requisitos
                    </h3>
                    <ul className="space-y-2 text-sm text-blue-700">
                      {activeColumn.detailedInfo.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actividades */}
                {activeColumn.detailedInfo.activities && (
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Actividades
                    </h3>
                    <ul className="space-y-2 text-sm text-green-700">
                      {activeColumn.detailedInfo.activities.map((activity, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Entregables */}
                {activeColumn.detailedInfo.deliverables && (
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="font-semibold text-purple-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Entregables
                    </h3>
                    <ul className="space-y-2 text-sm text-purple-700">
                      {activeColumn.detailedInfo.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
            <p className="text-gray-500 text-lg">
              📅 Pasa el cursor sobre la imagen para ver los detalles de cada fase
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTimeline;