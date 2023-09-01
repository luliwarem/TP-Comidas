import React, { useContext } from "react";

export const initialState = {
  userToken: "",
  platos: [],
};

export const ActionTypes = {
  setUserToken: "SET_USER_TOKEN",
  setPlatos: "SET_PLATOS"
};

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.setUserToken: {
      return { ...state, userToken: action.newValue };
    }
    case ActionTypes.setPlatos: {
      return { ...state, platos: action.newValue };
    }
    default: {
      return state;
    }
  }
};

export const initialContext = {
  contextState: initialState,
  setContextState: () => {},
};

const Context = React.createContext(initialContext);

export function ContextProvider({ children, initialState = initialState }) {
  const [contextState, setContextState] = React.useReducer(
    reducer,
    initialState
  );

  return <Context.Provider value={{contextState, setContextState}}>{children} </Context.Provider>;
}


export const useContextState = () => useContext(Context)