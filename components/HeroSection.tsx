import React from 'react';

const ScrollDownIcon: React.FC = () => (
    <svg className="w-8 h-8 text-white/50 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
);

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative text-white overflow-hidden bg-gradient-to-b from-brand-gray-dark to-brand-black">
        <div className="relative container mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48 text-center z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans !leading-tight mb-6">
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

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <ScrollDownIcon />
            </div>
        </div>
    </section>
  );
};

export default HeroSection;