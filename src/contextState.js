import React, { useContext } from "react";

export const initialState = {
  userToken: "",
  menu:[]
};

export const ActionTypes = {
  setUserToken: "SET_USER_TOKEN",
  setMenu: "SET_MENU"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setUserToken: {
      return { ...state, userToken: action.newValue };
    }
    case ActionTypes.setMenu: {
      return {...state, menu: [...state.menu, action.newValue]}
    }
    case ActionTypes.eliminarMenu: {
      return{...state, menu: menu.slice(menu.indexOf(newValue))}
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