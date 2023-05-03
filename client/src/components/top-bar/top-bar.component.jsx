import React from "react";

export const TopBar = () => {
  return (
    <div className="w-fill flex h-20 flex-col justify-center">
      <div className="w-fill  mx-2 flex items-center rounded-lg bg-[#7ec715bb] px-5 shadow-sm">
        <h1 className="my-3 font-logo text-3xl text-[#861200]">
          Task Manager App
        </h1>
      </div>
    </div>
  );
};
