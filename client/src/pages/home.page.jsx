import React from "react";

import { Background, TopBar } from "../components";

import { STATUS_VARIANT } from "../constant";

import { AddTask, EditTask, TasksList } from "../containers";

export const Home = () => {
  const statutes = Object.values(STATUS_VARIANT);
  return (
    <div className="flex h-full w-full flex-col  font-sans">
      <Background />
      <TopBar />
      <div className="relative flex max-h-90 grow  justify-center gap-3  p-4">
        {statutes.map((status) => (
          <TasksList key={status} status={status} />
        ))}
      </div>
      <AddTask />
      <EditTask />
    </div>
  );
};
