import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export const Modal = ({ close, visible = true, children }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-40 flex items-center justify-center ">
      <div
        onClick={close}
        className=" absolute -z-10 h-full w-full bg-black opacity-25"
      />
      <div className="flex max-h-full w-96 max-w-full flex-col rounded-2xl bg-white p-3 shadow-xl">
        <IoCloseOutline
          size={32}
          className="cursor-pointer self-end hover:scale-110"
          onClick={close}
        />
        {children}
      </div>
    </div>
  );
};
