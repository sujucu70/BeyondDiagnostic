
import React, { useState, useRef } from 'react';
import { CheckCircleIcon } from './icons/FeatureIcons';

// Define the type for our heatmap data
interface HeatmapDataItem {
  id: number;
  process: string;
  score: number;
  savings: number;
  recommendation: 'Automate' | 'Assist' | 'Augment';
  color: string;
}

const heatmapData: HeatmapDataItem[] = [
    { id: 1, process: 'Consulta Factura', score: 9.2, savings: 120000, recommendation: 'Automate', color: 'bg-green-600' },
    { id: 2, process: 'Cambio de Plan', score: 8.8, savings: 95000, recommendation: 'Automate', color: 'bg-green-500' },
    { id: 3, process: 'Soporte Técnico N1', score: 7.5, savings: 72000, recommendation: 'Assist', color: 'bg-green-400' },
    { id: 4, process: 'Gestión de Citas', score: 9.5, savings: 150000, recommendation: 'Automate', color: 'bg-green-600' },
    { id: 5, process: 'Info de Producto', score: 8.1, savings: 60000, recommendation: 'Automate', color: 'bg-green-500' },
    { id: 6, process: 'Baja de Servicio', score: 5.5, savings: 25000, recommendation: 'Augment', color: 'bg-yellow-400' },
    { id: 7, process: 'Actualizar Datos', score: 9.0, savings: 110000, recommendation: 'Automate', color: 'bg-green-600' },
    { id: 8, process: 'Reclamaciones', score: 4.2, savings: 15000, recommendation: 'Augment', color: 'bg-yellow-500' },
    { id: 9, process: 'Seguimiento Pedido', score: 8.9, savings: 105000, recommendation: 'Automate', color: 'bg-green-500' },
    { id: 10, process: 'Soporte Técnico N2', score: 3.1, savings: 8000, recommendation: 'Augment', color: 'bg-red-500' },
    { id: 11, process: 'Venta Cruzada', score: 6.8, savings: 45000, recommendation: 'Assist', color: 'bg-yellow-300' },
    { id: 12, process: 'Retención Cliente', score: 2.5, savings: 5000, recommendation: 'Augment', color: 'bg-red-600' },
    { id: 13, process: 'Activación Producto', score: 7.9, savings: 68000, recommendation: 'Assist', color: 'bg-green-400' },
    { id: 14, process: 'Resolución Compleja', score: 3.5, savings: 12000, recommendation: 'Augment', color: 'bg-red-500' },
    { id: 15, process: 'Fidelización VIP', score: 4.8, savings: 20000, recommendation: 'Augment', color: 'bg-yellow-500' },
];


const SolutionSection: React.FC = () => {
  const features = [
    "Percentiles, no promedios: Detectamos variabilidad oculta (P90 vs P50)",
    "€ cuantificados: Ahorro anual por oportunidad, no 'beneficios estimados'",
    "Agentic Readiness Score: Algoritmo propietario que clasifica cada proceso en Automate/Assist/Augment",
    "Benchmark de industria: Comparación vs competencia y best-in-class",
    "Reembolsable: 100% descontable si implementas con nosotros",
  ];

  const [hoveredCell, setHoveredCell] = useState<HeatmapDataItem | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const heatmapRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, cellData: HeatmapDataItem) => {
    setHoveredCell(cellData);
    if (heatmapRef.current) {
        const rect = e.currentTarget.getBoundingClientRect();
        const containerRect = heatmapRef.current.getBoundingClientRect();
        
        let top = rect.top - containerRect.top + rect.height / 2;
        let left = rect.left - containerRect.left + rect.width + 10;
        
        // Basic boundary detection to prevent tooltip from going off-screen
        const tooltipWidth = 256; // w-64
        if (left + tooltipWidth > containerRect.width) {
           left = rect.left - containerRect.left - tooltipWidth - 10;
        }

        setTooltipPosition({ top, left });
    }
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };


  return (
    <section id="solution" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-sans tracking-tight">
              Beyond Diagnostic: De incertidumbre a decisión en 14 días
            </h2>
            <h3 className="text-xl font-bold text-text-primary mt-8 mb-4">¿Qué es?</h3>
            <p className="text-text-secondary opacity-75 mb-8">
              Un análisis profundo de tu operación de CX que mapea cada skill, canal y proceso para identificar exactamente dónde la automatización generará mayor ROI.
            </p>
            <h3 className="text-xl font-bold text-text-primary mt-8 mb-4">Lo que hace diferente:</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                  <span className="text-text-secondary opacity-75">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-white p-4 rounded-xl shadow-2xl border border-brand-gray-medium/50">
                <div ref={heatmapRef} className="relative aspect-video grid grid-cols-5 grid-rows-3 gap-1.5 p-2 bg-surface rounded-lg">
                    {heatmapData.map((cell) => (
                        <div 
                          key={cell.id} 
                          className={`rounded-md ${cell.color} hover:opacity-75 cursor-pointer transition-opacity duration-200`}
                          onMouseEnter={(e) => handleMouseEnter(e, cell)}
                          onMouseLeave={handleMouseLeave}
                          aria-label={`Proceso: ${cell.process}, Puntuación: ${cell.score}`}
                        ></div>
                    ))}
                    {hoveredCell && (
                        <div 
                          className="absolute z-10 w-64 p-4 bg-brand-black text-white rounded-lg shadow-xl pointer-events-none transition-opacity duration-200"
                          style={{ top: tooltipPosition.top, left: tooltipPosition.left, transform: 'translateY(-50%)' }}
                          role="tooltip"
                        >
                          <h4 className="font-bold text-lg">{hoveredCell.process}</h4>
                          <p className="text-sm opacity-80 mt-2">
                              <span className="font-semibold">Readiness Score:</span> {hoveredCell.score}/10
                          </p>
                          <p className="text-sm opacity-80">
                              <span className="font-semibold">Ahorro Anual:</span> €{hoveredCell.savings.toLocaleString('es-ES')}
                          </p>
                           <p className={`mt-3 text-center text-sm font-bold py-1 px-2 rounded-full
                                        ${hoveredCell.recommendation === 'Automate' ? 'bg-green-500' : 
                                          hoveredCell.recommendation === 'Assist' ? 'bg-yellow-500 text-black' : 'bg-red-500'}`
                                        }>
                               Recomendación: {hoveredCell.recommendation}
                           </p>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h4 className="font-bold text-lg text-center">Beyond CX Heatmap™ (Interactivo)</h4>
                    <p className="text-sm text-text-secondary opacity-75 text-center">Pasa el ratón sobre cada bloque para ver el potencial de automatización.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
