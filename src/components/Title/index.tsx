import React from "react";

interface TitleProp {
  text: string;
}

const Title = (text: TitleProp) => {
  return (
    <>
      <h2 className="font-bold text-3xl text-sky-500 ">{text.text}</h2>
    </>
  );
};

export default Title;
