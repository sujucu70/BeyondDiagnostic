import React from 'react';
import { CubeTransparentIcon, ScaleIcon, ClockIcon } from './icons/FeatureIcons';

interface PainPointProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

const PainPoint: React.FC<PainPointProps> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-xl shadow-md border border-brand-gray-medium/50 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-center h-16 w-16 bg-primary/20 text-primary rounded-full mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-4 font-sans">{title}</h3>
        <p className="text-text-secondary opacity-75">{children}</p>
    </div>
);

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-sans tracking-tight">
            Por qué fracasan muchos de los proyectos de Transformación de CX
            </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <PainPoint icon={<CubeTransparentIcon className="w-8 h-8"/>} title="Decisiones basadas en intuición">
                El 70% de proyectos de IA en CX fracasan porque automatizan los procesos equivocados. Sin datos granulares, estás apostando con el presupuesto.
            </PainPoint>
            <PainPoint icon={<ScaleIcon className="w-8 h-8"/>} title="ROI invisible">
                Sabes que hay ineficiencias, pero no sabes cuánto te cuestan. Promedios engañosos (AHT medio) ocultan variabilidad del 200-300% en percentil 90.
            </PainPoint>
            <PainPoint icon={<ClockIcon className="w-8 h-8"/>} title="Parálisis por análisis">
                Las consultoras tradicionales tardan 3-6 meses y entregan PowerPoints genéricos. Mientras, tu competencia ya está automatizando.
            </PainPoint>
        </div>
        <p className="text-center text-xl text-text-primary mt-16 font-semibold">
          Necesitas <span className="text-primary">certeza</span> y <span className="text-primary">datos</span>, no opiniones.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;