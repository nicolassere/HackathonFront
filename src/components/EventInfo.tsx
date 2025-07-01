import React from 'react';
import { Clock, Target, Award, BookOpen } from 'lucide-react';

const EventInfo: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Climate Impact",
      description: "Develop quantum computing solutions to address real-world climate challenges and environmental sustainability."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "72 Hours",
      description: "Three intensive days of collaboration, innovation, and breakthrough quantum algorithm development."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Global Recognition",
      description: "Compete for prizes and recognition in the largest quantum hackathon in Latin America."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning Track",
      description: "Access to quantum computing courses and mentorship from industry experts throughout the event."
    }
  ];

  return (
    <section id="event-info" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Quantum Computing for Climate Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join the largest quantum computing hackathon in Latin America, where cutting-edge technology meets climate action. 
            Collaborate with experts to develop quantum solutions for environmental challenges.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Event Timeline</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Day 1 - October 1</h4>
              <p className="text-slate-600">Opening ceremony, team formation, and challenge presentation</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Day 2 - October 2</h4>
              <p className="text-slate-600">Intensive development, mentorship sessions, and progress check-ins</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Day 3 - October 3</h4>
              <p className="text-slate-600">Final presentations, judging, and awards ceremony</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;