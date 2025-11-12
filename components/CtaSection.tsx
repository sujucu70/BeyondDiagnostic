import React, { useState } from 'react';

const CtaSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        phone: '',
        volume: '',
        goal: '',
        privacy: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would send this data to a server
        console.log(formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section id="cta" className="py-16 md:py-24 bg-surface">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-sans">¡Gracias por tu interés!</h2>
                    <p className="text-xl text-text-secondary opacity-75">Hemos recibido tu solicitud. Nos pondremos en contacto contigo en menos de 24 horas laborables.</p>
                </div>
            </section>
        );
    }
    
    return (
        <section id="cta" className="py-16 md:py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-sans tracking-tight">
                        Descubre las oportunidades ocultas en tu operación de CX
                    </h2>
                    <p className="text-lg text-text-secondary opacity-75 mb-10">
                        Agenda una call exploratoria de 30 minutos sin compromiso. Te explicaremos la metodología y responderemos todas tus preguntas.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <input type="text" name="name" placeholder="Nombre completo*" required className="w-full p-3 border border-brand-gray-medium rounded-lg" onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email corporativo*" required className="w-full p-3 border border-brand-gray-medium rounded-lg" onChange={handleChange} />
                        <input type="text" name="company" placeholder="Empresa*" required className="w-full p-3 border border-brand-gray-medium rounded-lg" onChange={handleChange} />
                        <input type="text" name="role" placeholder="Cargo*" required className="w-full p-3 border border-brand-gray-medium rounded-lg" onChange={handleChange} />
                    </div>
                    <select name="volume" required className="w-full p-3 border border-brand-gray-medium rounded-lg text-text-primary opacity-75" onChange={handleChange}>
                        <option value="">Volumen aproximado interacciones/mes*</option>
                        <option value="<5K">&lt;5K</option>
                        <option value="5K-20K">5K-20K</option>
                        <option value="20K-50K">20K-50K</option>
                        <option value=">50K">&gt;50K</option>
                    </select>
                    <textarea name="goal" placeholder="¿Qué te gustaría lograr con Beyond Diagnostic?*" required rows={4} className="w-full p-3 border border-brand-gray-medium rounded-lg" onChange={handleChange}></textarea>
                    <div className="flex items-start">
                        <input type="checkbox" id="privacy" name="privacy" required className="h-5 w-5 mt-1 mr-3 text-primary border-brand-gray-medium rounded focus:ring-primary" onChange={handleChange} />
                        <label htmlFor="privacy" className="text-sm text-text-secondary opacity-75">Acepto la política de privacidad*</label>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors text-lg">
                        Solicitar llamada exploratoria →
                    </button>
                     <p className="text-center text-sm text-text-secondary opacity-75">⚡ Respuesta en &lt;24 horas laborables</p>
                </form>
            </div>
        </section>
    );
};

export default CtaSection;