import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold text-slate-900">Quantum LATAM 2025</h1>
              <p className="text-sm text-slate-600">Universidad de Montevideo</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#event-info" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Event Info
            </a>
            <a href="#registration" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Registration
            </a>
            <a href="#partners" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Partners
            </a>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-slate-500" />
              <select className="text-sm bg-transparent border-none text-slate-700 font-medium cursor-pointer">
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <a href="#event-info" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Event Info
              </a>
              <a href="#registration" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Registration
              </a>
              <a href="#partners" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Partners
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;