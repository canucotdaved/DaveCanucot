import React from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";

interface PropType {
  open: any;
}

const NavigationUl = ({ open }: PropType) => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Skills", link: "/" },
    { name: "Works", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <motion.ul
      variants={variants}
      className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
        open ? "top-20 opacity-100" : "top-[-495px]"
      } md:opacity-1 opacity-100 bg-white md:bg-transparent`}
    >
      {navItems.map((link, index) => (
        <NavItem link={link.link} name={link.name} />
      ))}
    </motion.ul>
  );
};

export default NavigationUl;
