import React, { useCallback } from "react";
import { useReducer } from "react";
import DetailsContext from "./AuthContext";

const defaultState = {
  user: null,
};

const detailsReducer = (state, action) => {
  if (action.type === "SET_USER") {
    const updatedState = {
      user: action.user,
    };
    return updatedState;
  }

  return defaultState;
};

const ContextProvider = (props) => {
  const [detailsState, dispatchDetailsAction] = useReducer(
    detailsReducer,
    defaultState
  );

  const setUser = useCallback((user) => {
    dispatchDetailsAction({ type: "SET_USER", user });
  }, []);

  const detailsContext = {
    user: detailsState.user,
    setUser: setUser,
  };

  return (
    <DetailsContext.Provider value={detailsContext}>
      {props.children}
    </DetailsContext.Provider>
  );
};

export default ContextProvider;
