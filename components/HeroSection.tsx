import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative text-white">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop" alt="Dashboard con analíticas de datos y gráficos de ROI" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-black opacity-75"></div>
      </div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 lg:py-40 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans !leading-tight tracking-tighter mb-6">
          Análisis de Readiness Agéntico para Contact Centers
        </h1>
        <h2 className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 mb-10">
          Descubre exactamente qué procesos automatizar, cuánto ahorrarás y cómo implementarlo - roadmap ejecutable en 2 semanas.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#cta" className="bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg">
            Solicitar análisis →
          </a>
          <a href="#" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors text-lg">
            Ver demo de 2 min
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;