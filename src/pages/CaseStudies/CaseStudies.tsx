import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseGallery from './components/CaseGallery';
import HeroSection from '@/components/HeroSection';

const Casestudies: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      
      <div className="bg-gray-200 m-4 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary">
          Case Studies
        </h1>
      </div>

      <CaseGallery />

      <Footer />
    </>
  );
};

export default Casestudies;
