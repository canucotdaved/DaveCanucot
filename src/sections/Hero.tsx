import React from "react";
import hero from "../assets/Union.png";
import name from "../assets/davecanucot.svg";
import Social from "../components/Social";
import Scroller from "../components/Scroller";

const Hero = () => {
  return (
    <div
      className="h-screen bg-no-repeat bg-contain"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="flex flex-col max-w-[1640px] justify-center h-full mx-auto my-0 px-[40px]">
        <img
          src={name}
          className="w-1/4"
          alt="hero logo"
        />
        <h2 className="font-semibold text-2xl text-white py-3">
          Engineer + Front-end Developer
        </h2>
        <Social />
        <Scroller />
      </div>
    </div>
  );
};

export default Hero;
