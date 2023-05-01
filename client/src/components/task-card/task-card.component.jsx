import { useQueryClient } from "@tanstack/react-query";
import React, { useContext } from "react";
import {
  IoCreate,
  IoArrowBackSharp,
  IoArrowForwardSharp,
} from "react-icons/io5";
import { useUpdateTaskMutation } from "../../api";

import { AppContext } from "../../contexts";

import { Button } from "../button/button.component";

export const TaskCard = ({ id, listId, title, description }) => {
  const { openEditTaskModal } = useContext(AppContext);

  const queryClient = useQueryClient();
  const updateTaskMutation = useUpdateTaskMutation();

  const moveToNextList = () => {
    updateTaskMutation.mutate(
      {
        title,
        description,
        listId: listId + 1,
        id: id,
      },
      {
        onSuccess() {
          queryClient.refetchQueries(["tasks"]);
        },
      }
    );
  };

  const moveToPreviousList = () => {
    updateTaskMutation.mutate(
      {
        title,
        description,
        listId: listId - 1,
        id: id,
      },
      {
        onSuccess() {
          queryClient.refetchQueries(["tasks"]);
        },
      }
    );
  };

  return (
    <div className="group rounded  bg-gray-100  p-2 hover:bg-green-50 ">
      <div className="flex justify-between py-1">
        <p className="text-sm font-medium">{title}</p>
        <IoCreate
          size={24}
          className="cursor-pointer text-gray-700 hover:scale-125 hover:text-gray-900"
          onClick={openEditTaskModal({ id, title, listId, description })}
        />
      </div>
      <div className="mb-1 border-b" />
      <p className="truncate text-xs leading-normal hover:text-clip group-hover:whitespace-normal ">
        {description}
      </p>
      <div className="invisible h-0 group-hover:visible group-hover:h-auto">
        <div className="mt-1 border-b" />
        <div className="flex justify-between">
          {listId !== 1 ? (
            <Button
              onClick={moveToPreviousList}
              icon={<IoArrowBackSharp size={20} />}
              className=" mt-1 h-7 bg-gray-300 text-xs text-gray-800  hover:bg-gray-400"
            />
          ) : (
            <div />
          )}
          {listId !== 3 ? (
            <Button
              onClick={moveToNextList}
              icon={<IoArrowForwardSharp size={20} />}
              className=" mt-1 h-7 bg-gray-300 text-xs text-gray-800  hover:bg-gray-400"
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};
