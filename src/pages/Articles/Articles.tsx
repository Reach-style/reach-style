import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const pdfItems = [
  {
    title: "Article 1",
    file: "/pdfs/rsm1.pdf",
    thumbnail: "/thumbnails/rsm1pic.png",
  },
  {
    title: "Article 2",
    file: "/pdfs/rsm2.pdf",
    thumbnail: "/thumbnails/rsm2pic.png",
  },
];

const Articles: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      
      <div className="bg-gray-200 m-4 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary">
          Articles
        </h1>
      </div>

      <section className="py-12 px-4 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pdfItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded shadow hover:shadow-md transition"
            >
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-4"
              >
                <img
                  src={item.thumbnail}
                  alt={`Thumbnail image for ${item.title} related to REACH Style Manager`}
                  className="w-full h-auto rounded shadow"
                />
              </a>

              <h3 className="text-lg font-semibold text-center mb-4">
                {item.title}
              </h3>

              <div className="flex justify-center gap-4">
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  View
                </a>
                <a
                  href={item.file}
                  download
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-black"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Articles;
