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
    <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
          activeTab === 'hackers' 
            ? 'bg-gradient-to-br from-green-500 to-teal-500 text-white' 
            : 'bg-gradient-to-br from-orange-500 to-red-500 text-white'
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

        {/* Horizontal Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-200 flex">
            <button
              onClick={() => setActiveTab('hackers')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'hackers'
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>For Hackers</span>
            </button>
            <button
              onClick={() => setActiveTab('mentors')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'mentors'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
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
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-8 border border-green-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">Hackers</h3>
                </div>
                <p className="text-green-700 text-lg leading-relaxed">
                  {hackerRequirements.description}
                </p>
              </div>

              {/* Specific Requirements */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-2xl">
                    <CheckCircle className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Requirements for Hackers</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                  {hackerRequirements.specific.map((req, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <RequirementCard requirement={req} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mandatory Certification */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-2xl mb-4">
                    <Calendar className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Both Roles</h3>
                  </div>
                  <h4 className="text-xl font-bold text-blue-800 mb-2">{hackerRequirements.mandatory.title}</h4>
                  <p className="text-blue-700 font-semibold">{hackerRequirements.mandatory.subtitle}</p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <ul className="space-y-3">
                    {hackerRequirements.mandatory.requirements.map((req, index) => (
                      <li key={index} className="flex items-center space-x-3 text-blue-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mentors' && (
            <div className="space-y-12">
              {/* Role Description */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                    <UserPlus className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-800">Mentors</h3>
                </div>
                <p className="text-orange-700 text-lg leading-relaxed">
                  {mentorRequirements.description}
                </p>
              </div>

              {/* Specific Requirements */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-2xl">
                    <CheckCircle className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Requirements for Mentors</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                  {mentorRequirements.specific.map((req, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <RequirementCard requirement={req} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mandatory Certification */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-2xl mb-4">
                    <Calendar className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Both Roles</h3>
                  </div>
                  <h4 className="text-xl font-bold text-blue-800 mb-2">{mentorRequirements.mandatory.title}</h4>
                  <p className="text-blue-700 font-semibold">{mentorRequirements.mandatory.subtitle}</p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <ul className="space-y-3">
                    {mentorRequirements.mandatory.requirements.map((req, index) => (
                      <li key={index} className="flex items-center space-x-3 text-blue-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Preparation Resources */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Not Sure If You Qualify?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't worry! We provide comprehensive preparation resources to help you get ready. 
            The most important thing is your enthusiasm to learn and contribute to climate solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://qworld.net/oqi-hackathon-course/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Preparation Course
            </a>
            <a
              href="mailto:qhl@um.edu.uy"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Ask Questions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;