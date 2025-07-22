import React from 'react';
import { Mail, MapPin, Globe, Calendar, Instagram, Linkedin} from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Event Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.title')}</h3>
            <p className="text-slate-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{t('footer.date')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quicklinks')}</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#event-info" className="hover:text-blue-400 transition-colors">
                  {t('footer.eventinfo')}
                </a>
              </li>
              <li>
                <a href="#requirements" className="hover:text-blue-400 transition-colors">
                  {t('footer.requirements')}
                </a>
              </li>
              <li>
                <a href="#inscripcion" className="hover:text-blue-400 transition-colors">
                  {t('footer.registration')}
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-blue-400 transition-colors">
                  {t('footer.partners')}
                </a>
              </li>
              <li>
                <a
                  href="https://qworld.net/oqi-hackathon-course/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('footer.course')}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.resources')}</h4>
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
                  href="https://www.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Microsoft
                </a>
              </li>
                <li>
                <a
                  href="https://www.quantum.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Quantum IEEE
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contactFollow')}</h4>
            <div className="space-y-3 mb-6">
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
                <span>{t('footer.location')}</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div>
              <h5 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">{t('footer.followUs')}</h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/quantumhackathonlatam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/facultad-de-ingenier%C3%ADa-a7935758/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800 hover:bg-blue-600 p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://vm.tiktok.com/ZMSbUJ3J1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800 hover:bg-black p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                  aria-label="Follow us on TikTok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>
            {t('footer.rights')} 
            <span className="ml-1">
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;