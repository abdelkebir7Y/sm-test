import { useQuery } from "@tanstack/react-query";

import { getQueryKey } from "../common/utils";

const GET_TASKS_URL = "http://localhost:4000/task/all";

const getTasks = (signal) => {
  return fetch(GET_TASKS_URL, {
    signal,
  }).then((res) => res.json());
};

const selectTasksByListId = (listId) => (tasks) => {
  const filteredTask = tasks.filter((task) => task.listId === listId);
  return filteredTask;
};

export const useTasksQuery = (listId) => {
  const queryKey = getQueryKey("tasks");
  return useQuery(queryKey, ({ signal }) => getTasks(signal), {
    select: selectTasksByListId(listId),
  });
};
