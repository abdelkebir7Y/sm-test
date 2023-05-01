import React from "react";
import { useContext } from "react";

import { Button, Input, Modal, Textarea } from "../components";
import { AppContext } from "../contexts";

export const AddTask = () => {
  const { showAddTaskModal, closeAddTaskModal } = useContext(AppContext);

  return (
    <Modal visible={showAddTaskModal} close={closeAddTaskModal}>
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
  );
};
