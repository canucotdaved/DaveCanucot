import React, { useState } from "react";
import {
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid";

interface PropType {
  name?: string;
  link?: string;
}

const Header = ({
  name,
  link,
}: PropType) => {
  const [open, setOpen] =
    useState(false);

  let Link = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Skills", link: "/" },
    { name: "Works", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <header className=" fixed w-full top-0 left-0 bg-white md:bg-transparent  ">
      <div className="md:flex items-center justify-between  py-7 max-w-[1640px] mx-auto my-0 px-7">
        <h1 className="font-bold text-4xl cursor-pointer text-gray-800 md:text-white flex flex-col">
          デイブ
          <span className="text-xs tracking-[1.2em]">
            Deibu
          </span>
        </h1>
        <div
          className="absolute right-8 top-9 w-[35px]  md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XIcon className="text-xl text-black" />
          ) : (
            <MenuIcon className="text-xl text-black" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-495px]"
          } md:opacity-100 opacity-0 bg-white md:bg-transparent`}
        >
          {Link.map((link, index) => (
            <li
              key={index}
              className="md:ml-8 text-xl md:my-0 my-5 "
            >
              <a
                href={link.link}
                className="text-gray-800 md:text-white hover:text-orange-500 duration-300 transition-all ease-in font-semibold"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
