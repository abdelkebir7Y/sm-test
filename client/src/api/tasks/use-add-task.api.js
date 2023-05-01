import { useMutation } from "@tanstack/react-query";

const ADD_TASK = "http://localhost:4000/task";

const addNewTask = ({ listId, title, description }) => {
  return fetch(ADD_TASK, {
    method: "POST",
    body: JSON.stringify({
      listId,
      title,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const useAddTaskMutation = () => {
  return useMutation(addNewTask);
};
