import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Open Quantum Institute",
      description: "CERN's initiative advancing quantum technology for humanity",
      url: "https://open-quantum-institute.cern/",
      logo: "https://hackathon.nyuad.nyu.edu/wp-content/uploads/2025/02/OQI-Logo-2.png"
    },
    {
      name: "Quantum 2025",
      description: "Leading quantum computing conference",
      url: "https://quantum2025.org/es/",
      logo: "https://quantum2025.org/wp-content/uploads/2024/12/IYQST-horiz-rgb.png"
    },
    {
      name: "IEEE Region 9",
      description: "IEEE Latin America and Caribbean",
      url: "https://r9.ieee.org/",
      logo: "https://r9.ieee.org/wp-content/uploads/2022/04/20-DCI-335-Region9ALT_Identifier_RGB_Color-Horizontal.png"
    }
  ];

  const supporters = [
    {
      name: "CLEI",
      description: "Latin American Center for Informatics Studies",
      url: "https://clei.org/",
      logo: "img/CLEI2025.png"
    },
    {
      name: "RIPAISAC",
      description: "Latin American Network for High Performance Computing",
      url: "https://www.ripaisc.net/",
      logo: "https://media.licdn.com/dms/image/sync/v2/D4D27AQHA7f1pjl_03A/articleshare-shrink_800/articleshare-shrink_800/0/1742373478918?e=2147483647&v=beta&t=bQNRl6jwvZNLgcwRpM7caDelgHedZw4QRtJvK-GZPxA"
    },
  ];

  return (
      <section id="partners" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Collaborators
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              This hackathon is made possible through collaboration with leading organizations
              in quantum computing, climate research, and technology education.
            </p>
          </div>

          {/* Strategic Partners Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Strategic Partners</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
              {partners.map((partner, index) => (
                  <a
                      key={index}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transition-all duration-300 transform hover:scale-110"
                      title={partner.description}
                  >
                    <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-16 w-auto max-w-[200px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'h-16 w-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold';
                          fallback.textContent = partner.name;
                          target.parentNode?.appendChild(fallback);
                        }}
                    />
                  </a>
              ))}
            </div>
          </div>

          {/* Academic Supporters Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Academic Supporters</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
              {supporters.map((supporter, index) => (
                  <a
                      key={index}
                      href={supporter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transition-all duration-300 transform hover:scale-110"
                      title={supporter.description}
                  >
                    <img
                        src={supporter.logo}
                        alt={`${supporter.name} logo`}
                        className="h-16 w-auto max-w-[200px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'h-16 w-32 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center text-green-600 font-semibold';
                          fallback.textContent = supporter.name;
                          target.parentNode?.appendChild(fallback);
                        }}
                    />
                  </a>
              ))}
            </div>
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