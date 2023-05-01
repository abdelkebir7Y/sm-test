import React, { useContext } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useTasksQuery } from "../api";

import { Button, TaskCard } from "../components";

import { AppContext } from "../contexts";

export const TasksList = ({ title, id }) => {
  const { openAddTaskModal } = useContext(AppContext);
  const { data: tasks } = useTasksQuery(id);

  return (
    <div className="flex h-5/6 w-72 flex-col rounded-2xl bg-white px-1 py-3 shadow-xl">
      <div className="border-b pb-2">
        <h1 className="text-xl font-medium	">{title}</h1>
      </div>
      <div className="flex grow flex-col gap-1 overflow-auto scroll-smooth p-1">
        {tasks?.length &&
          tasks.map(({ id, title, description }) => (
            <TaskCard key={id} title={title} description={description} />
          ))}
      </div>
      <div className=" border-t pt-2">
        <Button
          icon={<IoAddOutline size={24} className="mr-2 text-white" />}
          text="Add a card"
          onClick={openAddTaskModal}
        ></Button>
      </div>
    </div>
  );
};
