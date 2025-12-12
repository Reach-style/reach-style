import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from '@/components/HeroSection';

const TrainingPartners: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow px-6 py-10 max-w-5xl mx-auto text-justify text-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Training Partners</h1>

          <p className="mb-4">
            If you are a university, college, technical school or a skill training centre, offering training on REACH software will enable you attract more students, create new revenue streams and enhance employability of your students.
          </p>

          <p className="mb-4">
            You can also offer Community Development Programmes, Continuing Education Programmes, Open Distance Learning Programmes, Online Learning Programmes on REACH software.
          </p>

          <p className="mb-4">
            REACH offers the broadest range of software products that digitize processes across the apparel value chain.
          </p>

          <p className="mb-4">
            These products have been built over a decade and half of research and field implementation.
          </p>

          <p className="mb-4">
            Special prices are available to universities and training centres. Please write to us at <a href="mailto:info@reach-tech.com" className="text-blue-600 underline">info@reach-tech.com</a> to initiate a conversation.
          </p>

          <p className="mb-4">
            Our domain experts will work with you to integrate REACH software into your curriculum, create session plans, assessment plans and the best ways to leverage e-learning content on REACH software. We also conduct Training Of Trainers (TOT) to upgrade the technical skills of faculty members.
          </p>

          <p className="mb-4">
            If you are a professional with training and/or experience in the apparel/fashion sectors or a trainer, you could become a REACH Online Trainer to offer Online Training on REACH software. REACH offers you software, training and support to launch your career as a full time or part time Online Trainer.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TrainingPartners;
