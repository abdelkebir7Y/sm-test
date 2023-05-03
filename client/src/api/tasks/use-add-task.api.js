import { useMutation } from "@tanstack/react-query";
import { STATUS_VARIANT } from "../../constant";

const ADD_TASK = "http://localhost:4000/task";

const addNewTask = ({ title, description }) => {
  return fetch(ADD_TASK, {
    method: "POST",
    body: JSON.stringify({
      status: STATUS_VARIANT.toDo,
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
