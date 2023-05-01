import React from "react";
import { IoAddOutline } from "react-icons/io5";

import { Button, TaskCard } from "../components";

export const TasksList = ({ title }) => {
  return (
    <div className="flex h-5/6 w-72 flex-col rounded-2xl bg-white px-1 py-3 shadow-xl">
      <div className="border-b pb-2">
        <h1 className="text-xl font-medium	">{title}</h1>
      </div>
      <div className="grow p-1">
        <TaskCard
          title="card title"
          description="Lorem esse occaecat voluptate cillum esse voluptate labore reprehenderit ea cupidatat ad."
        />
      </div>
      <div className=" border-t pt-2">
        <Button
          icon={<IoAddOutline size={24} className="mr-2 text-white" />}
          text="Add a card"
        ></Button>
      </div>
    </div>
  );
};