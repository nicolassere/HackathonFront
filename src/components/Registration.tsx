import React, { useState } from 'react';
import { Users, UserPlus, ExternalLink, CheckCircle, Clock, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Registration = () => {
  const [activeRole, setActiveRole] = useState<'hacker' | 'mentor'>('hacker');
  const { t } = useLanguage();

  const registrationSteps = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Completa el curso",
      description: "Finaliza el curso de QWorld con calificación mínima del 70%",
      status: "required"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Registra tu participación",
      description: "Llena el formulario de registro con tus datos y motivación",
      status: "required"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Espera confirmación",
      description: "Recibirás una confirmación por email con los siguientes pasos",
      status: "pending"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "¡Participa en el hackathon!",
      description: "Únete a tu equipo en Montevideo del 1-3 de octubre",
      status: "future"
    }
  ];

  return (
    <section id="registration" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('nav.registration')}
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Únete a la experiencia de hackathon cuántico más grande de Latinoamérica. 
            El proceso es simple y te guiaremos en cada paso.
          </p>
        </div>

        {/* Role Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-200 flex">
            <button
              onClick={() => setActiveRole('hacker')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeRole === 'hacker'
                  ? 'bg-gradient-to-r from-[#5a8f5e] to-[#3a673b] text-white shadow-lg'
                  : 'text-slate-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Registrarse como Hacker</span>
            </button>
            <button
              onClick={() => setActiveRole('mentor')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeRole === 'mentor'
                  ? 'bg-gradient-to-r from-[#fd9d24] to-[#cc7d1e] text-white shadow-lg'
                  : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <UserPlus className="w-5 h-5" />
              <span>Registrarse como Mentor</span>
            </button>
          </div>
        </div>

        {/* Registration Process */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Proceso de Registro</h3>
            {registrationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  step.status === 'required' ? 'bg-blue-100 text-blue-600' :
                  step.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-8 h-8 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-900">{step.title}</h4>
                  </div>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Registration Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
              activeRole === 'hacker' 
                ? 'bg-gradient-to-br from-[#5a8f5e] to-[#3a673b]' 
                : 'bg-gradient-to-br from-[#fd9d24] to-[#cc7d1e]'
            }`}>
              {activeRole === 'hacker' ? 
                <Users className="w-8 h-8 text-white" /> : 
                <UserPlus className="w-8 h-8 text-white" />
              }
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {activeRole === 'hacker' ? 'Registro para Hackers' : 'Registro para Mentores'}
            </h3>

            <p className="text-slate-600 mb-6 leading-relaxed">
              {activeRole === 'hacker' 
                ? 'Como hacker, serás parte del corazón del evento. Trabajarás en equipo para desarrollar soluciones innovadoras que combinen computación cuántica con acción climática.'
                : 'Como mentor, guiarás a los equipos con tu experiencia en computación cuántica, ayudándolos a superar desafíos técnicos y desarrollar soluciones efectivas.'
              }
            </p>

            {/* Requirements Checklist */}
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-slate-900">Requisitos principales:</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-slate-600">
                    {activeRole === 'hacker' 
                      ? 'Estudiante universitario (50%+ completado)'
                      : 'Experiencia en computación cuántica'
                    }
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-slate-600">Curso de QWorld completado (70%+)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-slate-600">
                    {activeRole === 'hacker' 
                      ? 'Conocimientos básicos de Python'
                      : 'Experiencia con plataformas cuánticas'
                    }
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a
                href="https://qworld.net/oqi-hackathon-course/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Comenzar Curso de Preparación</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://forms.gle/8NAtRCLmFr4eq6xy8"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 ${
                  activeRole === 'hacker'
                    ? 'bg-gradient-to-r from-[#5a8f5e] to-[#3a673b] text-white'
                    : 'bg-gradient-to-r from-[#fd9d24] to-[#cc7d1e] text-white'
                }`}
              >
                {activeRole === 'hacker' ? <Users className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                <span>
                  {activeRole === 'hacker' ? 'Registrarse como Hacker' : 'Registrarse como Mentor'}
                </span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Important Note */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Importante:</strong> Debes completar el curso de QWorld antes del registro. 
                El curso es gratuito y se realiza del 4-13 de agosto de 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;