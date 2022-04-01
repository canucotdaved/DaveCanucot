import React from "react";
import { motion } from "framer-motion";

type Prop = {
  children: React.ReactNode;
  classname: string;
  style?: React.CSSProperties;
};

const Section = (props: Prop) => {
  console.log("props", props);
  return (
    <section className="relative h-[100vh]" style={props.style}>
      <div className={`max-w-[1440px] px-5 my-0 mx-auto  ${props.classname}`}>
        {props.children}
      </div>
    </section>
  );
};

export default Section;
