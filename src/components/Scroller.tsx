import React from "react";
import { motion } from "framer-motion";

const Scroller = () => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,

      y: 0,
      transition: {
        delay: 2,
        type: "spring",
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      className="flex items-center absolute bottom-[100px]"
      variants={variants}
    >
      <div className="w-[18px] h-[40px] border-[1px] border-solid border-white relative rounded-[15px]">
        <div className="w-[2px] rounded-[8px] h-[12px] bg-white relative my-0 mx-auto animate-scroller"></div>
      </div>
      <h4 className="text-gray-600 ml-4 animate-pulse">Scroll</h4>
    </motion.div>
  );
};

export default Scroller;
