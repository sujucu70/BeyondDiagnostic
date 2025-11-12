import React from 'react';
import { CheckCircleIcon } from './icons/FeatureIcons';

const Stats: React.FC = () => (
    <div className="mt-16">
        <h3 className="text-2xl font-bold text-center text-text-primary mb-8 font-sans">Resultados típicos de nuestros clientes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-surface p-6 rounded-lg">
                <p className="text-4xl font-bold text-primary">€280K</p>
                <p className="text-text-secondary opacity-75 mt-2">Ahorro anual promedio identificado</p>
            </div>
            <div className="bg-surface p-6 rounded-lg">
                <p className="text-4xl font-bold text-primary">23x ROI</p>
                <p className="text-text-secondary opacity-75 mt-2">Retorno vs inversión en Diagnostic</p>
            </div>
            <div className="bg-surface p-6 rounded-lg">
                <p className="text-4xl font-bold text-primary">14 días</p>
                <p className="text-text-secondary opacity-75 mt-2">Desde kick-off hasta roadmap</p>
            </div>
            <div className="bg-surface p-6 rounded-lg">
                <p className="text-4xl font-bold text-primary">85%</p>
                <p className="text-text-secondary opacity-75 mt-2">Implementan al menos 1 recomendación</p>
            </div>
        </div>
    </div>
);


const BenefitsSection: React.FC = () => {
    const unifiedBenefits = [
        {
            title: "ROI Cuantificado y Business Case Sólido",
            description: "Recibe un caso de negocio listo para presentar a dirección, con ahorros, payback y un ROI transparente."
        },
        {
            title: "Roadmap Priorizado por Impacto",
            description: "Identifica los 'quick wins' y las apuestas estratégicas basadas en datos, no en intuición ni en promesas de proveedores."
        },
        {
            title: "Visibilidad Operativa sin Precedentes",
            description: "Descubre ineficiencias y la variabilidad oculta en tus procesos, canales y skills que los promedios no muestran."
        },
        {
            title: "Benchmark Competitivo",
            description: "Entiende tu posicionamiento frente a la industria y competidores para tomar la delantera con decisiones informadas."
        },
        {
            title: "Optimización de Costes y Mejora de CSAT",
            description: "Obtén un plan para reducir costes operativos sin sacrificar (e incluso mejorando) la satisfacción del cliente."
        },
        {
            title: "De Centro de Coste a Ventaja Competitiva",
            description: "Convierte tu contact center en un motor de crecimiento y diferenciación estratégica para el negocio."
        }
    ];

    return (
        <section id="benefits" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-sans tracking-tight">
                        Toma decisiones estratégicas con datos, no conjeturas
                    </h2>
                    <p className="text-lg text-text-secondary opacity-75">
                        Nuestro análisis está diseñado para proporcionar claridad y un plan de acción concreto a toda la cúpula directiva.
                    </p>
                </div>
                <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {unifiedBenefits.map((benefit, index) => (
                         <div key={index} className="flex items-start">
                             <CheckCircleIcon className="w-8 h-8 text-primary flex-shrink-0 mr-4 mt-1" />
                             <div>
                                 <h3 className="font-bold text-text-primary text-lg">{benefit.title}</h3>
                                 <p className="text-text-secondary opacity-75">{benefit.description}</p>
                             </div>
                         </div>
                    ))}
                </div>
                <Stats />
            </div>
        </section>
    );
};

export default BenefitsSection;