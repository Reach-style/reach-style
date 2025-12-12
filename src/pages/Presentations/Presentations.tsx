import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PresentationGallery from './components/PresentationGallery';
import Footer from '@/components/Footer';

const Presentations: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      
      <div className="bg-gray-200 m-4 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary">
          Presentations
        </h1>
      </div>

      <PresentationGallery />
      <Footer />
    </>
  );
};

export default Presentations;
