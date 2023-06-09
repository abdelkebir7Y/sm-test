import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IoTrashOutline } from "react-icons/io5";
import { useUpdateTaskMutation } from "../api";

import { Button, Input, Modal, Textarea } from "../components";
import { AppContext } from "../contexts";
import { DeleteTask } from "./delete-task.container";

export const EditTask = () => {
  const { showEditTaskModal, closeEditTaskModal, taskToUpdate } =
    useContext(AppContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const queryClient = useQueryClient();
  const updateTaskMutation = useUpdateTaskMutation();

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ values: { ...taskToUpdate } });

  const onSubmit = ({ title, description }) => {
    updateTaskMutation.mutate(
      {
        title,
        description,
        status: taskToUpdate.status,
        id: taskToUpdate.id,
      },
      {
        onSuccess() {
          reset();
          closeEditTaskModal();
          queryClient.refetchQueries(["tasks"]);
        },
      }
    );
  };

  return (
    <Modal visible={showEditTaskModal} close={closeEditTaskModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="title"
          label="Title"
          register={register}
          name="title"
          error={errors.title?.message}
          rules={{
            required: { value: true, message: "this field is required" },
          }}
        />
        <Textarea
          placeholder="description"
          name="description"
          label="Description"
          register={register}
          error={errors.description?.message}
          rules={{
            required: { value: true, message: "this field is required" },
          }}
          rows={5}
          maxLength={200}
        />
        <div className="flex justify-between">
          <Button
            text="Save"
            className="mt-3 flex w-32 justify-center "
            type="submit"
          />
          <Button
            icon={<IoTrashOutline size={24} className="text-white" />}
            className="mt-3 flex justify-center bg-red-500  hover:bg-red-600 "
            onClick={toggleDeleteModal}
            type="button"
          />
        </div>
      </form>
      <DeleteTask
        taskId={taskToUpdate.id}
        visible={showDeleteModal}
        close={toggleDeleteModal}
      />
    </Modal>
  );
};
