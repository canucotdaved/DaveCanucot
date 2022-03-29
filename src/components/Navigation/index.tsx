import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuToggle from "./MenuToggle";
import NavigationUl from "./Navigation";
import Logo from "./Logo";

const navbar = {
  open: (height = 600) => ({
    clipPath: `circle(${height * 2 + 200}px at 90.2% 55px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 90.2% 55px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navigation = () => {
  const [isopen, setisOpen] = useState(false);
  console.log(isopen);

  return (
    <motion.div
      initial={false}
      animate={isopen ? "open" : "closed"}
      className="md:flex items-center justify-between  py-7 max-w-[1640px] mx-auto my-0 px-7"
    >
      <Logo />
      <motion.div
        className="absolute w-full z-[1] bg-white h-full left-0 top-0 md:hidden"
        variants={navbar}
      >
        <MenuToggle open={isopen} setisOpen={setisOpen} />
      </motion.div>
      <NavigationUl open={isopen} />
    </motion.div>
  );
};

export default Navigation;
