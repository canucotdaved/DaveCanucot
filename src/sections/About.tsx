import React from "react";
import bg from "../assets/bg2.png";
import Section from "../components/Section";

const About = () => {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "-276px -211px",
  };

  return (
    <Section
      classname="flex flex-row bg-no-repeat mt-[-2px] h-[100vh]"
      style={style}
    >
      <h1>About us</h1>
    </Section>
  );
};

export default About;
