import React, { useState } from 'react';
import { Users, UserPlus, CheckCircle, Code, Brain, Globe, Clock, Award, BookOpen, Lightbulb, Target, Zap, GraduationCap, Calendar, Cloud } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";

const Requirements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hackers' | 'mentors'>('hackers');
  const { t } = useLanguage();

  const hackerRequirements = {
    description: t('req.hackers.description'),
    specific: [
      {
        icon: <GraduationCap className="w-5 h-5" />,
        title: t('req.hackers.specific.universityEnrollment.title'),
        description: t('req.hackers.specific.universityEnrollment.description')
      },
      {
        icon: <Award className="w-5 h-5" />,
        title: t('req.hackers.specific.academicProgress.title'),
        description: t('req.hackers.specific.academicProgress.description')
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: t('req.hackers.specific.programmingKnowledge.title'),
        description: t('req.hackers.specific.programmingKnowledge.description')
      }
    ],
    mandatory: {
      title: t('req.hackers.mandatory.title'),
      subtitle: t('req.hackers.mandatory.subtitle'),
      requirements: [
        'req.hackers.mandatory.requirements.0',
        'req.hackers.mandatory.requirements.1',
        'req.hackers.mandatory.requirements.2'
      ]
    }
  };

  const mentorRequirements = {
    description: t('req.mentors.description'),
    specific: [
      {
        icon: <Brain className="w-5 h-5" />,
        title: t('req.mentors.specific.quantumExpertise.title'),
        description: t('req.mentors.specific.quantumExpertise.description')
      },
      {
        icon: <Cloud className="w-5 h-5" />,
        title: t('req.mentors.specific.platformExperience.title'),
        description: t('req.mentors.specific.platformExperience.description')
      },
      {
        icon: <BookOpen className="w-5 h-5" />,
        title: t('req.mentors.specific.academicBackground.title'),
        description: t('req.mentors.specific.academicBackground.description')
      }
    ],
    mandatory: {
      title: t('req.mentors.mandatory.title'),
      subtitle: t('req.mentors.mandatory.subtitle'),
      requirements: [
        'req.mentors.mandatory.requirements.0',
        'req.mentors.mandatory.requirements.1',
        'req.mentors.mandatory.requirements.2'
      ]
    }
  };

  const RequirementCard = ({ requirement }: { requirement: any }) => (
    <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg h-full">
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
          activeTab === 'hackers' 
            ? 'bg-[#467e4a] text-white' 
            : 'bg-[#fd9d24] text-white'
        }`}>
          {requirement.icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-slate-900 mb-2">{requirement.title}</h4>
          <p className="text-slate-600 leading-relaxed">{requirement.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="requirements" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('nav.requirements')} &nbsp;
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t('req.overview')}
          </p>
        </div>

        {/* Mandatory Certification */}
        <div className="bg-[#eaf8fd] rounded-3xl p-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-3 bg-[#075184] text-white px-6 py-3 rounded-2xl mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="text-2xl font-bold">{t('req.bothRoles')}</h3>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{t('req.hackers.mandatory.title')}</h4>
              <p className="text-slate-900 font-semibold">{t('req.hackers.mandatory.subtitle')}</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-3">
                {hackerRequirements.mandatory.requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-3 text-slate-900">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{t(req)}</span>
                  </li>
                ))}
              </ul>
              <br />
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://qworld.net/oqi-hackathon-course/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#075184] to-[#04365e] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {t('footer.course')}
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-200 flex">
            <button
              onClick={() => setActiveTab('hackers')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'hackers'
                  ? 'bg-gradient-to-r from-[#5a8f5e] to-[#3a673b] text-white shadow-lg'
                  : 'text-slate-600 hover:text-green-400 hover:bg-green-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>{t('req.tab.hackers')}</span>
            </button>
            <button
              onClick={() => setActiveTab('mentors')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'mentors'
                  ? 'bg-gradient-to-r from-[#fd9d24] to-[#cc7d1e] text-white shadow-lg'
                  : 'text-slate-600 hover:text-orange-400 hover:bg-orange-50'
              }`}
            >
              <UserPlus className="w-5 h-5" />
              <span>{t('req.tab.mentors')}</span>
            </button>
          </div>
        </div>

        {/* Requirements Content */}
        <div className="space-y-16">
          {activeTab === 'hackers' && (
            <div className="space-y-12">
              {/* Role Description */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-[#467e4a] rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{t('req.tab.hackers')}</h3>
                </div>
                <p className="text-slate-900 text-lg leading-relaxed">
                  {t('req.hackers.description')}
                </p>
              </div>

              {/* Specific Requirements */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3 bg-[#467e4a] text-white px-6 py-3 rounded-2xl">
                    <CheckCircle className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">{t('req.hackers.requirements.title')}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                  {hackerRequirements.specific.map((req, index) => (
                    <div key={index} className="relative h-full">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#467e4a] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <RequirementCard requirement={req} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 text-center">
                <a
                  href="https://forms.gle/8NAtRCLmFr4eq6xy8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#5a8f5e] to-[#3a673b] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  {t('req.register.hacker')}
                </a>
              </div>
            </div>
          )}

          {activeTab === 'mentors' && (
            <div className="space-y-12">
              {/* Role Description */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-[#fd9d24] rounded-xl flex items-center justify-center">
                    <UserPlus className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{t('req.tab.mentors')}</h3>
                </div>
                <p className="text-slate-900 text-lg leading-relaxed">
                  {t('req.mentors.description')}
                </p>
              </div>

              {/* Specific Requirements */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3 bg-[#fd9d24] text-white px-6 py-3 rounded-2xl">
                    <CheckCircle className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">{t('req.mentors.requirements.title')}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                  {mentorRequirements.specific.map((req, index) => (
                    <div key={index} className="relative h-full">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#fd9d24] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <RequirementCard requirement={req} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 text-center">
                <a
                  href="https://forms.gle/8NAtRCLmFr4eq6xy8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#fd9d24] to-[#cc7d1e] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  {t('req.register.mentor')}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Requirements;