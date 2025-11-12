import React from 'react';
import { DocumentCheckIcon } from './icons/FeatureIcons';

const DeliverablesSection: React.FC = () => {
    const deliverables = [
        { title: "Beyond CX Heatmap™ (Visual interactivo)", description: "Mapa de calor con código de colores mostrando Readiness Agéntico por skill/proceso" },
        { title: "Opportunity Matrix (Priorización)", description: "Gráfico de burbujas: Impacto vs Factibilidad, con tamaño = Ahorro €" },
        { title: "Economic Model (Business case)", description: "Comparativa AS-IS vs TO-BE con ahorro anual cuantificado y payback period" },
        { title: "Benchmark Report (Contexto competitivo)", description: "Tus KPIs vs promedios de industria y best-in-class" },
        { title: "Implementation Roadmap (Plan de acción)", description: "Fases Automate → Assist → Augment con timeline, recursos e inversión" },
        { title: "Executive Presentation (60 min)", description: "Walkthrough personalizado de hallazgos con Q&A estratégico" },
        { title: "Full Report PDF (15-20 páginas)", description: "Documento completo con metodología, datos, insights y recomendaciones" },
    ];

    return (
        <section id="deliverables" className="py-16 md:py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-sans tracking-tight">
                        Qué recibes al final del análisis
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
                    {deliverables.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <DocumentCheckIcon className="w-8 h-8 text-primary flex-shrink-0 mr-4 mt-1" />
                            <div>
                                <h3 className="font-bold text-text-primary text-lg">{item.title}</h3>
                                <p className="text-text-secondary opacity-75">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-12 text-lg text-text-secondary opacity-75 bg-white p-6 rounded-lg shadow-sm border border-brand-gray-medium/50 max-w-3xl mx-auto">
                    <strong>Formato de entrega:</strong> Presentación ejecutiva + PDF completo + acceso a dashboard interactivo (opcional)
                </p>
            </div>
        </section>
    );
};

export default DeliverablesSection;