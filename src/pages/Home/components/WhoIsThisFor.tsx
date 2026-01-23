const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-bef0fb">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-024959"
        >
          Who is REACH Style Manager for?
        </h2>

        {/* Intro Line */}
        <p className="text-lg text-muted-foreground text-center mb-10">
          REACH Style Manager is designed to support professionals and
          organizations across the apparel and fashion product lifecycle.
        </p>

        {/* Target Audience List */}
        <ul className="space-y-4 text-lg text-muted-foreground list-disc list-inside max-w-3xl mx-auto">
          <li>Apparel manufacturing companies</li>
          <li>Fashion merchandising enterprises</li>
          <li>Designers and creative teams in the apparel industry</li>
          <li>Sampling coordinators and technicians</li>
          <li>
            Managers and professionals in the digital fashion value chain,
            including techpack service providers
          </li>
          <li>
            Academic institutions and training centers offering garment and
            fashion education
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
