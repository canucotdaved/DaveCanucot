import React from "react";

const Scroller = () => {
  return (
    <div className="flex items-center absolute bottom-[100px]">
      <div className="w-[18px] h-[40px] border-[1px] border-solid border-white relative rounded-[15px]">
        <div className="w-[2px] rounded-[8px] h-[12px] bg-white relative my-0 mx-auto animate-scroller"></div>
      </div>
      <h4 className="text-gray-600 ml-4 animate-pulse">
        Scroll
      </h4>
    </div>
  );
};

export default Scroller;
