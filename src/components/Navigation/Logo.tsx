import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    color: "rgb(31 41 55)",
    transition: {
      duration: 0.8,
    },
  },
  closed: {
    color: "rgb(255,255,255)",
    transition: {
      duration: 0.8,
    },
  },
};

const Logo = () => {
  return (
    <motion.h1
      className="md:static absolute z-[3] font-bold text-4xl cursor-pointer md:text-white flex flex-col"
      variants={variants}
    >
      デイブ
      <span className="text-xs tracking-[1.2em]">Deibu</span>
    </motion.h1>
  );
};

export default Logo;
