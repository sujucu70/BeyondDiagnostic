
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import MethodologySection from './components/MethodologySection';
import BenefitsSection from './components/BenefitsSection';
import DeliverablesSection from './components/DeliverablesSection';
import UseCasesSection from './components/UseCasesSection';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-white font-sans text-text-primary text-base md:text-lg leading-relaxed">
            <Header />
            <main>
                <HeroSection />
                <ProblemSection />
                <SolutionSection />
                <MethodologySection />
                <BenefitsSection />
                <DeliverablesSection />
                <UseCasesSection />
                <PricingSection />
                <ProcessSection />
                <FaqSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
