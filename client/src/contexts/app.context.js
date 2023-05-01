import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const toggleAddTaskModal = () => {
    setShowAddTaskModal(!showAddTaskModal);
  };

  return (
    <AppContext.Provider value={{ showAddTaskModal, toggleAddTaskModal }}>
      {children}
    </AppContext.Provider>
  );
};
