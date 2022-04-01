import React from "react";

interface TextProp {
  text: string;
}

const Paragraph = (text: TextProp) => {
  return (
    <p className="font-normal text-xl leading-relaxed text-gray-800 bg-white">
      {text.text}
    </p>
  );
};

export default Paragraph;
