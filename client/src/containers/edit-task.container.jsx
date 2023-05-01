import React from "react";
import { useContext } from "react";
import { IoTrashOutline } from "react-icons/io5";

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
        maxLength="100"
        rows={5}
      />
      <div className="flex justify-between">
        <Button text="Save" className="mt-3 flex w-32 justify-center " />
        <Button
          icon={<IoTrashOutline size={24} className="text-white" />}
          className="mt-3 flex justify-center bg-red-500  hover:bg-red-600 "
        />
      </div>
    </Modal>
  );
};
