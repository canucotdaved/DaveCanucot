import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

interface PropType {
  open: boolean;
  setisOpen: (boolean: boolean) => void;
}

const MenuToggle = ({ open, setisOpen }: PropType) => {
  return (
    <button
      className="absolute right-[1.5rem] sm:right-[3rem] top-9 w-[35px] md:hidden"
      onClick={() => setisOpen(!open)}
    >
      {open ? (
        <XIcon className="text-xl text-black" />
      ) : (
        <MenuIcon className="text-xl text-black" />
      )}
    </button>
  );
};

export default MenuToggle;
