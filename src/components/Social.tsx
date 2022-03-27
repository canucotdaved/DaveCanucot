import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

const Social = () => {
  let Icons = [
    {
      icon: (
        <AiOutlineTwitter className="group-hover:fill-white" />
      ),
      link: "/",
    },
    {
      icon: (
        <FiGithub className="group-hover:fill-white fill-black" />
      ),
      link: "/",
    },
    {
      icon: (
        <FiLinkedin className="group-hover:fill-white fill-black" />
      ),
      link: "/",
    },
    {
      icon: (
        <FiFacebook className="group-hover:fill-white fill-black" />
      ),
      link: "/",
    },
  ];
  return (
    <div className="flex">
      {Icons.map((icon, index) => (
        <div className="w-[33.78px] h-[33.78px] rounded-full bg-[#928A97] flex items-center justify-center mr-3 cursor-pointer group hover:bg-sky-500">
          <a
            href={icon.link}
            className="group-hover:text-white"
          >
            {icon.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Social;
