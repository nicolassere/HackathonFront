import React from 'react';
import { Mail, MapPin, Globe, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Event Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hackathon LATAM 2025</h3>
            <p className="text-slate-300 mb-4">
              The premier quantum computing hackathon focused on climate solutions in Latin America.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>October 1-3, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Universidad de Montevideo</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#event-info" className="hover:text-blue-400 transition-colors">
                  Event Information
                </a>
              </li>
              <li>
                <a href="#registration" className="hover:text-blue-400 transition-colors">
                  Registration
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-blue-400 transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a 
                  href="https://qworld.net/oqi-hackathon-course/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Preparation Course
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a 
                  href="https://quantum2025.org/es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Quantum 2025
                </a>
              </li>
              <li>
                <a 
                  href="https://open-quantum-institute.cern/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Open Quantum Institute
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ripaisc.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  RIPAL ISC
                </a>
              </li>
              <li>
                <a 
                  href="https://clei.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  CLEI
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:qhl@um.edu.uy"
                className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>qhl@um.edu.uy</span>
              </a>
              <a 
                href="https://www.um.edu.uy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Universidad de Montevideo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>
            © 2025 Universidad de Montevideo. All rights reserved. | 
            <span className="ml-1">
              <a href="/quantum_hackathon/EN" className="hover:text-blue-400 transition-colors">
                English Version
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;