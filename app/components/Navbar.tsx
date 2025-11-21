'use client';

import { useState } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-green-600">
              UdeC X Protección Civil
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('sobre-nosotros')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Contacto
            </button>
            <button
              onClick={onLoginClick}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              Iniciar Sesión
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('sobre-nosotros')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors font-medium"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors font-medium"
            >
              Contacto
            </button>
            <button
              onClick={onLoginClick}
              className="block w-full text-left px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
