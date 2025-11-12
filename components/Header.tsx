import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl md:text-2xl font-bold text-primary font-sans">
          Beyond<span className="text-text-primary">Diagnostic™</span>
        </a>
        <a href="#cta" className="hidden sm:inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-base">
          Solicitar análisis →
        </a>
      </div>
    </header>
  );
};
export default Header;