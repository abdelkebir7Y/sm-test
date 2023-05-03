import { useMutation } from "@tanstack/react-query";

const UPDATE_TASK = "http://localhost:4000/task";

const updateTask = ({ id, status, title, description }) => {
  return fetch(UPDATE_TASK, {
    method: "PUT",
    body: JSON.stringify({
      id,
      status,
      title,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const useUpdateTaskMutation = () => {
  return useMutation(updateTask);
};
