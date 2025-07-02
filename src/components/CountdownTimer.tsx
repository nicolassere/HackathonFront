import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Zap, Award, BookOpen, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type EventType = 'registration' | 'course' | 'hackathon';

interface CountdownTimerProps {
  eventType?: EventType;
  targetDate?: string;
  className?: string;
  eventName?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  eventType = "hackathon",
  targetDate = "2025-10-01T09:00:00",
  className = "",
  eventName = ""
}) => {
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isStarted: false
  });

  const { t } = useLanguage();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isStarted: false });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const getEventText = () => {
    switch(eventType) {
      case 'registration':
        return t('countdown.registration') || 'el cierre de inscripciones';
      case 'course':
        return t('countdown.course') || 'el inicio del curso preparatorio';
      case 'hackathon':
        return t('countdown.hackathon') || 'el Quantum Climate Hackathon';
      default:
        return eventName || 'el evento';
    }
  };

  const getEventIcon = () => {
    switch(eventType) {
      case 'registration':
        return <Users className="w-6 h-6" />;
      case 'course':
        return <BookOpen className="w-6 h-6" />;
      case 'hackathon':
        return <Zap className="w-6 h-6" />;
      default:
        return <Calendar className="w-6 h-6" />;
    }
  };

  const getEventTheme = () => {
    switch(eventType) {
      case 'registration':
        return {
          gradient: 'from-red-500 via-pink-500 to-rose-500',
          bgGradient: 'from-red-50 via-pink-50 to-rose-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-700',
          accentColor: 'text-red-600',
          glowColor: 'shadow-red-500/25',
          ringColor: 'ring-red-500/20'
        };
      case 'course':
        return {
          gradient: 'from-emerald-500 via-green-500 to-teal-500',
          bgGradient: 'from-emerald-50 via-green-50 to-teal-50',
          borderColor: 'border-emerald-200',
          textColor: 'text-emerald-700',
          accentColor: 'text-emerald-600',
          glowColor: 'shadow-emerald-500/25',
          ringColor: 'ring-emerald-500/20'
        };
      case 'hackathon':
        return {
          gradient: 'from-blue-600 via-purple-600 to-indigo-600',
          bgGradient: 'from-blue-50 via-purple-50 to-indigo-50',
          borderColor: 'border-blue-200',
          textColor: 'text-blue-700',
          accentColor: 'text-blue-600',
          glowColor: 'shadow-blue-500/25',
          ringColor: 'ring-blue-500/20'
        };
      default:
        return {
          gradient: 'from-slate-500 via-gray-500 to-zinc-500',
          bgGradient: 'from-slate-50 via-gray-50 to-zinc-50',
          borderColor: 'border-slate-200',
          textColor: 'text-slate-700',
          accentColor: 'text-slate-600',
          glowColor: 'shadow-slate-500/25',
          ringColor: 'ring-slate-500/20'
        };
    }
  };

  const theme = getEventTheme();

  if (timeLeft.isStarted) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br ${theme.bgGradient} border-2 ${theme.borderColor} rounded-3xl p-8 shadow-2xl ${theme.glowColor} ring-4 ${theme.ringColor} ${className}`}>
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        
        <div className="relative z-10 text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${theme.gradient} rounded-2xl mb-4 shadow-lg`}>
            {getEventIcon()}
          </div>
          <h3 className={`text-2xl font-bold ${theme.textColor} mb-2`}>
            {t('countdown.started') || '¡Ya comenzó!'}
          </h3>
          <p className={`${theme.accentColor} font-medium`}>
            {getEventText()}
          </p>
        </div>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: timeLeft.days === 1 ? 'día' : 'días', shortLabel: 'd' },
    { value: timeLeft.hours, label: timeLeft.hours === 1 ? 'hora' : 'horas', shortLabel: 'h' },
    { value: timeLeft.minutes, label: timeLeft.minutes === 1 ? 'minuto' : 'minutos', shortLabel: 'm' },
    { value: timeLeft.seconds, label: timeLeft.seconds === 1 ? 'segundo' : 'segundos', shortLabel: 's' }
  ];

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${theme.bgGradient} border-2 ${theme.borderColor} rounded-3xl p-8 shadow-2xl ${theme.glowColor} ring-4 ${theme.ringColor} transition-all duration-500 hover:scale-105 ${className}`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${theme.gradient} rounded-2xl mb-4 shadow-lg transform transition-transform hover:rotate-12`}>
            {getEventIcon()}
          </div>
          <h3 className={`text-lg font-semibold ${theme.accentColor} mb-2`}>
            {t('countdown.remaining') || 'Tiempo restante'}
          </h3>
          <p className={`text-sm ${theme.textColor} font-medium`}>
            {t('countdown.for') || 'para'} {getEventText()}
          </p>
        </div>

        {/* Countdown Display */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {timeUnits.map((unit, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 transform transition-all duration-300 hover:scale-110">
                  <div className={`text-3xl lg:text-4xl font-bold ${theme.textColor} font-mono leading-none`}>
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                </div>
                {/* Floating label */}
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${theme.gradient} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg`}>
                  {unit.shortLabel}
                </div>
              </div>
              <p className={`text-xs ${theme.accentColor} font-medium mt-3 hidden lg:block`}>
                {unit.label}
              </p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative">
          <div className="h-2 bg-white/30 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${theme.gradient} rounded-full transition-all duration-1000 animate-pulse`}
              style={{ 
                width: `${Math.min(100, (timeLeft.seconds / 60) * 100)}%` 
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface EventData {
  type: EventType;
  date: string;
  title: string;
  description: string;
}

interface EventCountdownSelectorProps {
  events?: EventData[];
  className?: string;
}

const EventCountdownSelector: React.FC<EventCountdownSelectorProps> = ({ 
  events = [
    { 
      type: 'registration', 
      date: '2025-07-15T23:59:59',
      title: 'Cierre de Inscripciones',
      description: 'Última oportunidad para registrarse'
    },
    { 
      type: 'course', 
      date: '2025-08-04T09:00:00',
      title: 'Curso Preparatorio',
      description: 'Inicio del curso de QWorld'
    },
    { 
      type: 'hackathon', 
      date: '2025-10-01T09:00:00',
      title: 'Quantum Hackathon',
      description: 'El evento principal comienza'
    }
  ],
  className = ""
}) => {
  const [selectedEvent, setSelectedEvent] = useState<EventType>(events[0]?.type || 'hackathon');
  const { t } = useLanguage();

  const getEventLabel = (eventType: EventType): string => {
    switch(eventType) {
      case 'registration':
        return t('events.registration') || 'Inscripciones';
      case 'course':
        return t('events.course') || 'Curso';
      case 'hackathon':
        return t('events.hackathon') || 'Hackathon';
      default:
        return eventType;
    }
  };

  const getEventIcon = (eventType: EventType) => {
    switch(eventType) {
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

  const getButtonTheme = (eventType: EventType, isSelected: boolean) => {
    const baseClasses = "flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg";
    
    switch(eventType) {
      case 'registration':
        return isSelected 
          ? `${baseClasses} bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-red-500/25 ring-2 ring-red-500/20` 
          : `${baseClasses} bg-white text-red-600 border-2 border-red-200 hover:bg-red-50 hover:border-red-300`;
      case 'course':
        return isSelected 
          ? `${baseClasses} bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-emerald-500/25 ring-2 ring-emerald-500/20` 
          : `${baseClasses} bg-white text-emerald-600 border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300`;
      case 'hackathon':
        return isSelected 
          ? `${baseClasses} bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/25 ring-2 ring-blue-500/20` 
          : `${baseClasses} bg-white text-blue-600 border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300`;
      default:
        return isSelected 
          ? `${baseClasses} bg-gradient-to-r from-slate-500 to-gray-500 text-white shadow-slate-500/25` 
          : `${baseClasses} bg-white text-slate-600 border-2 border-slate-200 hover:bg-slate-50`;
    }
  };

  const selectedEventData = events.find(event => event.type === selectedEvent);

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Event selector with enhanced design */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-6">
          Próximos Eventos
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {events.map((event) => (
            <button
              key={event.type}
              onClick={() => setSelectedEvent(event.type)}
              className={getButtonTheme(event.type, selectedEvent === event.type)}
            >
              {getEventIcon(event.type)}
              <div className="text-left">
                <div className="font-semibold">{getEventLabel(event.type)}</div>
                <div className="text-xs opacity-75">{event.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected event countdown */}
      {selectedEventData && (
        <div className="w-full max-w-2xl mx-auto">
          <CountdownTimer
            eventType={selectedEvent}
            targetDate={selectedEventData.date}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export { CountdownTimer, EventCountdownSelector };
export default EventCountdownSelector;