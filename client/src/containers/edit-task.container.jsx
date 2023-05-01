import React from "react";
import { useContext } from "react";

import { Button, Input, Modal, Textarea } from "../components";
import { AppContext } from "../contexts";

export const EditTask = () => {
  const { showEditTaskModal, closeEditTaskModal } = useContext(AppContext);

  return (
    <Modal visible={showEditTaskModal} close={closeEditTaskModal}>
      <Input placeholder="title" label="Title" />
      <Textarea
        placeholder="description"
        label="Description"
        maxlength="100"
        rows={5}
      />
      <div className="flex justify-between">
        <Button
          text="Delete"
          className="mt-3 flex w-32 justify-center bg-red-500  hover:bg-red-600 "
        />
        <Button text="Save" className="mt-3 flex w-32 justify-center " />
      </div>
    </Modal>
  );
};
