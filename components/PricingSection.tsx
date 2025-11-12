import React from 'react';
import { CheckCircleIcon, ShieldCheckIcon } from './icons/FeatureIcons';

const tiers = [
    {
        name: "Express",
        subtitle: "Para empezar sin datos previos",
        price: "€1.950",
        description: "Ideal para operaciones sin datos estructurados, basado en análisis cualitativo y entrevistas.",
        features: [
            "Análisis cualitativo",
            "Identificación de pain points clave",
            "Mapa de oportunidades general",
            "Recomendaciones estratégicas de alto nivel",
            "Presentación de hallazgos",
        ],
        isMostPopular: false,
    },
    {
        name: "Standard",
        subtitle: "El estándar data-driven",
        price: "€4.950",
        description: "El análisis cuantitativo completo para tomar decisiones basadas en datos duros de tu operación.",
        features: [
            "Análisis cuantitativo de KPIs (percentiles P10-P90)",
            "Agentic Readiness Score por proceso",
            "Beyond CX Heatmap™ interactivo",
            "Opportunity Matrix (Impacto vs Factibilidad)",
            "Economic Model & Business Case (ROI)",
            "Benchmark Report vs Industria",
            "Implementation Roadmap detallado",
        ],
        isMostPopular: true,
    },
    {
        name: "Deep AI",
        subtitle: "Insights con IA",
        price: "€8.950",
        description: "Análisis conversacional con IA (grabaciones/transcripciones) para descubrir el 'porqué' detrás de los datos.",
        features: [
            "Todo en Standard, más:",
            "Análisis de conversaciones con IA",
            "Detección de tópicos y sentimiento del cliente",
            "Análisis de 'dead-air' y script-adherence",
            "Voice of Customer & Agent Insights",
            "Dashboard de análisis conversacional",
        ],
        isMostPopular: false,
    }
];

const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="py-16 md:py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-sans tracking-tight">
                        Una inversión estratégica en tu CX
                    </h2>
                    <p className="text-lg text-text-secondary opacity-75 mb-12">
                        Elige el plan que mejor se adapte a la disponibilidad de tus datos y a tus objetivos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {tiers.map((tier) => (
                        <div key={tier.name} className={`
                            bg-white rounded-2xl shadow-lg border flex flex-col
                            ${tier.isMostPopular ? 'border-primary border-2' : 'border-brand-gray-medium/50'}
                        `}>
                            {tier.isMostPopular && (
                                <div className="bg-primary text-white text-center py-2 font-bold rounded-t-xl -mt-px">
                                    Más Popular
                                </div>
                            )}
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-primary font-sans">{tier.name}</h3>
                                <p className="text-text-secondary opacity-75 mt-1">{tier.subtitle}</p>
                                <p className="text-5xl font-bold text-text-primary mt-6">{tier.price}</p>
                                <p className="text-text-secondary opacity-75 text-sm mt-1">(IVA no incluido)</p>
                                <p className="min-h-[6rem] mt-4 text-text-secondary opacity-80">{tier.description}</p>
                                <ul className="mt-8 space-y-4 flex-grow">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <CheckCircleIcon className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"/>
                                            <span className="text-text-secondary opacity-75">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#cta" className={`w-full block text-center font-bold mt-8 py-3 px-6 rounded-lg transition-colors text-lg
                                    ${tier.isMostPopular ? 'bg-primary text-white hover:bg-blue-700' : 'bg-surface text-primary hover:bg-primary/20'}
                                `}>
                                    Solicitar {tier.name} →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-brand-gray-medium/50 overflow-hidden">
                     <div className="bg-primary/10 p-8">
                        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                            <ShieldCheckIcon className="w-16 h-16 text-primary mr-0 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0"/>
                            <div>
                                <h3 className="text-xl font-bold text-primary font-sans">GARANTÍA DE RIESGO CERO: 100% REEMBOLSABLE</h3>
                                <p className="text-text-primary opacity-75 mt-1">
                                    Si contratas cualquier Beyond Product para implementar las recomendaciones en los próximos 90 días, descontamos el 100% del coste del Diagnostic de tu primera factura. <strong>Tu análisis te sale gratis.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingSection;