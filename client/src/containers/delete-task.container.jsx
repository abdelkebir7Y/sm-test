import { useQueryClient } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useDeleteTaskMutation } from "../api";

import { Button, Modal } from "../components";
import { AppContext } from "../contexts";

export const DeleteTask = ({ taskId, visible, close }) => {
  const { closeEditTaskModal } = useContext(AppContext);
  const queryClient = useQueryClient();
  const deleteTaskMutation = useDeleteTaskMutation();

  const onDelete = () => {
    deleteTaskMutation.mutate(
      {
        id: taskId,
      },
      {
        onSuccess() {
          queryClient.refetchQueries(["tasks"]);
          close();
          closeEditTaskModal();
        },
      }
    );
  };
  return (
    <Modal visible={visible} close={close}>
      <p className="mb-3 mt-1 text-center text-sm">
        are you sure you want to delete this task
      </p>
      <Button
        text="Confirm"
        className="mt-3 flex w-32 justify-center self-center bg-red-500  hover:bg-red-600 "
        onClick={onDelete}
      />
    </Modal>
  );
};
