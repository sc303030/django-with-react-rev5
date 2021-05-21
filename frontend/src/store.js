import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  jwtToken: "",
};

const AppContext = createContext(initialState);

const reducer = (pervState, action) => {
  const { type } = action;
  if (type === SET_TOKEN) {
    const { payload: jwtToken } = action;
    return {
      ...pervState,
      jwtToken,
    };
  } else if (type === DELETE_TOKEN) {
    return {
      ...pervState,
      jwtToken: "",
    };
  }
  return pervState;
};

export const AppProvider = ({ children }) => {
  const { store, dispatch } = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

//Actions
const SET_TOKEN = "APP/SET_TOKEN";
const DELETE_TOKEN = "APP/DELETE_TOKEN";

//Action Creators
export const setToken = (token) => ({ type: SET_TOKEN, payload: token });
export const deleteToken = () => ({ type: DELETE_TOKEN });
