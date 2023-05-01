import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { useAddTaskMutation } from "../api";

import { Button, Input, Modal, Textarea } from "../components";
import { AppContext } from "../contexts";

export const AddTask = () => {
  const { showAddTaskModal, closeNewTaskModal, newTaskListId } =
    useContext(AppContext);
  const queryClient = useQueryClient();
  const addTaskMutation = useAddTaskMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = ({ title, description }) => {
    addTaskMutation.mutate(
      {
        title,
        description,
        listId: newTaskListId,
      },
      {
        onSuccess() {
          reset();
          closeNewTaskModal();
          queryClient.refetchQueries(["tasks"]);
        },
      }
    );
  };

  useEffect(() => {
    if (!showAddTaskModal) {
      reset();
    }
  }, [showAddTaskModal, reset]);

  return (
    <Modal visible={showAddTaskModal} close={closeNewTaskModal}>
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
        <Button
          text="Save"
          className="mt-3 flex w-32 justify-center self-center"
          type="submit"
        />
      </form>
    </Modal>
  );
};
