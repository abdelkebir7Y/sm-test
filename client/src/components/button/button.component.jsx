import React from "react";

export const Button = ({ icon, text }) => {
  return (
    <button className=" mx-1 flex items-center rounded bg-green-500 px-3  py-1  text-white  hover:bg-green-600 ">
      {icon}
      <p className="text-sm font-medium ">{text}</p>
    </button>
  );
};
