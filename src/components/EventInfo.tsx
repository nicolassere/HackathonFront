import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Clock, Target, Award, BookOpen, Users, UserPlus, ExternalLink, Mail, MapPin, Calendar, ChevronDown, Atom, Zap, Cpu, Brain } from 'lucide-react';

// Enhanced Event Info with interactive cards
const EventInfo = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impacto Climático",
      description: "Desarrolla soluciones de computación cuántica para abordar desafíos climáticos reales y sustentabilidad ambiental.",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "72 Horas",
      description: "Tres días intensivos de colaboración, innovación y desarrollo de algoritmos cuánticos revolucionarios.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Reconocimiento Global",
      description: "Compite por premios y reconocimiento en el hackathon cuántico más grande de Latinoamérica.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Track de Aprendizaje",
      description: "Acceso a cursos de computación cuántica y mentoría de expertos de la industria durante el evento.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="event-info" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/50 to-pink-100/50 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Computación Cuántica para 
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Acción Climática
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Únete al hackathon de computación cuántica más grande de Latinoamérica, donde la tecnología de vanguardia 
            se encuentra con la acción climática. Colabora con expertos para desarrollar soluciones cuánticas innovadoras.
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-3xl transition-all duration-500 transform cursor-pointer ${
                activeFeature === index
                  ? `bg-gradient-to-br ${feature.bgColor} scale-105 shadow-2xl`
                  : 'bg-gradient-to-br from-slate-50 to-blue-50 hover:scale-105 hover:shadow-xl'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} text-white rounded-3xl mb-6 shadow-lg transform transition-transform duration-300 hover:rotate-12`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Timeline */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-200/30 to-purple-200/30 rounded-full blur-2xl"></div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12">
            Cronograma del Evento
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                day: 1,
                date: "1 Octubre",
                title: "Apertura & Formación",
                desc: "Ceremonia de apertura, formación de equipos y presentación de desafíos"
              },
              {
                day: 2,
                date: "2 Octubre", 
                title: "Desarrollo Intensivo",
                desc: "Desarrollo intensivo, sesiones de mentoría y revisiones de progreso"
              },
              {
                day: 3,
                date: "3 Octubre",
                title: "Presentaciones & Premios",
                desc: "Presentaciones finales, evaluación por jurados y ceremonia de premiación"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    {item.day}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-blue-600 font-semibold mb-2">{item.date}</p>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;