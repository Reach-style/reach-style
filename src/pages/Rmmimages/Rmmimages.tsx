import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const imageItems = [
  { file: "/gallery/image1.png" },
  { file: "/gallery/image2.png" },
  { file: "/gallery/image3.png" },
  { file: "/gallery/image4.png" },
  { file: "/gallery/image5.png" },
  { file: "/gallery/image6.png" },
  { file: "/gallery/image7.png" },
  { file: "/gallery/image8.png" },
  { file: "/gallery/image9.png" },
  { file: "/gallery/image10.png" },
  { file: "/gallery/image11.png" },
  { file: "/gallery/image12.png" },
  { file: "/gallery/image13.png" },
  { file: "/gallery/image14.png" },
  { file: "/gallery/image15.png" },
  { file: "/gallery/image16.png" },
  { file: "/gallery/image17.png" },
  { file: "/gallery/image18.png" },
  { file: "/gallery/image19.png" },
  { file: "/gallery/image20.png" },
  { file: "/gallery/image21.png" },
  { file: "/gallery/image22.png" },
  { file: "/gallery/image23.png" },
  { file: "/gallery/image24.png" },
  { file: "/gallery/image25.png" },
  { file: "/gallery/image26.png" },
  { file: "/gallery/image27.png" },
  { file: "/gallery/image28.png" },

];



const Rmmimages: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />

      {/* Page Title */}
      <div className="bg-gray-200 m-4 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary">
          REACH Style Manager Images
        </h1>
      </div>

      {/* Square Image Grid */}
        <section className="py-12 px-4 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {imageItems.map((item, index) => (
            <div
                key={index}
                className="bg-gray-100 rounded shadow overflow-hidden"
            >
                {/* Maintain 16:9 ratio for 1280×720 images */}
                <div className="w-full bg-gray-100 p-2 flex items-center justify-center rounded">
<img
  src={item.file}
  alt={`REACH Style Manager gallery image ${index + 1} showing software interface and features`}
  className="w-full h-auto object-contain"
/>

                </div>
            </div>
            ))}
        </div>
        </section>


      <Footer />
    </>
  );
};

export default Rmmimages;
