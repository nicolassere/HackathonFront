import React, { useState } from 'react';
import { Users, UserPlus, CheckCircle, Code, Brain, Globe, Clock, Award, BookOpen, Lightbulb, Target, Zap, GraduationCap, Calendar, Cloud } from 'lucide-react';

const Requirements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hackers' | 'mentors'>('hackers');

  const hackerRequirements = {
    description: "Hackers propose, design, and develop innovative solutions aligned with the 2030 SDGs. They apply quantum and classical technologies in creative and practical ways to address real challenges in Latin America with a collaborative spirit.",
    specific: [
      {
        icon: <GraduationCap className="w-5 h-5" />,
        title: "University Enrollment",
        description: "Currently enrolled in a university degree in technology, science, engineering, or sustainable development."
      },
      {
        icon: <Award className="w-5 h-5" />,
        title: "Academic Progress",
        description: "At least 50% of the degree completed by the time of application."
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "Programming Knowledge",
        description: "Basic knowledge of Python (or completion of an introductory QWorld course if not)."
      }
    ],
    mandatory: {
      title: "Mandatory Certification",
      subtitle: "QWorld Quantum Computing Course (Virtual, August 4-13, 2025)",
      requirements: [
        "Complete all course activities",
        "Score at least 50% on each assessment", 
        "Achieve a final grade above 70%"
      ]
    }
  };

  const mentorRequirements = {
    description: "Mentors guide and lead the project development process. Their role is essential in providing technical direction and supporting the use of quantum technologies, artificial intelligence, and other practical tools to create solutions aligned with the 2030 Sustainable Development Goals (SDGs).",
    specific: [
      {
        icon: <Brain className="w-5 h-5" />,
        title: "Quantum Computing Expertise",
        description: "Solid knowledge in quantum computing principles, algorithms, and applications."
      },
      {
        icon: <Cloud className="w-5 h-5" />,
        title: "Platform Experience",
        description: "Experience using cloud-based quantum computing platforms (IBM Quantum, AWS Braket, etc.)."
      },
      {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Academic Background",
        description: "Currently pursuing postgraduate studies in related fields or possessing relevant professional experience."
      }
    ],
    mandatory: {
      title: "Mandatory Certification", 
      subtitle: "QWorld Quantum Computing Course (Virtual, August 4-13, 2025)",
      requirements: [
        "Complete all course activities",
        "Score at least 50% on each assessment",
        "Achieve a final grade above 70%"
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
            Requirements &
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're joining as a hacker or mentor, here's what you need to know to make the most
            of this quantum computing hackathon experience.
          </p>
        </div>

        {/* Mandatory Certification */}
        <div className="bg-[#eaf8fd] rounded-3xl p-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-3 bg-[#075184] text-white px-6 py-3 rounded-2xl mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Both Roles</h3>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{hackerRequirements.mandatory.title}</h4>
              <p className="text-slate-900 font-semibold">{hackerRequirements.mandatory.subtitle}</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-3">
                {hackerRequirements.mandatory.requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-3 text-slate-900">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{req}</span>
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
                Start Preparation Course
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
              <span>For Hackers</span>
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
              <span>For Mentors</span>
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
                  <h3 className="text-2xl font-bold text-slate-900">Hackers</h3>
                </div>
                <p className="text-slate-900 text-lg leading-relaxed">
                  {hackerRequirements.description}
                </p>
              </div>

              {/* Specific Requirements */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3 bg-[#467e4a] text-white px-6 py-3 rounded-2xl">
                    <CheckCircle className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Requirements for Hackers</h3>
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
                  Register as Hacker
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
                  <h3 className="text-2xl font-bold text-slate-900">Mentors</h3>
                </div>
                <p className="text-slate-900 text-lg leading-relaxed">
                  {mentorRequirements.description}
                </p>
              </div>

              {/* Specific Requirements */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3 bg-[#fd9d24] text-white px-6 py-3 rounded-2xl">
                    <CheckCircle className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Requirements for Mentors</h3>
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
                  Register as Mentor
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