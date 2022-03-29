import React from "react";
import { motion } from "framer-motion";
interface PropType {
  link: string;
  name: string;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        stiffness: 1000,
        velocity: -100,
      },
    },
  },
  closed: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavItem = ({ link, name }: PropType) => {
  return (
    <motion.li
      className="md:ml-8 text-xl md:my-0 my-5"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={link}
        className="text-gray-800 md:hover:text-cyan-500 duration-300 transition-all ease-in font-semibold"
      >
        {name}
      </a>
    </motion.li>
  );
};

export default NavItem;
