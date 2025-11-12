import React from 'react';

const ArrowIcon: React.FC = () => (
    <svg className="w-8 h-8 md:w-12 md:h-12 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


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
        
        {/* Visual Process Flow */}
        <div className="mt-12 md:mt-20 max-w-6xl mx-auto p-4 md:p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 md:gap-8">
            
            {/* Step 1: Heatmap Analysis */}
            <div className="flex flex-col items-center col-span-1">
              <h4 className="font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">Heatmap Analysis</h4>
              <div className="w-full max-w-[200px] aspect-[4/3] bg-gray-900/30 p-2 rounded-lg border border-white/10 flex text-[9px] text-white/70 font-mono">
                <div className="flex flex-col justify-around text-right pr-2 w-1/4">
                    <span>Ventas</span><span>Soporte</span><span>Admin</span><span>IT</span>
                </div>
                <div className="grid grid-cols-4 grid-rows-4 gap-px flex-1">
                    <div className="bg-blue-400 opacity-90"></div><div className="bg-blue-600 opacity-90"></div><div className="bg-blue-300 opacity-90"></div><div className="bg-blue-500 opacity-90"></div>
                    <div className="bg-blue-700 opacity-90"></div><div className="bg-blue-900 opacity-90"></div><div className="bg-blue-600 opacity-90"></div><div className="bg-blue-800 opacity-90"></div>
                    <div className="bg-blue-900 opacity-90"></div><div className="bg-blue-800 opacity-90"></div><div className="bg-blue-900 opacity-90"></div><div className="bg-blue-700 opacity-90"></div>
                    <div className="bg-blue-500 opacity-90"></div><div className="bg-blue-400 opacity-90"></div><div className="bg-blue-600 opacity-90"></div><div className="bg-blue-500 opacity-90"></div>
                </div>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex justify-center items-center col-span-1"> <ArrowIcon /> </div>
            <div className="md:hidden text-3xl font-thin text-white/60">↓</div>


            {/* Step 2: Opportunity Matrix */}
            <div className="flex flex-col items-center col-span-1">
              <h4 className="font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">Opportunity Matrix</h4>
              <div className="w-full max-w-[200px] aspect-[4/3] bg-gray-900/30 p-2 rounded-lg border border-white/10 relative">
                <div className="absolute bottom-4 left-4 w-[calc(100%-1.25rem)] h-px bg-white/20"></div>
                <div className="absolute bottom-4 left-4 h-[calc(100%-1.25rem)] w-px bg-white/20"></div>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-white/60 font-mono">Impacto</span>
                <span className="absolute bottom-1/2 -left-2.5 -translate-y-1/2 rotate-[-90deg] text-[8px] text-white/60 font-mono">Factibilidad</span>
                <div className="absolute top-[55%] left-[15%] w-[70%] h-px bg-transparent border-t border-dashed border-white/40 transform -rotate-45"></div>
                <div className="absolute w-2 h-2 bg-primary rounded-full" style={{top: '20%', left: '70%'}}></div>
                <div className="absolute w-2 h-2 bg-primary rounded-full" style={{top: '35%', left: '40%'}}></div>
                <div className="absolute w-2 h-2 bg-primary rounded-full" style={{top: '70%', left: '60%'}}></div>
                <div className="absolute w-2 h-2 bg-primary rounded-full" style={{top: '65%', left: '25%'}}></div>
                <div className="absolute w-2 h-2 bg-primary rounded-full" style={{top: '15%', left: '55%'}}></div>
                <div className="absolute w-2 h-2 bg-primary rounded-full" style={{top: '45%', left: '80%'}}></div>
                <div className="absolute w-2 h-2 bg-primary rounded-full" style={{top: '75%', left: '45%'}}></div>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex justify-center items-center col-span-1"> <ArrowIcon /> </div>
            <div className="md:hidden text-3xl font-thin text-white/60">↓</div>

            {/* Step 3: Roadmap */}
            <div className="flex flex-col items-center col-span-1">
              <h4 className="font-semibold text-xs md:text-sm tracking-wider uppercase mb-3">Roadmap 3 Phases</h4>
               <div className="w-full max-w-[200px] aspect-[4/3] flex flex-col justify-center items-center gap-2">
                  <div className="w-[85%] text-center py-2 rounded-md border-2 border-primary bg-primary/20">
                      <span className="text-white font-semibold text-xs tracking-wide">Automate</span>
                  </div>
                  <div className="text-primary/80 h-3 leading-none text-2xl font-thin">↓</div>
                  <div className="w-[85%] text-center py-2 rounded-md border border-primary/70">
                      <span className="text-white/90 font-semibold text-xs tracking-wide">Assist</span>
                  </div>
                  <div className="text-primary/60 h-3 leading-none text-2xl font-thin">↓</div>
                  <div className="w-[85%] text-center py-2 rounded-md border border-primary/40">
                      <span className="text-white/80 font-semibold text-xs tracking-wide">Augment</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;