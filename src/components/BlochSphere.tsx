import React, { useEffect, useRef, useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

const BlochSphere = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };

    iframe.addEventListener('load', handleLoad);
    iframe.addEventListener('error', handleError);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      iframe.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <section id="bloch-sphere" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Explora la
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Esfera de Bloch
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Interactúa con una visualización 3D de la esfera de Bloch para comprender mejor 
            los conceptos fundamentales de la computación cuántica que aplicarás en el hackathon.
          </p>
        </div>

        {/* Interactive Bloch Sphere Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="relative">
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-2xl z-10">
                <div className="text-center">
                  <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">Cargando simulación cuántica...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-2xl z-10">
                <div className="text-center">
                  <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">Error al cargar la simulación</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Reintentar
                  </button>
                </div>
              </div>
            )}

            {/* Iframe */}
            <iframe
              ref={iframeRef}
              src="/BlochSphere/main.html"
              width="100%"
              height="600"
              style={{ border: 'none', borderRadius: '1rem' }}
              title="Simulación Interactiva de la Esfera de Bloch"
              className="w-full rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Instructions */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Arrastra para rotar</h3>
              <p className="text-slate-300 text-sm">Usa el mouse para rotar la esfera y explorar diferentes perspectivas</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Aplica operadores</h3>
              <p className="text-slate-300 text-sm">Experimenta con las compuertas cuánticas X, Y, Z, H, S y T</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Realiza mediciones</h3>
              <p className="text-slate-300 text-sm">Observa cómo colapsa el estado cuántico al medir en diferentes bases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlochSphere;