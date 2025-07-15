import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export type EventType = 'registration' | 'course' | 'hackathon' | 'preselection' | 'selection' ;

interface CountdownTimerProps {
  eventType?: EventType;
  targetDate?: string;
  className?: string;
  eventName?: string;
  extraText?: string;
  // MODIFICACIÓN: Se añade la prop 'size' para controlar el tamaño del componente
  size?: 'full' | 'compact';
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  eventType = "hackathon",
  targetDate = "2025-10-01T09:00:00",
  className = "",
  eventName = "",
  extraText = "",
  // MODIFICACIÓN: Se establece 'full' como valor por defecto
  size = 'full',
}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: false });
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
    // ... (sin cambios aquí)
    switch(eventType) {
      case 'registration': return t('countdown.registration') || 'el cierre de inscripciones';
      case 'course': return t('countdown.course') || 'el inicio del curso';
      case 'hackathon': return t('countdown.hackathon') || 'el Hackathon';
      case 'preselection': return t('countdown.preselection') || 'la preselección';
      case 'selection': return t('countdown.selection') || 'la selección';
      default: return eventName || 'el evento';
    }
  };

  const getEventIcon = () => {
    // ... (sin cambios aquí)
    switch(eventType) {
      case 'registration': return '📝';
      case 'course': return '📚';
      case 'hackathon': return '🚀';
      default: return '⏰';
    }
  };

  // MODIFICACIÓN: Vista compacta para cuando el evento ya comenzó
  if (timeLeft.isStarted) {
    const isCompact = size === 'compact';
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg ${className}`}>
        <div className="relative text-center ${isCompact ? 'p-4' : 'px-6 py-8'}">
          <div className={`${isCompact ? 'text-2xl' : 'text-4xl'} mb-2`}>🎉</div>
          <div className={`text-white font-bold ${isCompact ? 'text-lg' : 'text-xl'}`}>
            {t('countdown.started') || '¡Ya comenzó!'}
          </div>
          <div className={`text-emerald-100 font-medium ${isCompact ? 'text-xs' : 'text-sm'}`}>
            {getEventText()}
          </div>
        </div>
      </div>
    );
  }

  // MODIFICACIÓN: Se pasa la prop 'size' al componente TimeUnit
  const TimeUnit = ({ value, label }: { value: number; label: string }) => {
    const isCompact = size === 'compact';
    return (
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* Tamaño de caja y fuente ajustados para el modo compacto */}
          <div className={`bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 ${isCompact ? 'w-10 h-10' : 'w-12 h-12'}`}>
            <span className={`font-bold font-mono ${isCompact ? 'text-lg' : 'text-xl'}`}>{value.toString().padStart(2, '0')}</span>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-sm"></div>
        </div>
        <span className="text-xs font-semibold text-slate-600 mt-2 uppercase tracking-wide">{label}</span>
      </div>
    );
  };

  const isCompact = size === 'compact';

  return (
    // MODIFICACIÓN: Padding y bordes ajustados para el modo compacto
    <div className={`relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl shadow-lg border border-white/20 ${className}`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500 to-pink-600 rounded-full translate-x-12 translate-y-12"></div>
      </div>
      
      <div className={`relative ${isCompact ? 'p-4' : 'px-6 py-8'}`}>
        {/* Header ajustado para el modo compacto */}
        {!isCompact && (
          <div className="text-center mb-6">
            <div className="text-3xl mb-2">{getEventIcon()}</div>
            <div className="text-slate-700 text-sm font-semibold mb-1 uppercase tracking-wider">
              {t('countdown.remaining') || 'Tiempo restante para'}
            </div>
            <div className="text-slate-800 text-lg font-bold">
              {getEventText()}
            </div>
          </div>
        )}
        
        {/* Display del contador ajustado para el modo compacto */}
        <div className={`flex justify-center mb-4 ${isCompact ? 'gap-2 md:gap-3' : 'gap-4'}`}>
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

        {/* El texto extra no se muestra en modo compacto para ahorrar espacio */}
        {extraText && !isCompact && (
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              {extraText}
            </div>
          </div>
        )}
      </div>

      {!isCompact && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
      )}
    </div>
  );
};

// ... El resto del archivo (EventCountdownSelector) no necesita cambios ...
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
    { type: 'registration', date: '2025-07-25T23:59:59' },
    { type: 'preselection', date:  '2025-07-27T23:59:59' },
    { type: 'course', date: '2025-08-04T09:00:00' },
    { type: 'selection', date: '2025-08-29T23:59:59' },
    { type: 'hackathon', date: '2025-10-01T09:00:00' }
  ],
  className = ""
}) => {
  const [selectedEvent, setSelectedEvent] = useState<EventType>(events[0]?.type || 'hackathon');
  const { t } = useLanguage();

  const getEventLabel = (eventType: EventType): string => {
    switch(eventType) {
      case 'registration': return t('events.registration') || 'Inscripciones';
      case 'preselection': return t('events.preselection') || 'Preselección';
      case 'course': return t('events.course') || 'Curso';
      case 'selection': return t('events.selection') || 'Selección';
      case 'hackathon': return t('events.hackathon') || 'Hackathon';
      default: return eventType;
    }
  };

  const getEventIcon = (eventType: EventType): string => {
    switch(eventType) {
      case 'registration': return '📝';
      case 'course': return '📚';
      case 'hackathon': return '🚀';
      default: return '⏰';
    }
  };

  const formatDateLabel = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth()+1).toString().padStart(2, '0')}`;
  };

  const getExtraText = (eventType: EventType): string => {
    switch (eventType) {
      case 'registration': return t('extra.registration') || 'No te quedes afuera';
      case 'preselection': return t('extra.preselection') || 'Atento a los resultados';
      case 'course': return t('extra.course') || '¡A prepararse con todo!';
      case 'selection': return t('extra.selection') || 'Los finalistas serán anunciados';
      case 'hackathon': return t('extra.hackathon') || '¡El evento principal se acerca!';
      default: return '';
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
      <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-6 shadow-lg">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Selecciona un evento</h3>
          <p className="text-slate-600 text-sm">Elige la fecha para la cuenta regresiva</p>
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

      {selectedEventData && (
        <div className="w-full max-w-lg mx-auto">
          <CountdownTimer
            eventType={selectedEvent}
            targetDate={selectedEventData.date}
            className="w-full"
            extraText={getExtraText(selectedEvent)}
            size="full" // Aquí siempre usamos el tamaño completo
          />
        </div>
      )}
    </div>
  );
};


export { CountdownTimer, EventCountdownSelector };
export default EventCountdownSelector;