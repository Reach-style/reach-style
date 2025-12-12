// import heroImage from "@/assets/heroimage.png";

// const HeroSection = () => {
//   return (
//     <section className="w-full bg-white flex justify-center items-center">
//       <div
//         className="
//           w-full 
//           max-w-[1600px]
//           mx-auto
//           bg-center 
//           bg-no-repeat 
//           bg-contain
//         "
//         style={{
//           backgroundImage: `url(${heroImage})`,
//           aspectRatio: "16 / 9",  // PERFECT scaling at all screen sizes
//         }}
//       ></div>
//     </section>
//   );
// };

// export default HeroSection;





import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/heroimage.png";

const HeroSection = () => {
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "laptop">("laptop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setViewport("mobile");
      } else if (width <= 1024) {
        setViewport("tablet");
      } else {
        setViewport("laptop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle: React.CSSProperties = {
    backgroundImage: `url(${heroImage})`,

    backgroundSize: "contain",
    backgroundPosition: "top center",
    backgroundColor: "#fff", // to fill white around image

    backgroundRepeat: "no-repeat",

    height: viewport === "mobile" ? "55vh" :
    viewport === "tablet" ? "75vh" : "100vh",

  };

  const buttonStyle: React.CSSProperties = {
    padding:
      viewport === "mobile"
        ? "4vw 8vw"
        : viewport === "tablet"
          ? "3vw 6vw"
          : "2vw 4vw",
    borderRadius: viewport === "mobile" ? "4vw" : "1.6vw",
    fontSize:
      viewport === "mobile"
        ? "26px"
        : viewport === "tablet"
          ? "18px"
          : "20px",
    width: viewport === "mobile" ? "80vw" : "auto",
    height: viewport === "mobile" ? "15vw" : "auto",
    textAlign: "center",
  };

  const buttonContainerStyle: React.CSSProperties =
    viewport === "mobile"
      ? {
        position: "absolute",
        bottom: "0px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
      }
      : viewport === "tablet"
        ? {
          position: "absolute",
          bottom: "28px",
          right: "40px",
          zIndex: 10,
        }
        : {
          position: "absolute",
          bottom: "36px",
          right: "80px",
          zIndex: 10,
        };

  return (
    <section
      className="relative flex items-center bg-white"
      style={{ minHeight: viewport === "mobile" ? "500px" : "900px" }}
    >
      <div className="absolute inset-0" style={sectionStyle}>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>      

      <div className="absolute top-1/2 right-6 sm:right-12 lg:right-24 transform -translate-y-1/2 z-20">
        <div className="relative bg-white/70 backdrop-blur-md px-6 py-4 sm:px-10 sm:py-8 lg:px-16 lg:py-12 text-center max-w-[90vw] sm:max-w-xl rounded-xl">
          <div className="absolute inset-0 bg-black/20 rounded-xl"></div>

        <div className="relative z-10">
 <h2
  className="
    font-bold 
    text-2xl 
    sm:text-3xl 
    md:text-4xl 
    lg:text-5xl 
    text-gray-900 
    leading-tight
  "
>
  Welcome to <br className="hidden sm:block" />
  <span className="text-[#b0004c]">REACH</span> Style Manager!
</h2>


</div>

        </div>
      </div>

      <div style={buttonContainerStyle}>
      </div>
    </section>
  );
};

export default HeroSection;
