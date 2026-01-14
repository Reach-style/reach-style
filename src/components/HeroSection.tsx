import heroImage from "@/assets/heroimage.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      {/* SEO H1 – hidden visually, readable by Google */}
      <h1 className="sr-only">
        REACH Style Manager – Product Lifecycle Management Software
      </h1>

      {/* Hero Wrapper */}
      <div
        className="
          relative
          w-full
          flex
          items-center
          justify-center
          overflow-hidden
        "
        style={{
          aspectRatio: "16 / 9",
        }}
      >
        {/* Hero Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
