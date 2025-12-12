import React from "react";
import Footer from "@/components/Footer"; 
import Header from "@/components/Header";
import HeroSection from '@/components/HeroSection';

const SalesPartners: React.FC = () => {
 return (
  <>
    <Header />
    <HeroSection />
    <div className="flex flex-col min-h-screen">
      {/* Page Content */}
      <div className="flex-grow px-6 py-10 max-w-5xl mx-auto text-justify text-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Sales Partners</h1>
        <p className="mb-4">
          REACH offers the broadest range of software products that digitize processes across the apparel value chain. These products have been built over a decade and half of research and field implementation.
        </p>
        <p className="mb-4">
          Marketing and selling REACH products can offer you a very profitable opportunity.
        </p>
        <p className="mb-4">
          If your profile matches any of the following, please do write to us at <a href="mailto:info@reach-tech.com" className="text-blue-600 underline">info@reach-tech.com</a> to explore collaboration:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>A firm currently marketing and selling software</li>
          <li>A firm currently selling something (e.g., apparel machinery, fabric, accessories) to the apparel/fashion sectors</li>
          <li>A professional with experience in marketing and selling software</li>
          <li>A professional with experience in marketing and selling something to the apparel/fashion sectors</li>
          <li>A startup with interest in marketing and selling software</li>
          <li>An individual with interest in marketing and selling software</li>
        </ul>
        <p className="mb-4">
          REACH offers great products, training, and support to help you start and grow your business.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  </>
);
}

export default SalesPartners;
