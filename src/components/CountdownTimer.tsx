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

  const getEventIcon = () => {
    switch(eventType) {
      case 'registration':
        return '📝';
      case 'course':
        return '📚';
      case 'hackathon':
        return '🚀';
      default:
        return '⏰';
    }
  };

  if (timeLeft.isStarted) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 rounded-2xl shadow-xl ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
        <div className="relative px-6 py-8 text-center">
          <div className="text-4xl mb-3 animate-bounce">🎉</div>
          <div className="text-white text-xl font-bold mb-2">
            {t('countdown.started') || '¡Ya comenzó!'}
          </div>
          <div className="text-emerald-100 text-sm font-medium">
            {getEventText()}
          </div>
        </div>
      </div>
    );
  }

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl w-16 h-16 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110">
          <span className="text-xl font-bold font-mono">{value.toString().padStart(2, '0')}</span>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-20 blur-sm"></div>
      </div>
      <span className="text-xs font-semibold text-slate-600 mt-2 uppercase tracking-wide">{label}</span>
    </div>
  );

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl shadow-xl border border-white/20 ${className}`}>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500 to-pink-600 rounded-full translate-x-12 translate-y-12"></div>
      </div>
      
      <div className="relative px-6 py-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-3xl mb-2">{getEventIcon()}</div>
          <div className="text-slate-700 text-sm font-semibold mb-1 uppercase tracking-wider">
            {t('countdown.remaining') || 'Tiempo restante'}
          </div>
          <div className="text-slate-800 text-lg font-bold">
            {getEventText()}
          </div>
        </div>

        {/* Countdown Display */}
        <div className="flex justify-center gap-4 mb-6">
          {timeLeft.days > 0 && (
            <TimeUnit 
              value={timeLeft.days} 
              label={t('countdown.days') || 'días'} 
            />
          )}
          <TimeUnit 
            value={timeLeft.hours} 
            label={t('countdown.hours') || 'hrs'} 
          />
          <TimeUnit 
            value={timeLeft.minutes} 
            label={t('countdown.minutes') || 'min'} 
          />
          <TimeUnit 
            value={timeLeft.seconds} 
            label={t('countdown.seconds') || 'seg'} 
          />
        </div>

        {/* Extra Text */}
        {extraText && (
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              {extraText}
            </div>
          </div>
        )}
      </div>

      {/* Subtle animated accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
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

  const getEventIcon = (eventType: EventType): string => {
    switch(eventType) {
      case 'registration':
        return '📝';
      case 'course':
        return '📚';
      case 'hackathon':
        return '🚀';
      default:
        return '⏰';
    }
  };

  const formatDateLabel = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth()+1).toString().padStart(2, '0')}`;
  };

  const getExtraText = (eventType: EventType): string => {
    switch (eventType) {
      case 'registration':
        return t('extra.registration') || 'No te quedes afuera, completá tu inscripción';
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
      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-xl ring-4 ring-blue-200 scale-105 transform' 
      : 'bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200 hover:bg-white hover:shadow-lg hover:scale-105 transform hover:border-blue-300';
  };

  const selectedEventData = events.find(event => event.type === selectedEvent);

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Event Selector */}
      <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-6 shadow-lg">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Selecciona un evento</h3>
          <p className="text-slate-600 text-sm">Elige el evento del que quieres ver el countdown</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {events.map((event) => (
            <button
              key={event.type}
              onClick={() => setSelectedEvent(event.type)}
              className={`group px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 ${getButtonStyle(event.type)}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg group-hover:animate-bounce">{getEventIcon(event.type)}</span>
                <div className="text-left">
                  <div className="text-sm font-bold">{getEventLabel(event.type)}</div>
                  <div className="text-xs opacity-75">{formatDateLabel(event.date)}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Event Countdown */}
      {selectedEventData && (
        <div className="w-full max-w-lg mx-auto">
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