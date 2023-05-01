import React from "react";

import { AddTask, TasksList } from "../containers";

export const Home = () => {
  return (
    <div className="relative flex h-full w-full items-center bg-green-50 px-10 font-sans">
      <TasksList title="To do" />
      <AddTask />
    </div>
  );
};
