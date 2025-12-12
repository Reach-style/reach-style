import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from '@/components/HeroSection';

const GovernmentAgencies: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow px-6 py-10 max-w-5xl mx-auto text-justify text-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Government Agencies</h1>

          <p className="mb-4">
            Vast majority of apparel manufacturing firms are Micro, Small and Medium Enterprises (MSMEs). REACH software like REACH CAD, REACH Cut Planner, REACH Fashion Studio, etc. will save fabric and time for them, enhancing their competitiveness.
          </p>

          <p className="mb-4">
            Globally, apparel/fashion is a USD 2.4 trillion market. According to McKinsey Consulting: "If it were ranked alongside individual countries’ GDP, the global fashion industry would represent the world’s seventh largest economy."
          </p>

          <p className="mb-4">
            Adoption of intelligent digital tools like REACH software among apparel MSMEs has been very low for reasons of price, awareness, availability of local talent, local support, etc. Sewing machine is an engineering marvel. Also, a social engineering tool. Sewing machines brought millions of women the ability to participate in economic activity, even when they could not migrate to towns or family circumstances did not allow them to work outside for 8 hours, and consequent empowerment. Intelligent digital tools like REACH software do the same today.
          </p>

          <p className="mb-4">
            Today, a woman in a remote village can design textile and garments, create patterns for them, and manufacture the garments herself or collaborate with a manufacturing unit to produce her designs.
          </p>

          <p className="mb-4">
            She can also offer apparel pattern design services as an outsourced service to a larger firm located elsewhere in the country or outside.
          </p>

          <p className="mb-4">
            Apparel industry is among the most fragmented industries. Quite a lot of technology enablement has happened on the demand side (e.g., online sales catalogues, AI to understand consumer preferences and make recommendations, etc.). However, on the supply side, tech enabling millions of apparel MSMEs is work far from done.
          </p>

          <p className="mb-4">
            If you are a policy maker or a government representative, you can contribute to making apparel firms in your region competitive by creating awareness of and helping implement REACH CAD. We offer awareness sessions, workshops, pilot projects, training, e-learning content, support for market and finance linkages, and linkages to industry experts.
          </p>

          <p className="mb-4">
            By partnering with REACH, you will enable self and wage employment creation and make apparel MSMEs in your region competitive.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GovernmentAgencies;
