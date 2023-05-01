import React from "react";

import { TasksList } from "../containers";

import { Button, Input, Modal, Textarea } from "../components";

export const Home = () => {
  return (
    <div className="relative flex h-full w-full items-center bg-green-50 px-10 font-sans">
      <TasksList title="To do" />
      <Modal>
        <Input placeholder="title" label="Title" />
        <Textarea
          placeholder="description"
          label="Description"
          maxlength="100"
          rows={5}
        />
        <Button
          text="Save"
          className="mt-3 flex w-32 justify-center self-center"
        />
      </Modal>
    </div>
  );
};
