import React, { useState } from 'react';
import { Users, UserPlus, CheckCircle, Code, Brain, Globe, Clock, Award, BookOpen, Lightbulb, Target, Zap } from 'lucide-react';

const Requirements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hackers' | 'mentors'>('hackers');

  const hackerRequirements = {
    essential: [
      {
        icon: <Code className="w-5 h-5" />,
        title: "Programming Experience",
        description: "Basic proficiency in Python, JavaScript, or similar programming languages"
      },
      {
        icon: <Brain className="w-5 h-5" />,
        title: "Mathematical Foundation",
        description: "Understanding of linear algebra, complex numbers, and basic probability"
      },
      {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Quantum Computing Basics",
        description: "Familiarity with quantum concepts (qubits, superposition, entanglement) - our prep course covers this!"
      },
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Climate Awareness",
        description: "Interest in environmental challenges and sustainable technology solutions"
      }
    ],
    preferred: [
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Quantum Frameworks",
        description: "Experience with Qiskit, Cirq, PennyLane, or other quantum computing libraries"
      },
      {
        icon: <Target className="w-5 h-5" />,
        title: "Machine Learning",
        description: "Knowledge of ML algorithms and their applications to optimization problems"
      },
      {
        icon: <Award className="w-5 h-5" />,
        title: "Hackathon Experience",
        description: "Previous participation in hackathons or collaborative coding events"
      },
      {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Research Background",
        description: "Academic or industry experience in physics, computer science, or environmental science"
      }
    ]
  };

  const mentorRequirements = {
    essential: [
      {
        icon: <Brain className="w-5 h-5" />,
        title: "Quantum Expertise",
        description: "Advanced knowledge in quantum computing, quantum algorithms, or quantum hardware"
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Mentoring Experience",
        description: "Previous experience guiding students, junior developers, or research teams"
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "Technical Leadership",
        description: "Ability to provide technical guidance and code review in quantum computing projects"
      },
      {
        icon: <Clock className="w-5 h-5" />,
        title: "Time Commitment",
        description: "Available for 8-12 hours during the hackathon weekend (flexible schedule)"
      }
    ],
    preferred: [
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Climate Tech Experience",
        description: "Background in environmental science, sustainability, or climate-related technology"
      },
      {
        icon: <Award className="w-5 h-5" />,
        title: "Industry Experience",
        description: "Professional experience at quantum computing companies or research institutions"
      },
      {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Academic Background",
        description: "PhD or advanced degree in physics, computer science, mathematics, or related field"
      },
      {
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Innovation Track Record",
        description: "Published research, patents, or successful projects in quantum computing or climate tech"
      }
    ]
  };

  const RequirementCard = ({ requirement, type }: { requirement: any, type: 'essential' | 'preferred' }) => (
    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
      type === 'essential' 
        ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-300' 
        : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300'
    }`}>
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
          type === 'essential' 
            ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white' 
            : 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
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

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-200">
            <button
              onClick={() => setActiveTab('hackers')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'hackers'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>For Hackers</span>
            </button>
            <button
              onClick={() => setActiveTab('mentors')}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'mentors'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
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
              {/* Essential Requirements */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl">
                    <CheckCircle className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Essential Requirements</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {hackerRequirements.essential.map((req, index) => (
                    <RequirementCard key={index} requirement={req} type="essential" />
                  ))}
                </div>
              </div>

              {/* Preferred Qualifications */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl">
                    <Award className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Preferred Qualifications</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {hackerRequirements.preferred.map((req, index) => (
                    <RequirementCard key={index} requirement={req} type="preferred" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mentors' && (
            <div className="space-y-12">
              {/* Essential Requirements */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl">
                    <CheckCircle className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Essential Requirements</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {mentorRequirements.essential.map((req, index) => (
                    <RequirementCard key={index} requirement={req} type="essential" />
                  ))}
                </div>
              </div>

              {/* Preferred Qualifications */}
              <div>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl">
                    <Award className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">Preferred Qualifications</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {mentorRequirements.preferred.map((req, index) => (
                    <RequirementCard key={index} requirement={req} type="preferred" />
                  ))}
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