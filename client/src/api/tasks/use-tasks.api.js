import { useQuery } from "@tanstack/react-query";

import { getQueryKey } from "../common/utils";

const GET_TASKS_URL = "http://localhost:4000/task/all";

const getTasks = (signal) => {
  return fetch(GET_TASKS_URL, {
    signal,
  }).then((res) => res.json());
};

const selectTasksByStatus = (status) => (tasks) => {
  const filteredTask = tasks.filter((task) => task.status === status);
  return filteredTask;
};

export const useTasksQuery = (status) => {
  const queryKey = getQueryKey("tasks");
  return useQuery(queryKey, ({ signal }) => getTasks(signal), {
    select: selectTasksByStatus(status),
  });
};
