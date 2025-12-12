import React from "react";

const pdfItems = [
  {
    title: "Case Study",
    file: "/pdfs/casestudy1.pdf",
    thumbnail: "/thumbnails/casestudy1.png",
  },
];

const CaseGallery = () => {
  return (
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
                alt={item.title}
                className="w-full h-auto rounded shadow"
              />
            </a>

            <h3 className="text-lg font-semibold text-center mb-4">{item.title}</h3>

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
  );
};

export default CaseGallery;
