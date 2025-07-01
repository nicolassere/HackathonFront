import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full h-[90vh] overflow-hidden">
      <img
        src="/hero-quantum.png" 
        alt="Quantum LATAM Hero"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default Hero;
