import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const REDUCER_TYPES = {
  OPEN_NEW_TASK_MODAL: "OPEN_NEW_TASK_MODAL",
  CLOSE_NEW_TASK_MODAL: "CLOSE_NEW_TASK_MODAL",
  OPEN_EDIT_TASK_MODAL: "OPEN_EDIT_TASK_MODAL",
  CLOSE_EDIT_TASK_MODAL: "CLOSE_EDIT_TASK_MODAL",
};

const initialState = {
  showAddTaskModal: false,
  showEditTaskModal: false,
  newTaskListId: null,
  taskToUpdate: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REDUCER_TYPES.OPEN_NEW_TASK_MODAL:
      return { ...state, showAddTaskModal: true, newTaskListId: payload };
    case REDUCER_TYPES.CLOSE_NEW_TASK_MODAL:
      return { ...state, showAddTaskModal: false, newTaskListId: null };
    case REDUCER_TYPES.OPEN_EDIT_TASK_MODAL:
      return { ...state, showEditTaskModal: true, taskToUpdate: payload };
    case REDUCER_TYPES.CLOSE_EDIT_TASK_MODAL:
      return { ...state, showEditTaskModal: false, taskToUpdate: {} };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openNewTaskModal = (listId) => () => {
    dispatch({ type: REDUCER_TYPES.OPEN_NEW_TASK_MODAL, payload: listId });
  };

  const closeNewTaskModal = () => {
    dispatch({ type: REDUCER_TYPES.CLOSE_NEW_TASK_MODAL });
  };

  const openEditTaskModal = (taskId) => () => {
    dispatch({ type: REDUCER_TYPES.OPEN_EDIT_TASK_MODAL, payload: taskId });
  };

  const closeEditTaskModal = () => {
    dispatch({ type: REDUCER_TYPES.CLOSE_EDIT_TASK_MODAL });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openNewTaskModal,
        closeNewTaskModal,
        openEditTaskModal,
        closeEditTaskModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
