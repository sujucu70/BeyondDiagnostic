import React, { useState } from 'react';

const faqData = [
    { q: "¿Qué datos necesitáis de nuestra operación?", a: "Datos históricos de interacciones (6-12 meses idealmente): fecha/hora, canal, skill, duración (AHT), resultado. La mayoría de plataformas de contact center (Genesys, Avaya, Zendesk, etc.) permiten exportar esto fácilmente. Si no tienes datos estructurados, tenemos metodología alternativa con sampling." },
    { q: "¿Es confidencial? ¿Qué hacéis con nuestros datos?", a: "Sí, 100% confidencial. Firmamos NDA antes de recibir datos. Información es usada únicamente para tu análisis y eliminada tras la entrega. Nunca compartimos datos entre clientes ni usamos para otros fines." },
    { q: "¿Qué pasa si no tenemos sistemas de contact center sofisticados?", a: "No es problema. Ofrecemos tier 'Express' para clientes con datos limitados, donde hacemos sampling manual y análisis cualitativo. Igualmente generas insights valiosos." },
    { q: "¿El Diagnostic nos obliga a contratar la implementación?", a: "No, para nada. El análisis es independiente y puedes implementar las recomendaciones internamente, con otro proveedor, o con nosotros. Si eliges implementar con BeyondCX, reembolsamos el 100% como incentivo." },
    { q: "¿Cuánto tiempo de mi equipo requiere?", a: "Mínimo. Necesitarás: (1) 30 min de kick-off call, (2) 1-2 horas para extracción de datos (o coordinación con IT), (3) 60-90 min para presentación final. Total: ~3 horas de tu tiempo en 2 semanas." },
    { q: "¿Trabajan solo en España?", a: "Principalmente España y Colombia, pero hemos hecho análisis para operaciones en LATAM completo. El análisis es remoto, así que la geografía no es limitante." },
    { q: "¿Qué diferencia este análisis de una consultoría tradicional?", a: "(1) Velocidad: 2 semanas vs 3-6 meses, (2) Coste: €2.5K vs €20-50K, (3) Metodología: percentiles y algoritmos vs 'mejores prácticas', (4) Accionabilidad: roadmap ejecutable vs PowerPoint genérico, (5) Reembolsable: riesgo cero si implementas." },
    { q: "¿Ofrecéis el servicio en inglés?", a: "Sí, podemos realizar el análisis y presentación en inglés si es necesario." },
];

interface FaqItemProps {
    q: string;
    a: string;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ q, a, isOpen, onClick }) => {
    return (
        <div className="border-b border-brand-gray-medium">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full py-5 text-left"
            >
                <h3 className="text-lg font-semibold text-text-primary">{q}</h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                 <p className="pb-5 text-text-secondary opacity-75">{a}</p>
            </div>
        </div>
    );
};

const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 md:py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 font-sans tracking-tight">
                        Preguntas frecuentes
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            q={faq.q}
                            a={faq.a}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;