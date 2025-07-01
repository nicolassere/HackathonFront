import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Quantum 2025",
      description: "Leading quantum computing conference",
      url: "https://quantum2025.org/es/"
    },
    {
      name: "Open Quantum Institute CERN",
      description: "Advancing quantum technology for humanity",
      url: "https://open-quantum-institute.cern/"
    },
    {
      name: "RIPAL ISC",
      description: "Latin American network for scientific computing",
      url: "https://www.ripaisc.net/"
    },
    {
      name: "CLEI",
      description: "Latin American Center for Informatics Studies",
      url: "https://clei.org/"
    }
  ];

  return (
    <section id="partners" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Partners & Supporters
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            This hackathon is made possible through collaboration with leading organizations 
            in quantum computing, climate research, and technology education.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 hover:border-blue-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                  <span className="text-2xl font-bold text-blue-600">{partner.name[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-sm text-slate-600">{partner.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Universidad de Montevideo Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Hosted by Universidad de Montevideo</h3>
            <p className="text-xl text-blue-100 mb-6">
              UM is committed to advancing quantum computing education and research in Latin America, 
              fostering innovation at the intersection of technology and environmental sustainability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://www.um.edu.uy/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Visit UM Website
              </a>
              <a
                href="https://www.linkedin.com/in/facultad-de-ingenier%C3%ADa-a7935758/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;