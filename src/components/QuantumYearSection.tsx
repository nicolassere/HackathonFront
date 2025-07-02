import React from 'react';

const QuantumYearSection = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-400"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-orange-400"></div>
                <div className="absolute top-40 right-1/4 w-16 h-16 rounded-full bg-yellow-400"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* UNESCO/Quantum Year Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex items-center space-x-4 bg-white/80 px-6 py-3 rounded-2xl border border-amber-200 shadow-lg">
                            <span className="text-2xl">⚛️</span>
                            <span className="text-amber-800 font-bold text-lg">2025</span>
                            <span className="text-2xl">🌍</span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                        2025 - Año Internacional de la Ciencia y Tecnología Cuántica
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text Content */}
                    <div className="space-y-8">
                        {/* Main Description Card */}
                        <div className="bg-white/90 rounded-3xl p-8 border border-amber-200 shadow-xl">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center">
                                    <span className="text-white text-2xl">🏆</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Quantum Hackathon LATAM 2025
                                </h3>
                            </div>

                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong className="text-green-600">Quantum Hackathon LATAM 2025</strong> es una iniciativa de la
                                Universidad de Montevideo, organizada en colaboración con el Open Quantum Institute (CERN),
                                como parte de las actividades para el Año Internacional de la Ciencia y Tecnología Cuántica,
                                declarado por UNESCO para 2025.
                            </p>
                        </div>

                        {/* Organizations Highlights */}
                        <div className="grid md:grid-cols-3 gap-4">

                            <a href="https://quantum2025.org" target="_blank" rel="noopener noreferrer"
                               className="bg-white/80 rounded-2xl p-6 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center mb-4 h-16">
                                    <img
                                        src="https://quantum2025.org/wp-content/uploads/2024/12/IYQST-horiz-rgb.png"
                                        alt="UNESCO 2025"
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            </a>


                            <a href="https://open-quantum-institute.cern" target="_blank" rel="noopener noreferrer"
                               className="bg-white/80 rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center mb-4 h-16">
                                    <img
                                        src="https://hackathon.nyuad.nyu.edu/wp-content/uploads/2025/02/OQI-Logo-2.png"
                                        alt="Open Quantum Institute"
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            </a>


                            <a href="https://www.um.edu.uy" target="_blank" rel="noopener noreferrer"
                               className="bg-white/80 rounded-2xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="flex items-center justify-center mb-4 h-16">
                                    <img
                                        src="https://www.um.edu.uy/themes/custom/um/images/logo.png"
                                        alt="Universidad de Montevideo"
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right side - Uruguay Image Placeholder */}
                    <div className="space-y-6">
                        {/* Main Image Container */}
                        <div className="relative">
                            <div className="bg-white/90 rounded-3xl p-6 border border-amber-200 shadow-xl">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                                    🇺🇾 Uruguay
                                </h3>

                                <div className="aspect-video bg-gradient-to-br from-green-100 via-blue-100 to-green-200 rounded-2xl border-2 border-dashed border-green-300 flex flex-col items-center justify-center text-center p-8 hover:bg-gradient-to-br hover:from-green-200 hover:via-blue-200 hover:to-green-300 transition-all duration-300">
                                    <div className="text-6xl mb-4">🏞️</div>
                                    <p className="text-slate-600 text-lg font-medium">
                                        Aquí irá una hermosa foto de Uruguay
                                    </p>
                                    <p className="text-slate-500 text-sm mt-2">
                                        (Espacio reservado para imagen)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Card */}
                        <div className="bg-white/80 rounded-2xl p-6 border border-amber-200 shadow-lg">
                            <div className="text-center">
                                <h4 className="font-bold text-slate-900 mb-2">Sede del Evento</h4>
                                <p className="text-slate-700">Montevideo, Uruguay</p>
                                <div className="flex items-center justify-center mt-3 space-x-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-white border-2 border-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuantumYearSection;