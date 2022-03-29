import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className=" fixed w-full top-0 left-0 bg-transparent h-[100vh] md:h-auto ">
      <Navigation />
    </header>
  );
};

export default Header;
