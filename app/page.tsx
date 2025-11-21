'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <main className="min-h-screen">
        {/* Hero Section - Inicio */}
        <section
          id="inicio"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white pt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Universidad de Colima
              <span className="block text-green-600 mt-2">X Protección Civil</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Trabajando juntos por la seguridad y bienestar de nuestra comunidad universitaria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('sobre-nosotros');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors font-medium text-lg"
              >
                Conoce Más
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-green-600 px-8 py-3 rounded-md border-2 border-green-600 hover:bg-green-50 transition-colors font-medium text-lg"
              >
                Contáctanos
              </button>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-green-600 text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Educación</h3>
                <p className="text-gray-600">
                  Programas de capacitación en prevención y respuesta ante emergencias
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-green-600 text-4xl mb-4">🚨</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Prevención</h3>
                <p className="text-gray-600">
                  Protocolos de seguridad para mantener protegida a nuestra comunidad
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-green-600 text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Colaboración</h3>
                <p className="text-gray-600">
                  Trabajo conjunto entre la universidad y protección civil
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nosotros Section */}
        <section id="sobre-nosotros" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra Historia</h3>
                <p className="text-gray-600 mb-4">
                  La Universidad de Colima, en colaboración con Protección Civil, ha establecido
                  una alianza estratégica para garantizar la seguridad y el bienestar de toda
                  la comunidad universitaria.
                </p>
                <p className="text-gray-600 mb-4">
                  Desde nuestra fundación, hemos trabajado incansablemente para desarrollar
                  protocolos de seguridad, programas de capacitación y sistemas de respuesta
                  ante emergencias que protejan a estudiantes, profesores y personal administrativo.
                </p>
                <p className="text-gray-600">
                  Nuestro compromiso es crear un ambiente seguro donde la educación y el
                  desarrollo académico puedan florecer sin preocupaciones de seguridad.
                </p>
              </div>

              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Nuestros Valores</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Seguridad</h4>
                      <p className="text-gray-600">Prioridad máxima en todas nuestras acciones</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Prevención</h4>
                      <p className="text-gray-600">Anticiparnos a los riesgos potenciales</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Compromiso</h4>
                      <p className="text-gray-600">Dedicación total al servicio de la comunidad</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Profesionalismo</h4>
                      <p className="text-gray-600">Excelencia en cada intervención</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="py-20 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto"></div>
              <p className="text-gray-600 mt-4 text-lg">
                Estamos aquí para ayudarte. Contáctanos en caso de emergencia o dudas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envíanos un Mensaje</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-gray-700 font-medium mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="tu@correo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Tu mensaje aquí..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="text-green-600 text-2xl mr-4">📍</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Dirección</h4>
                      <p className="text-gray-600">
                        Av. Universidad 333<br />
                        Col. Las Víboras<br />
                        Colima, Colima, México
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="text-green-600 text-2xl mr-4">📞</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Teléfono</h4>
                      <p className="text-gray-600">
                        Emergencias: 911<br />
                        Oficina: (312) 316-1000<br />
                        Protección Civil: (312) 316-1234
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="text-green-600 text-2xl mr-4">✉️</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Correo Electrónico</h4>
                      <p className="text-gray-600">
                        contacto@ucol.mx<br />
                        proteccion.civil@ucol.mx
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="text-green-600 text-2xl mr-4">⏰</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Horario</h4>
                      <p className="text-gray-600">
                        Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                        Emergencias: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Universidad de Colima X Protección Civil</h3>
              <p className="text-gray-400 mb-4">
                Trabajando juntos por tu seguridad
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Instagram
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                © 2025 Universidad de Colima. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
