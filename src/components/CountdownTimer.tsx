import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type EventType = 'registration' | 'course' | 'hackathon';

interface CountdownTimerProps {
  eventType?: EventType;
  targetDate?: string;
  className?: string;
  eventName?: string;
  extraText?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  eventType = "hackathon",
  targetDate = "2025-10-01T09:00:00",
  className = "",
  eventName = "",
  extraText = ""
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

  const colors = {
    bg: 'bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50',
    border: 'border-blue-200',
    text: '#075184',
    shadow: 'shadow-blue-100'
  };

  if (timeLeft.isStarted) {
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

  return (
    <div className={`flex flex-col items-center justify-center w-full px-6 py-4 ${colors.bg} ${colors.border} border-2 rounded-xl shadow-lg ${colors.shadow} ${className} transition-all duration-300 hover:scale-105`}>
      <div className="text-sm font-medium text-slate-600 mb-2 text-center">
        {t('countdown.remaining') || 'Faltan'}
      </div>
      
      <div className="w-full font-mono font-bold text-2xl px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 shadow-sm mb-2 text-center" style={{ color: colors.text }}>
        {formatTime()}
      </div>
      
      <div className="text-sm font-medium text-slate-700 text-center">
        {t('countdown.for') || 'para'} {getEventText()}
      </div>

      {extraText && (
        <div className="mt-2 text-sm text-slate-600 text-center transition-all duration-500 ease-in-out opacity-100">
          {extraText}
        </div>
      )}
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

  const formatDateLabel = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth()+1).toString().padStart(2, '0')}`;
  };

  const getExtraText = (eventType: EventType): string => {
    switch (eventType) {
      case 'registration':
        return t('extra.registration') || 'No te quedes afuera, completá tu inscripción.';
      case 'course':
        return t('extra.course') || '¡Prepárate con todo en el curso previo!';
      case 'hackathon':
        return t('extra.hackathon') || 'El evento principal se acerca. ¡Nos vemos pronto!';
      default:
        return '';
    }
  };

  const getButtonStyle = (eventType: EventType): string => {
    const isSelected = selectedEvent === eventType;
    return isSelected 
      ? 'bg-[#075184] text-white border-[#075184] shadow-lg ring-2 ring-offset-2 ring-[#075184] scale-105'
      : 'bg-white text-[#075184] border-[#075184] hover:bg-[#075184]/10 hover:scale-105';
  };

  const selectedEventData = events.find(event => event.type === selectedEvent);

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex flex-wrap justify-center gap-3">
        {events.map((event) => (
          <button
            key={event.type}
            onClick={() => setSelectedEvent(event.type)}
            className={`px-4 py-2 rounded-full font-semibold border-2 transition-all duration-200 transform ${getButtonStyle(event.type)}`}
          >
            {getEventLabel(event.type)} ({formatDateLabel(event.date)})
          </button>
        ))}
      </div>

      {selectedEventData && (
        <div className="w-full max-w-md mx-auto">
          <CountdownTimer
            eventType={selectedEvent}
            targetDate={selectedEventData.date}
            className="w-full"
            extraText={getExtraText(selectedEvent)}
          />
        </div>
      )}
    </div>
  );
};

export { CountdownTimer, EventCountdownSelector };
export default EventCountdownSelector;
