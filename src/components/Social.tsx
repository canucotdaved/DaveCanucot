import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { motion } from "framer-motion";

const Social = () => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        type: "spring",
        ease: "easeOut",
      },
    },
  };

  let Icons = [
    {
      icon: <AiOutlineTwitter className="group-hover:fill-white" />,
      link: "/",
    },
    {
      icon: <FiGithub className="group-hover:fill-white fill-black" />,
      link: "/",
    },
    {
      icon: <FiLinkedin className="group-hover:fill-white fill-black" />,
      link: "/",
    },
    {
      icon: <FiFacebook className="group-hover:fill-white fill-black" />,
      link: "/",
    },
  ];
  return (
    <motion.div className="flex" variants={variants}>
      {Icons.map((icon, index) => (
        <div className="w-[33.78px] h-[33.78px] rounded-full bg-[#928A97] flex items-center justify-center mr-3 cursor-pointer group hover:bg-sky-500">
          <a href={icon.link} className="group-hover:text-white">
            {icon.icon}
          </a>
        </div>
      ))}
    </motion.div>
  );
};

export default Social;
