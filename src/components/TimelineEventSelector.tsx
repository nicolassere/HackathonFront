import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CountdownTimer, { EventType } from './CountDownTimer';

export interface EventData {
  type: EventType;
  date: string;
}

export interface TimelineEventSelectorProps {
  events?: EventData[];
  className?: string;
}

const TimelineEventSelector: React.FC<TimelineEventSelectorProps> = ({ 
  events = [
    { type: 'registration', date: '2025-07-15T23:59:59' },
    { type: 'course', date: '2025-08-04T09:00:00' },
    { type: 'hackathon', date: '2025-10-01T09:00:00' }
  ],
  className = ""
}) => {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [expandedEvent, setExpandedEvent] = useState<EventType | null>(null);
  const { t } = useLanguage();

  const getEventTitle = (eventType: EventType): string =>
    t(`timeline.${eventType}.title`) || t(`events.${eventType}`) || eventType;

  const getEventDescription = (eventType: EventType): string =>
    t(`timeline.${eventType}.description`) || '';

  const getEventDetails = (eventType: EventType): string =>
    t(`timeline.${eventType}.details`) || '';

  const getEventColor = (eventType: EventType, isActive: boolean = false): string => {
    const base = isActive ? 'border-2 shadow-lg' : 'border';
    switch (eventType) {
      case 'registration':
        return isActive ? `bg-red-500 border-red-600` : `bg-red-100 border-red-300 hover:bg-red-200`;
      case 'course':
        return isActive ? `bg-green-500 border-green-600` : `bg-green-100 border-green-300 hover:bg-green-200`;
      case 'hackathon':
        return isActive ? `bg-blue-500 border-blue-600` : `bg-blue-100 border-blue-300 hover:bg-blue-200`;
      default:
        return isActive ? `bg-gray-500 border-gray-600` : `bg-gray-100 border-gray-300 hover:bg-gray-200`;
    }
  };

  const getTextColor = (eventType: EventType): string => {
    switch(eventType) {
      case 'registration': return 'text-red-700';
      case 'course': return 'text-green-700';
      case 'hackathon': return 'text-blue-700';
      default: return 'text-gray-700';
    }
  };

  const getBorderColor = (eventType: EventType): string => {
    switch(eventType) {
      case 'registration': return 'border-red-200';
      case 'course': return 'border-green-200';
      case 'hackathon': return 'border-blue-200';
      default: return 'border-gray-200';
    }
  };

  const handleEventClick = (eventType: EventType) => {
    if (selectedEvent === eventType) {
      setExpandedEvent(expandedEvent === eventType ? null : eventType);
    } else {
      setSelectedEvent(eventType);
      setExpandedEvent(eventType);
    }
  };

  const selectedEventData = events.find(event => event.type === selectedEvent);

  return (
    <div className={`space-y-10 ${className}`}>
      {/* Timeline central */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-16 bottom-16 w-1 bg-gradient-to-b from-red-300 via-green-300 to-blue-300 opacity-30"></div>

        <div className="space-y-16">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedEvent === event.type;
            const dateFormatted = new Date(event.date).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: '2-digit'
            });

            return (
              <div key={event.type} className="relative">
                {/* Línea lateral hacia el botón */}
                <div className={`absolute top-1/2 transform -translate-y-1/2 w-16 h-0.5 ${
                  event.type === 'registration' ? 'bg-red-300' :
                  event.type === 'course' ? 'bg-green-300' :
                  'bg-blue-300'
                } ${isEven ? 'left-1/2 ml-1' : 'right-1/2 mr-1'}`}></div>

                {/* Punto central */}
                <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10 ${
                  selectedEvent === event.type ? `${getEventColor(event.type, true)} scale-125` : 'bg-white border-2 border-gray-300 hover:scale-110'
                }`}></div>

                {/* Botón del evento */}
                <div className={`flex ${isEven ? 'justify-start pl-16' : 'justify-end pr-16'}`}>
                  <button
                    onClick={() => handleEventClick(event.type)}
                    className={`px-6 py-4 rounded-2xl transition-all duration-300 transform shadow-md ${getEventColor(event.type, selectedEvent === event.type)}`}
                  >
                    <div className="text-center">
                      <div className={`font-bold text-xl ${selectedEvent === event.type ? 'text-white' : getTextColor(event.type)}`}>
                        {dateFormatted}
                      </div>
                      <div className={`text-sm ${selectedEvent === event.type ? 'text-white/90' : 'text-gray-600'}`}>
                        {getEventTitle(event.type)}
                      </div>
                    </div>
                  </button>
                </div>

                {/* Detalles del evento */}
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`mt-6 ${isEven ? 'ml-16' : 'mr-16'}`}>
                    <div className={`p-6 bg-white/95 backdrop-blur-md rounded-xl shadow-lg transform transition-all duration-500 ${isExpanded ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'} ${getBorderColor(event.type)}`}>
                      <h3 className={`font-semibold text-lg mb-2 ${getTextColor(event.type)}`}>
                        {getEventDescription(event.type)}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {getEventDetails(event.type)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contador */}
      {selectedEventData && (
        <div className="w-full max-w-md mx-auto transition-opacity duration-700 ease-in-out opacity-100">
          <CountdownTimer
            events={selectedEvent!}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default TimelineEventSelector;
