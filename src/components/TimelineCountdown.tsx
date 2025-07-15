import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ChevronRight, Users, BookOpen, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  imageUrl: string;
}

const TimelineCountdown: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<Record<string, TimeLeft>>({});
  const { t } = useLanguage();

  const events: EventData[] = [
    {
      id: 'registration',
      type: 'registration',
      date: '2025-07-25T23:59:59',
      title: 'Cierre de Inscripciones',
      description: 'Última oportunidad para registrarse al hackathon',
      imageUrl: '../img/Imagen15_07.png'
    },
    {
      id: 'course',
      type: 'course',
      date: '2025-08-04T09:00:00',
      title: 'Curso Preparatorio',
      description: 'Inicio del curso de computación cuántica de QWorld',
      imageUrl: '../img/Imagen04_08.png'
    },
    {
      id: 'hackathon',
      type: 'hackathon',
      date: '2025-10-01T09:00:00',
      title: 'Quantum Hackathon',
      description: 'El evento principal comienza en Montevideo',
      imageUrl: '../img/Imagen_0210.png'
    }
  ];

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const newTimeLeft: Record<string, TimeLeft> = {};

      events.forEach(event => {
        const diff = new Date(event.date).getTime() - now;
        if (diff > 0) {
          newTimeLeft[event.id] = {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((diff % (1000 * 60)) / 1000),
            isStarted: false
          };
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

  const formatBtnLabel = (dateStr: string) => {
    const d = new Date(dateStr);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    return `${dd}/${mm}`;
  };

  const currentImage = events.find(e => e.id === selectedEvent)?.imageUrl || '../img/ImagenInicial.png';
  const formatTimeUnit = (value: number) => String(value).padStart(2, '0');


  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <motion.img
          key={currentImage}
          src={currentImage}
          alt="Evento"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-b-2xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Cronograma</h2>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {events.map(event => {
            const info = timeLeft[event.id];
            const isSelected = selectedEvent === event.id;

            return (
              <div key={event.id} className="text-center">
                <button
                  onClick={() => setSelectedEvent(isSelected ? null : event.id)}
                  className="w-20 h-20 rounded-full shadow-md text-white font-semibold text-lg transition-transform hover:scale-105"
                  style={{ backgroundColor: '#075184' }}
                >
                  {formatBtnLabel(event.date)}
                </button>
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              key={selectedEvent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-8 max-w-xl mx-auto text-center"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {events.find(e => e.id === selectedEvent)?.title}
              </h3>
              <p className="text-sm text-slate-700 mb-4">
                {events.find(e => e.id === selectedEvent)?.description}
              </p>
              {timeLeft[selectedEvent] && !timeLeft[selectedEvent].isStarted ? (
  <motion.div
    className="grid grid-cols-4 gap-3"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.3 }}
  >
    {[
      { value: timeLeft[selectedEvent].days, label: 'Días' },
      { value: timeLeft[selectedEvent].hours, label: 'Horas' },
      { value: timeLeft[selectedEvent].minutes, label: 'Min' },
      { value: timeLeft[selectedEvent].seconds, label: 'Seg' }
    ].map((unit, i) => (
      <div key={i} className="text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm">
        <div className="text-2xl font-bold text-blue-800 font-mono">
            {formatTimeUnit(unit.value)}
          </div>
        </div>
        <div className="text-xs font-medium text-slate-600 mt-1">
          {unit.label}
        </div>
      </div>
    ))}
  </motion.div>
) : (
  <div className="text-green-600 font-semibold">¡Activo!</div>
)}

              
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TimelineCountdown;