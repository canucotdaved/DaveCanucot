import React from "react";
import bg from "../assets/bg2.png";
import Section from "../components/Section";
import Images from "../components/Image";
import AboutImg from "../assets/AboutImg.png";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Scroller from "../components/Scroller";

const About = () => {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "-279px -344px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "60%",
  };

  return (
    <Section
      classname="flex flex-row bg-no-repeat mt-[-2px] py-5"
      style={style}
    >
      <Images image={AboutImg} />
      <div className="flex flex-col w-1/2 px-20 justify-center">
        <Title text="About Me" />
        <Paragraph text="An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion." />
      </div>
      <Scroller />
    </Section>
  );
};

export default About;
