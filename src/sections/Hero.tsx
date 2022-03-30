import React from "react";
import hero from "../assets/Union.png";
import HeroLogo from "../components/HeroLogo";

const Hero = () => {
  return (
    <div
      className="h-screen bg-no-repeat md:bg-contain bg-cover"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="flex flex-col max-w-[1640px] justify-center h-full mx-auto my-0 px-[40px]">
        {/* <img src={name} className="w-1/4" alt="hero logo" /> */}
        <HeroLogo />
      </div>
    </div>
  );
};

export default Hero;
