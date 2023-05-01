import React from "react";
import Image from "../../assets/images/background.png";

export const Background = () => {
  return (
    <img
      src={Image}
      alt=""
      className="absolute bottom-0 left-0 right-0 top-0 h-full w-full opacity-30"
    />
  );
};
