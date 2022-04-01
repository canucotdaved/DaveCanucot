import { url } from "inspector";
import React from "react";
import imageBg from "../../assets/image-bg.png";
interface ImageProp {
  image: string;
}

const Images = (image: ImageProp) => {
  const style = { backgroundImage: `url(${imageBg})` };
  return (
    <div className="bg-no-repeat" style={style}>
      <img
        className="pl-10 pt-12"
        src={`${image.image}`}
        alt="img of the author"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Images;
