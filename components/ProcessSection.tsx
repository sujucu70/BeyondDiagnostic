import React from 'react';

const ProcessSection: React.FC = () => {
    const steps = [
        { day: "0", title: "KICK-OFF (30 min)", description: "Call de discovery para entender contexto, objetivos y restricciones. Acordamos alcance y firmamos NDA." },
        { day: "1-7", title: "DATA COLLECTION", description: "Solicitud de datos históricos (6-12 meses). Te asistimos en la extracción si es necesario. Validación de calidad de datos." },
        { day: "8-12", title: "ANÁLISIS PROFUNDO", description: "Procesamiento con nuestros algoritmos. Generación de Heatmap y Opportunity Matrix. Cálculo de Economic Model y Benchmark." },
        { day: "13", title: "PREPARACIÓN DE ENTREGABLES", description: "Creación del Full Report y presentación ejecutiva. Review interno de calidad." },
        { day: "14", title: "PRESENTACIÓN EJECUTIVA", description: "Walkthrough de hallazgos (60-90 min). Q&A estratégico con stakeholders. Discusión de próximos pasos." }
    ];

    return (
        <section id="process" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16 font-sans tracking-tight">
                        Cómo funciona: De solicitud a roadmap en 14 días
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* The timeline line */}
                    <div className="absolute top-0 left-4 md:left-1/2 w-1 bg-brand-gray-medium/30 h-full transform md:-translate-x-1/2"></div>
                    
                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Dot on the timeline */}
                                <div className="absolute top-1 left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-md">
                                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                                </div>
                                
                                {/* Content Card */}
                                <div className={`
                                    ml-12 md:ml-0
                                    md:w-5/12
                                    p-6 bg-white rounded-xl shadow-lg border border-brand-gray-medium/20
                                    relative
                                    ${index % 2 !== 0 ? 'md:ml-[58.3333%]' : 'md:text-right'}
                                `}>
                                    {/* Arrow Pointer for Desktop */}
                                    <div className={`
                                        hidden md:block
                                        absolute top-3 w-4 h-4 bg-white border-brand-gray-medium/20 transform rotate-45 
                                        ${index % 2 !== 0 ? '-left-2 border-b-0 border-r-0' : '-right-2 border-t-0 border-l-0'}
                                    `}></div>

                                    <h3 className="text-lg font-bold text-primary font-sans">DÍA {step.day}</h3>
                                    <p className="font-bold mt-1 text-text-primary">{step.title}</p>
                                    <p className="text-text-secondary opacity-75 mt-2">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;