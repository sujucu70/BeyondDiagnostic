import React from 'react';
import { CheckCircleIcon, ShieldCheckIcon } from './icons/FeatureIcons';

const PricingSection: React.FC = () => {
    const includedFeatures = [
        "Análisis completo de 8 dimensiones",
        "Metodología de percentiles avanzados",
        "Benchmarking vs industria",
        "Roadmap ejecutable con ROI",
        "Presentación ejecutiva 60 min",
        "Report completo PDF",
        "2 semanas de entrega",
    ];

    return (
        <section id="pricing" className="py-16 md:py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-sans tracking-tight">
                        Inversión y garantía
                    </h2>
                </div>
                <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-brand-gray-medium/50 overflow-hidden">
                    <div className="p-8 md:p-12">
                        <p className="text-6xl font-bold text-text-primary text-center">€2,500</p>
                        <p className="text-text-secondary opacity-75 text-center mt-2">(IVA no incluido)</p>
                        
                        <ul className="mt-8 space-y-4">
                            {includedFeatures.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <CheckCircleIcon className="w-6 h-6 text-primary mr-3"/>
                                    <span className="text-text-secondary opacity-75">{feature}</span>
                                 </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-primary/10 p-8 border-t border-primary/20">
                        <div className="flex items-center">
                            <ShieldCheckIcon className="w-12 h-12 text-primary mr-4 flex-shrink-0"/>
                            <div>
                                <h3 className="text-xl font-bold text-primary font-sans">100% REEMBOLSABLE</h3>
                                <p className="text-text-primary opacity-75 mt-1">
                                    Si contratas cualquier Beyond Product en los próximos 90 días, descontamos el 100% del coste del Diagnostic de tu primera factura.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 md:p-12 text-center">
                        <p className="text-lg font-semibold text-text-primary mb-6">Tu análisis te sale gratis si decides implementar con nosotros.</p>
                        <a href="#cta" className="w-full sm:w-auto inline-block bg-primary text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-700 transition-colors text-lg">
                            Solicitar mi Diagnostic →
                        </a>
                        <p className="text-sm text-text-secondary opacity-75 mt-4">Pago único por transferencia. Incluye NDA y acuerdo de confidencialidad.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;