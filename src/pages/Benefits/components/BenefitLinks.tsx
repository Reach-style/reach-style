import { Link } from "react-router-dom";

export const benefitPoints = [
  "Accurate product development as per specs.",
  "Better and faster product development.",
  "Machine Database Structured communication with external organizations and internal workgroups.",
  "Develop design moodboards.",
  "Organize and co-ordinate elements comprising a design collection.",
  "Revised specification history.",
  "Comprehensive records of seams, stitches, colors, machinery, attachments, care instructions, etc., for all styles processed.",
  "Parts listing and operation breakdown.",
  "EXIM and Payment Tracking.",
  "Record fabric, trims and accessories application per style.",
  "Worklist generation for key personnel and/or departments.",
  "Time and Action tracking and reporting.",
  "Sales History - Styles - Specifications Data Bank.",
  "RSM will increase your revenue through shortened cycle times.",
  "RSM will substantially reduce your design and developemnt costs.",
  "RSM will reduce process failures in product development.",
];

const BenefitLinks = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Benefits of using <span className="text-primary">REACH Style Manager</span>
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Style Manager
        </p>


      <div className="space-y-6 max-w-5xl mx-auto">
         {benefitPoints.map((point, index) => (
      <div
          key={index}
          className="flex items-center justify-between bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
         >
      <div className="flex items-center gap-4">
        <p className="text-gray-800 font-semibold text-lg md:text-xl">
          {point}
        </p>
      </div>

          {/* <Link
             to={`/benefits/detail/${index + 1}`}
             className="text-primary font-medium hover:underline whitespace-nowrap">
                Read more →
          </Link> */}
         </div>
        ))}
      </div>
      
      </div>
    </section>
  );
};

export default BenefitLinks;
