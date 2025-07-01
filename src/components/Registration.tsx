import React from 'react';
import { Users, UserPlus, ExternalLink, Mail } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <section id="registration" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join the Quantum Revolution
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Whether you're a participant or want to mentor the next generation of quantum developers, 
            we have a place for you in this groundbreaking event.
          </p>
        </div>

        {/* Registration Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Participant Registration */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-2xl mb-6">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Participant Registration</h3>
              <p className="text-blue-100 mb-6">
                Ready to tackle climate challenges with quantum computing? Join teams from across Latin America 
                in this exciting 72-hour hackathon.
              </p>
              <a
                href="https://forms.gle/8NAtRCLmFr4eq6xy8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Register as Participant
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          {/* Mentor Registration */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl mb-6">
                <UserPlus className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Become a Mentor</h3>
              <p className="text-blue-100 mb-6">
                Share your expertise in quantum computing, climate science, or technology development. 
                Guide the next generation of quantum innovators.
              </p>
              <a
                href="https://forms.gle/8NAtRCLmFr4eq6xy8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Register as Mentor
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Preparation Resources</h3>
            <p className="text-blue-100 mb-6">
              Get ready for the hackathon with our quantum computing preparation course and learning materials.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://qworld.net/oqi-hackathon-course/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                QWorld Course
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href="mailto:qhl@um.edu.uy"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;