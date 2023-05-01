import React from "react";

export const Button = ({ icon, text, className }) => {
  return (
    <button
      className={`mx-1 flex h-10 items-center rounded bg-green-500 px-3  py-1  text-white  hover:bg-green-600 ${className} `}
    >
      {icon}
      <p className="text-sm font-medium ">{text}</p>
    </button>
  );
};
