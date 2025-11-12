import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-gray-medium">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white font-sans mb-4">BeyondCX</h3>
            <p className="opacity-75">Transformando la experiencia de cliente a través del BPO 2.0</p>
            <div className="mt-4 flex space-x-4">
               {/* Social Media Icons would go here */}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-sans mb-4">Productos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-75 hover:text-primary">Beyond-IVR</a></li>
              <li><a href="#" className="opacity-75 hover:text-primary">Beyond-Booking</a></li>
              <li><a href="#" className="opacity-75 hover:text-primary">Beyond-Order</a></li>
              <li><a href="#" className="opacity-75 hover:text-primary">Beyond-FCR</a></li>
              <li><a href="#" className="font-bold hover:text-primary">Beyond Diagnostic™</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-sans mb-4">Contacto</h3>
            <ul className="space-y-2 opacity-75">
                <li>📧 info@beyondcx.ai</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-gray-dark text-center text-sm opacity-60">
          <p>© 2024 BeyondCX - Grupo Valora. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary">Política de Privacidad</a> | <a href="#" className="hover:text-primary">Términos y Condiciones</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;