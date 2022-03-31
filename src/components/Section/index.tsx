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
    <section className={`${props.classname}`} style={props.style}>
      {props.children}
    </section>
  );
};

export default Section;
