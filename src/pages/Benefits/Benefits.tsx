import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import BenefitLinks from './components/BenefitLinks';

const Benefits: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />

      <div className="bg-gray-200 m-4 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary">
          Benefits of REACH Style Manager
        </h1>
      </div>

      <BenefitLinks />
      <Footer />
    </>
  );
};

export default Benefits;
