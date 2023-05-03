import React, { useContext } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useTasksQuery } from "../api";

import { Button, TaskCard } from "../components";
import { STATUS_VARIANT } from "../constant";

import { AppContext } from "../contexts";

export const TasksList = ({ status }) => {
  const { openNewTaskModal } = useContext(AppContext);
  const { data: tasks } = useTasksQuery(status);

  return (
    <div className="flex h-full max-h-full w-72 flex-col rounded-2xl bg-white px-1 py-3 shadow-xl">
      <div className="border-b pb-2">
        <h1 className="text-center text-xl font-medium	">{status}</h1>
      </div>
      <div className="flex grow flex-col gap-1 overflow-auto scroll-smooth p-1">
        {Boolean(tasks?.length) &&
          tasks.map(({ id, title, status, description }) => (
            <TaskCard
              key={id}
              id={id}
              title={title}
              description={description}
              status={status}
            />
          ))}
      </div>
      {status === STATUS_VARIANT.toDo && (
        <div className=" border-t pt-2">
          <Button
            icon={<IoAddOutline size={24} className="mr-2 text-white" />}
            text="Add new task"
            onClick={openNewTaskModal}
          ></Button>
        </div>
      )}
    </div>
  );
};
