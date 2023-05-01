import React from "react";
import { useListsQuery } from "../api";
import { Background, TopBar } from "../components";

import { AddTask, EditTask, TasksList } from "../containers";

export const Home = () => {
  const { data: lists } = useListsQuery();

  return (
    <div className="flex h-full w-full flex-col  font-sans">
      <Background />
      <TopBar />
      <div className="relative flex max-h-90 grow  justify-center gap-3  p-4">
        {lists?.length &&
          lists.map(({ title, id }) => (
            <TasksList key={id} id={id} title={title} />
          ))}
      </div>
      <AddTask />
      <EditTask />
    </div>
  );
};
