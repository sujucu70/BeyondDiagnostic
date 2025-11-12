import React from 'react';

const ProcessArrow: React.FC = () => (
    <div className="text-brand-gray-medium transform rotate-90 md:rotate-0 my-4 md:my-0">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    </div>
);

const DeliverablesSection: React.FC = () => {
    const deliverables = [
        { title: "Beyond CX Heatmap™ (Visual interactivo)", description: "Mapa de calor con código de colores mostrando Readiness Agéntico por skill/proceso" },
        { title: "Opportunity Matrix (Priorización)", description: "Gráfico de burbujas: Impacto vs Factibilidad, con tamaño = Ahorro €" },
        { title: "Economic Model (Business case)", description: "Comparativa AS-IS vs TO-BE con ahorro anual cuantificado y payback period" },
        { title: "Benchmark Report (Contexto competitivo)", description: "Tus KPIs vs promedios de industria y best-in-class" },
        { title: "Implementation Roadmap (Plan de acción)", description: "Fases Automate → Assist → Augment con timeline, recursos e inversión" },
        { title: "Informe Completo y Presentación Ejecutiva", description: "Documento detallado con hallazgos y un walkthrough estratégico personalizado." },
    ];

    return (
        <section id="deliverables" className="py-16 md:py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-sans tracking-tight">
                        Qué recibes al final del análisis
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-10 mt-12 max-w-5xl mx-auto">
                    {deliverables.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/20 text-primary font-bold text-xl flex items-center justify-center rounded-full mr-5">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="font-bold text-text-primary text-lg">{item.title}</h3>
                                <p className="text-text-secondary opacity-75">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto mt-8">
                    <p className="text-sm text-text-secondary opacity-75 text-center md:text-left italic">
                        *La disponibilidad de los entregables puede variar según el plan seleccionado.
                    </p>
                </div>

                {/* Process Visualization */}
                <div className="mt-16 max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-brand-gray-medium/50 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-4 text-text-primary text-center">
                            
                            {/* Step 1: Heatmap Analysis */}
                            <div className="w-full md:w-1/3">
                                <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-text-secondary opacity-75">Heatmap Analysis</h3>
                                <div className="p-4 bg-surface rounded-lg border border-brand-gray-medium/50 aspect-square max-w-[220px] mx-auto flex items-center justify-center">
                                    <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-2">
                                        {[70, 40, 30, 80, 50, 90, 20, 40, 100, 60, 30, 50, 40, 20, 80, 60].map((opacity, i) => (
                                            <div key={i} className="rounded-sm" style={{backgroundColor: `rgba(109, 132, 227, ${opacity/100})`}}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <ProcessArrow />

                            {/* Step 2: Opportunity Matrix */}
                            <div className="w-full md:w-1/3">
                                <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-text-secondary opacity-75">Opportunity Matrix</h3>
                                <div className="p-4 bg-surface rounded-lg border border-brand-gray-medium/50 aspect-square max-w-[220px] mx-auto flex items-center justify-center">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <line x1="10" y1="90" x2="10" y2="10" stroke="#B1B1B0" strokeWidth="1" />
                                        <line x1="10" y1="90" x2="90" y2="90" stroke="#B1B1B0" strokeWidth="1" />
                                        <line x1="15" y1="85" x2="85" y2="15" stroke="#B1B1B0" strokeWidth="1" strokeDasharray="2" />
                                        <circle cx="25" cy="65" r="3" fill="#6D84E3" />
                                        <circle cx="35" cy="50" r="3" fill="#6D84E3" />
                                        <circle cx="45" cy="55" r="3" fill="#6D84E3" />
                                        <circle cx="55" cy="35" r="3" fill="#6D84E3" />
                                        <circle cx="65" cy="45" r="3" fill="#6D84E3" />
                                        <circle cx="75" cy="25" r="3" fill="#6D84E3" />
                                        <circle cx="40" cy="75" r="3" fill="#6D84E3" />
                                        <circle cx="60" cy="70" r="3" fill="#6D84E3" />
                                        <text x="50" y="98" textAnchor="middle" fill="#3F3F3F" fontSize="6" className="opacity-75">Impacto</text>
                                        <text x="5" y="50" textAnchor="middle" transform="rotate(-90 5 50)" fill="#3F3F3F" fontSize="6" className="opacity-75">Factibilidad</text>
                                    </svg>
                                </div>
                            </div>
                            
                            <ProcessArrow />

                            {/* Step 3: Roadmap */}
                            <div className="w-full md:w-1/3">
                                <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-text-secondary opacity-75">Roadmap 3 Phases</h3>
                                <div className="p-4 bg-surface rounded-lg border border-brand-gray-medium/50 aspect-square max-w-[220px] mx-auto flex flex-col items-center justify-center gap-3">
                                    <div className="w-full text-center py-2 border border-primary rounded-lg bg-primary/20 text-primary font-semibold">Automate</div>
                                    <svg className="w-4 h-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                    <div className="w-full text-center py-2 border border-primary/70 rounded-lg bg-primary/10 text-text-primary">Assist</div>
                                     <svg className="w-4 h-4 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                    <div className="w-full text-center py-2 border border-primary/70 rounded-lg bg-primary/10 text-text-primary">Augment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DeliverablesSection;