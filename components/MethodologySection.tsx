import React from 'react';
import { ChartBarIcon, BoltIcon, CheckBadgeIcon, FaceSmileIcon, PuzzlePieceIcon, BanknotesIcon, SparklesIcon, PresentationChartLineIcon } from './icons/FeatureIcons';

interface MethodCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

const MethodCard: React.FC<MethodCardProps> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-brand-gray-medium/50 h-full">
        <div className="flex items-center mb-4">
            <div className="text-primary mr-4">{icon}</div>
            <h3 className="text-lg font-bold text-text-primary font-sans">{title}</h3>
        </div>
        <p className="text-text-secondary opacity-75 text-base">{children}</p>
    </div>
);

const MethodologySection: React.FC = () => {
  const methods = [
    { icon: <ChartBarIcon className="w-8 h-8"/>, title: "VOLUMETRÍA & DISTRIBUCIÓN", description: "Analizamos patrones de demanda por skill, canal, horario y temporalidad para identificar dónde concentrar esfuerzos." },
    { icon: <BoltIcon className="w-8 h-8"/>, title: "EFICIENCIA OPERATIVA", description: "Medimos AHT, Talk Time, Hold Time y ACW en percentiles (P10-P90) para detectar fricción y variabilidad." },
    { icon: <CheckBadgeIcon className="w-8 h-8"/>, title: "EFECTIVIDAD & RESOLUCIÓN", description: "Evaluamos FCR, tasa de escalación, abandono y reincidencia - las métricas que realmente importan." },
    { icon: <FaceSmileIcon className="w-8 h-8"/>, title: "SATISFACCIÓN & EXPERIENCIA", description: "Correlacionamos CSAT/NPS con eficiencia para encontrar el balance óptimo entre velocidad y calidad." },
    { icon: <PuzzlePieceIcon className="w-8 h-8"/>, title: "COMPLEJIDAD & PREDICTIBILIDAD", description: "Scoring de cada proceso según repetitividad, estructuración de datos y nivel de juicio humano requerido." },
    { icon: <BanknotesIcon className="w-8 h-8"/>, title: "ECONOMÍA & COSTES", description: "Calculamos coste por interacción (CPI) actual por skill y canal - el baseline para medir ROI." },
    { icon: <SparklesIcon className="w-8 h-8"/>, title: "AGENTIC READINESS ⭐", description: "Algoritmo propietario que clasifica cada proceso con score 0-10 según viabilidad de automatización." },
    { icon: <PresentationChartLineIcon className="w-8 h-8"/>, title: "BENCHMARK DE INDUSTRIA", description: "Comparamos tus KPIs vs promedios sectoriales para identificar gaps y oportunidades competitivas." },
  ];

  return (
    <section id="methodology" className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-sans tracking-tight">
            Metodología de 8 dimensiones que va más allá de los KPIs básicos
            </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {methods.map(method => (
                <MethodCard key={method.title} icon={method.icon} title={method.title}>
                    {method.description}
                </MethodCard>
            ))}
        </div>
        <div className="mt-16 text-center bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg max-w-4xl mx-auto">
            <p className="text-lg text-text-primary">
            "Nuestra metodología usa estadística avanzada (percentiles, correlaciones, entropía) - no las 'mejores prácticas' genéricas de las consultoras tradicionales."
            </p>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;