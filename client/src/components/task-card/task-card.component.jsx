import React, { useContext } from "react";
import { IoCreate } from "react-icons/io5";
import { AppContext } from "../../contexts";

export const TaskCard = ({ title, description }) => {
  const { openEditTaskModal } = useContext(AppContext);

  return (
    <div className="group rounded  bg-gray-100  p-2 hover:bg-green-50 ">
      <div className="flex justify-between py-1">
        <p className="text-sm font-medium">{title}</p>
        <IoCreate
          size={24}
          className="cursor-pointer text-gray-700 hover:scale-125 hover:text-gray-900"
          onClick={openEditTaskModal}
        />
      </div>
      <div className="border-b" />
      <p className="truncate text-xs leading-normal hover:text-clip group-hover:whitespace-normal ">
        {description}
      </p>
    </div>
  );
};
