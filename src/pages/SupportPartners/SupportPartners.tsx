import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from '@/components/HeroSection';


const SupportPartners: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow px-6 py-10 max-w-5xl mx-auto text-justify text-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Support Partners</h1>

          <p className="mb-4">
            Offering technical support for REACH software products can provide you with a very profitable business opportunity.
          </p>

          <p className="mb-4">
            REACH offers the broadest range of software products that digitize processes across the apparel value chain.
          </p>

          <p className="mb-4">
            These products have been built over a decade and half of research and field implementation.
          </p>

          <p className="mb-4">
            If your profile matches any of the following, please do write to us at <a href="mailto:info@reach-tech.com" className="text-blue-600 underline">info@reach-tech.com</a> to explore collaboration:
          </p>

          <ul className="list-disc list-inside mb-4 pl-4">
            <li>A firm currently offering technical support for software products</li>
            <li>A professional with experience in technical support for software products</li>
            <li>A startup with interest in technical support for software products</li>
            <li>An individual with interest in technical support for software products</li>
          </ul>

          <p className="mb-4">
            REACH offers great products, training and support to help you start and grow your business.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SupportPartners;
