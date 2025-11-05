import React from "react";
import bgImage from "../assets/hero.webp";

const primaryButtonClass =
  "bg-[#34A264] hover:bg-[#2d8b54] text-white font-bold font-montserrat py-3 px-8 rounded-md shadow-md transition duration-300";

export const Hero = () => {
  return (
    <section
      className="relative overflow-x-hidden h-[80vh] sm:h-[90vh] md:h-screen  bg-cover bg-center flex items-center justify-center text-center px-4 md:px-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative z-10 text-left mx-auto">
        <h1 className="text-white max-w-4xl  text-4xl sm:text-5xl md:text-6xl font-medium font-montserrat leading-tight">
          Find Your Perfect Student Apartment
        </h1>

        <p className="text-white max-w-3xl  text-lg sm:text-xl md:text-2xl mt-4 md:mt-6 font-light font-montserrat">
          Easily search affordable housing near your campus and connect with
          roommates who match your lifestyle.
        </p>

        <div className="mt-8">
          <button className={primaryButtonClass}>Rent a Lodge</button>
        </div>
      </div>
    </section>
  );
};
