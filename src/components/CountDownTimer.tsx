import React, { useState, useEffect } from 'react';
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

  const getEventColor = (): {
    bg: string;
    border: string;
    text: string;
    shadow: string;
  } => {
    switch(eventType) {
      case 'registration':
        return {
          bg: 'bg-gradient-to-r from-red-50 via-red-100 to-red-50',
          border: 'border-red-200',
          text: '#dc2626',
          shadow: 'shadow-red-100'
        };
      case 'course':
        return {
          bg: 'bg-gradient-to-r from-green-50 via-green-100 to-green-50',
          border: 'border-green-200',
          text: '#16a34a',
          shadow: 'shadow-green-100'
        };
      case 'hackathon':
        return {
          bg: 'bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50',
          border: 'border-blue-200',
          text: '#075184',
          shadow: 'shadow-blue-100'
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50',
          border: 'border-gray-200',
          text: '#374151',
          shadow: 'shadow-gray-100'
        };
    }
  };

  if (timeLeft.isStarted) {
    const colors = getEventColor();
    return (
      <div className={`inline-flex items-center justify-center px-6 py-3 ${colors.bg} ${colors.border} border-2 rounded-xl shadow-lg ${colors.shadow} ${className}`}>
        <span className="text-lg font-bold animate-pulse" style={{ color: colors.text }}>
          {t('countdown.started') || '¡Ya comenzó!'}
        </span>
      </div>
    );
  }

  const formatTime = () => {
    if (timeLeft.days > 0) {
      return `${timeLeft.days}d ${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`;
    } else {
      return `${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`;
    }
  };

  const colors = getEventColor();

  return (
    <div className={`inline-flex flex-col items-center justify-center px-6 py-4 ${colors.bg} ${colors.border} border-2 rounded-xl shadow-lg ${colors.shadow} ${className} transition-all duration-300 hover:scale-105`}>
      <div className="text-sm font-medium text-slate-600 mb-2 text-center">
        {t('countdown.remaining') || 'Faltan'}
      </div>
      
      <div className="font-mono font-bold text-2xl px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 shadow-sm mb-2" style={{ color: colors.text }}>
        {formatTime()}
      </div>
      
      <div className="text-sm font-medium text-slate-700 text-center">
        {t('countdown.for') || 'para'} {getEventText()}
      </div>
    </div>
  );
};

interface EventData {
  type: EventType;
  date: string;
}

interface EventCountdownSelectorProps {
  events?: EventData[];
  className?: string;
}

const EventCountdownSelector: React.FC<EventCountdownSelectorProps> = ({ 
  events = [
    { type: 'registration', date: '2025-07-15T23:59:59' },
    { type: 'course', date: '2025-08-04T09:00:00' },
    { type: 'hackathon', date: '2025-10-01T09:00:00' }
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
        return t('events.course') || 'Curso Preparatorio';
      case 'hackathon':
        return t('events.hackathon') || 'Hackathon';
      default:
        return eventType;
    }
  };

  const getButtonStyle = (eventType: EventType): string => {
    const isSelected = selectedEvent === eventType;
    
    switch(eventType) {
      case 'registration':
        return isSelected 
          ? 'bg-red-100 text-red-700 border-red-300 shadow-red-100' 
          : 'bg-white text-red-600 border-red-200 hover:bg-red-50';
      case 'course':
        return isSelected 
          ? 'bg-green-100 text-green-700 border-green-300 shadow-green-100' 
          : 'bg-white text-green-600 border-green-200 hover:bg-green-50';
      case 'hackathon':
        return isSelected 
          ? 'bg-blue-100 text-blue-700 border-blue-300 shadow-blue-100' 
          : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50';
      default:
        return isSelected 
          ? 'bg-gray-100 text-gray-700 border-gray-300' 
          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50';
    }
  };

  const selectedEventData = events.find(event => event.type === selectedEvent);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Botones de selección */}
      <div className="flex flex-wrap justify-center gap-3">
        {events.map((event) => (
          <button
            key={event.type}
            onClick={() => setSelectedEvent(event.type)}
            className={`px-4 py-2 rounded-lg font-medium border-2 transition-all duration-200 ${getButtonStyle(event.type)} ${
              selectedEvent === event.type ? 'shadow-lg transform scale-105' : 'shadow-sm hover:shadow-md'
            }`}
          >
            {getEventLabel(event.type)}
          </button>
        ))}
      </div>

      {/* Timer del evento seleccionado */}
      {selectedEventData && (
        <div className="flex justify-center">
          <CountdownTimer
            eventType={selectedEvent}
            targetDate={selectedEventData.date}
            className="max-w-sm"
          />
        </div>
      )}
    </div>
  );
};

export { CountdownTimer, EventCountdownSelector };
export default EventCountdownSelector;