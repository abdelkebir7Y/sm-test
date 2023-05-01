import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const toggleAddTaskModal = () => {
    setShowAddTaskModal(!showAddTaskModal);
  };

  const toggleEditTaskModal = () => {
    setShowEditTaskModal(!showEditTaskModal);
  };

  return (
    <AppContext.Provider
      value={{
        showAddTaskModal,
        showEditTaskModal,
        openAddTaskModal: toggleAddTaskModal,
        closeAddTaskModal: toggleAddTaskModal,
        openEditTaskModal: toggleEditTaskModal,
        closeEditTaskModal: toggleEditTaskModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
