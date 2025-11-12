import React from 'react';

interface UseCaseCardProps {
    title: string;
    scenario: string;
    perfectFor: string[];
    whatYouGet: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, scenario, perfectFor, whatYouGet }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-brand-gray-medium/50 flex flex-col h-full">
        <h3 className="text-xl font-bold font-sans text-primary mb-4">{title}</h3>
        <p className="text-text-secondary opacity-75 italic text-lg mb-6">"{scenario}"</p>
        <div className="flex-grow">
            <p className="font-bold mb-2">Eres perfecto si:</p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary opacity-75 mb-6">
                {perfectFor.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
        <div className="mt-auto pt-6 border-t border-brand-gray-medium">
            <p className="font-bold mb-2">Lo que obtienes:</p>
            <p className="text-primary font-semibold">{whatYouGet}</p>
        </div>
    </div>
);


const UseCasesSection: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 font-sans tracking-tight">
                ¿Para quién es Beyond Diagnostic™?
            </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
            <UseCaseCard
                title="EMPRESA CONSIDERANDO IA"
                scenario="Sabemos que deberíamos automatizar, pero no sabemos por dónde empezar"
                perfectFor={[
                    "Tienes contact center con >20 agentes",
                    "Volumen >10K interacciones/mes",
                    "Estás evaluando chatbots, IVR inteligente o copilots",
                    "Quieres evitar el error de automatizar los procesos equivocados",
                ]}
                whatYouGet="Roadmap priorizado por ROI que te dice exactamente qué automatizar primero."
            />
            <UseCaseCard
                title="OPERACIÓN CON INEFICIENCIAS SOSPECHADAS"
                scenario="Nuestros costes son altos y CSAT está estancado, pero no sabemos qué optimizar"
                perfectFor={[
                    "Tu AHT ha crecido 15%+ en último año",
                    "FCR <70% o abandono >8%",
                    "Sospechas que hay variabilidad oculta",
                    "Necesitas justificación de presupuesto ante CFO",
                ]}
                whatYouGet="Baseline cuantificado + oportunidades de €100K-€500K que no habías identificado."
            />
            <UseCaseCard
                title="BENCHMARK COMPETITIVO"
                scenario="No sé si estamos mejor o peor que la competencia"
                perfectFor={[
                    "Llevas >2 años sin revisar operación profundamente",
                    "No tienes visibilidad de cómo se compara tu CPI vs mercado",
                    "Junta directiva pide 'transformación digital' pero sin plan",
                    "Quieres data-driven roadmap para próximos 12-24 meses",
                ]}
                whatYouGet="Posicionamiento vs industria + plan estratégico con quick wins y strategic bets."
            />
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;