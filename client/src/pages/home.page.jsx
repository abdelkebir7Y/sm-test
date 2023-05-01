import React from "react";
import { useListsQuery } from "../api";

import { AddTask, EditTask, TasksList } from "../containers";

export const Home = () => {
  const { data: lists } = useListsQuery();

  return (
    <div className="relative flex h-full w-full items-center  justify-center gap-2 bg-green-50 px-10 font-sans">
      {lists?.length &&
        lists.map(({ title, id }) => <TasksList key={id} title={title} />)}
      <AddTask />
      <EditTask />
    </div>
  );
};
