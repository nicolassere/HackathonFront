import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronRight, Users, BookOpen, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean;
}

interface EventData {
  id: string;
  type: 'registration' | 'course' | 'hackathon';
  date: string;
  title: string;
  description: string;
  shortDate: string;
  color: {
    primary: string;
    secondary: string;
    bg: string;
    text: string;
  };
}

const TimelineCountdown: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<Record<string, TimeLeft>>({});
  const { t } = useLanguage();

  const events: EventData[] = [
    {
      id: 'registration',
      type: 'registration',
      date: '2025-07-15T23:59:59',
      title: 'Cierre de Inscripciones',
      description: 'Última oportunidad para registrarse al hackathon',
      shortDate: '15 JUL',
      color: {
        primary: 'from-red-500 to-pink-500',
        secondary: 'from-red-50 to-pink-50',
        bg: 'bg-red-50',
        text: 'text-red-700'
      }
    },
    {
      id: 'course',
      type: 'course',
      date: '2025-08-04T09:00:00',
      title: 'Curso Preparatorio',
      description: 'Inicio del curso de computación cuántica de QWorld',
      shortDate: '04 AGO',
      color: {
        primary: 'from-emerald-500 to-green-500',
        secondary: 'from-emerald-50 to-green-50',
        bg: 'bg-emerald-50',
        text: 'text-emerald-700'
      }
    },
    {
      id: 'hackathon',
      type: 'hackathon',
      date: '2025-10-01T09:00:00',
      title: 'Quantum Hackathon',
      description: 'El evento principal comienza en Montevideo',
      shortDate: '01 OCT',
      color: {
        primary: 'from-blue-600 to-purple-600',
        secondary: 'from-blue-50 to-purple-50',
        bg: 'bg-blue-50',
        text: 'text-blue-700'
      }
    }
  ];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const newTimeLeft: Record<string, TimeLeft> = {};

      events.forEach(event => {
        const target = new Date(event.date).getTime();
        const difference = target - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          newTimeLeft[event.id] = { days, hours, minutes, seconds, isStarted: false };
        } else {
          newTimeLeft[event.id] = { days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true };
        }
      });

      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'registration':
        return <Users className="w-5 h-5" />;
      case 'course':
        return <BookOpen className="w-5 h-5" />;
      case 'hackathon':
        return <Zap className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const formatTimeUnit = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Timeline Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Cronograma de Eventos
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Haz clic en cualquier fecha para ver el tiempo restante y detalles del evento
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-300 via-emerald-300 to-blue-300 transform -translate-y-1/2 z-0"></div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {events.map((event, index) => {
            const eventTimeLeft = timeLeft[event.id];
            const isSelected = selectedEvent === event.id;
            const isStarted = eventTimeLeft?.isStarted;

            return (
              <div key={event.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${event.color.primary} shadow-lg`}></div>
                </div>

                {/* Event Card */}
                <div
                  className={`relative cursor-pointer transition-all duration-500 transform ${
                    isSelected ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setSelectedEvent(isSelected ? null : event.id)}
                >
                  {/* Date Display */}
                  <div className={`${event.color.bg} rounded-2xl p-6 border-2 border-transparent hover:border-slate-200 transition-all duration-300 ${
                    isSelected ? 'shadow-xl' : 'shadow-lg hover:shadow-xl'
                  }`}>
                    <div className="text-center mb-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${event.color.primary} text-white rounded-2xl mb-3 shadow-lg`}>
                        {getEventIcon(event.type)}
                      </div>
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-slate-900">
                          {event.shortDate}
                        </div>
                        <div className="text-sm font-medium text-slate-600">
                          2025
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {event.title}
                      </h3>
                      <div className="flex items-center justify-center space-x-1 text-slate-600">
                        <span className="text-sm">Ver detalles</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          isSelected ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </div>

                    {/* Status Indicator */}
                    {isStarted && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          ¡Activo!
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isSelected ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`bg-gradient-to-br ${event.color.secondary} rounded-2xl p-6 border border-slate-200`}>
                      {/* Event Description */}
                      <div className="mb-6">
                        <p className="text-slate-700 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Countdown Display */}
                      {eventTimeLeft && !isStarted && (
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2 text-slate-700">
                            <Clock className="w-5 h-5" />
                            <span className="font-semibold">Tiempo restante:</span>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-3">
                            {[
                              { value: eventTimeLeft.days, label: 'Días' },
                              { value: eventTimeLeft.hours, label: 'Horas' },
                              { value: eventTimeLeft.minutes, label: 'Min' },
                              { value: eventTimeLeft.seconds, label: 'Seg' }
                            ].map((unit, unitIndex) => (
                              <div key={unitIndex} className="text-center">
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">
                                  <div className={`text-2xl font-bold ${event.color.text} font-mono`}>
                                    {formatTimeUnit(unit.value)}
                                  </div>
                                </div>
                                <div className="text-xs font-medium text-slate-600 mt-1">
                                  {unit.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Started State */}
                      {isStarted && (
                        <div className="text-center py-4">
                          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-xl font-semibold">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>¡Este evento ya comenzó!</span>
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="mt-6 text-center">
                        {event.type === 'course' && (
                          <a
                            href="https://qworld.net/oqi-hackathon-course/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center space-x-2 bg-gradient-to-r ${event.color.primary} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
                          >
                            <BookOpen className="w-5 h-5" />
                            <span>Ir al Curso</span>
                          </a>
                        )}
                        {event.type === 'registration' && (
                          <a
                            href="https://forms.gle/8NAtRCLmFr4eq6xy8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center space-x-2 bg-gradient-to-r ${event.color.primary} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
                          >
                            <Users className="w-5 h-5" />
                            <span>Registrarse</span>
                          </a>
                        )}
                        {event.type === 'hackathon' && (
                          <button
                            className={`inline-flex items-center space-x-2 bg-gradient-to-r ${event.color.primary} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
                          >
                            <Zap className="w-5 h-5" />
                            <span>¡Únete al Hackathon!</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            ¿Listo para participar?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            No pierdas la oportunidad de ser parte del hackathon de computación cuántica más grande de Latinoamérica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://qworld.net/oqi-hackathon-course/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <BookOpen className="w-5 h-5" />
              <span>Comenzar Curso</span>
            </a>
            <a
              href="https://forms.gle/8NAtRCLmFr4eq6xy8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Users className="w-5 h-5" />
              <span>Registrarse</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCountdown;