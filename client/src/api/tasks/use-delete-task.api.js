import { useMutation } from "@tanstack/react-query";

const DELETE_TASK = "http://localhost:4000/task";

const deleteTask = ({ id }) => {
  return fetch(DELETE_TASK, {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const useDeleteTaskMutation = () => {
  return useMutation(deleteTask);
};
