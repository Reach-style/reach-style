import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Manage Product Development Efficiently",
      description: "REACH Style Manager ensures accurate and specification-driven product development. It speeds up the development cycle, supports moodboard creation, maintains revised specification history, and stores comprehensive records of seams, stitches, colors, machinery, attachments, care instructions, and all style-related details."
    },
    {
      icon: Users,
      title: "Improve Design Coordination & Planning",
      description: "The system helps organize and coordinate all elements of a design collection. It facilitates structured communication across teams and organizations, provides complete parts listings and operation breakdowns, and ensures smooth planning throughout the design and production workflow."
    },
    {
      icon: TrendingUp,
      title: "Strengthen Tracking, Documentation & Reporting",
      description: "Style Manager offers EXIM and payment tracking, maintains records of trims, accessories, and fabrics per style, and generates worklists for key teams or departments. It supports detailed time-and-action tracking and maintains historical data including sales, styles, and specifications in a consolidated data bank."
    },
    {
      icon: Star,
      title: "Reduce Costs & Increase Profitability",
      description: "RSM shortens cycle times, enhances operational efficiency, and reduces design and development costs. By improving process accuracy and minimizing failures in product development, it helps increase revenue and achieve significant long-term financial impact.."
    }
  ];

  return (
    <section className="py-16 bg-white text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-024959"
        >
          Benefits of REACH Style Manager
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          REACH Style Manager
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-bef0fb p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-0a829e mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;