import React, { useReducer, useContext } from "react";
import reducer from "./reducer.js";
import axios from "axios";
import { TOGGLE_SIDEBAR } from "./action.js";

import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./action";

const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  showSidebar: false,
  user: user ? JSON.parse(user) : null,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const addUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
  };

  const registerUser = async (currentUser) => {
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      const { user } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user },
      });
      addUserToLocalStorage(user);
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post("/api/v1/auth/login", currentUser);
      const { user } = response.data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user },
      });
      // console.log(currentUser);
      addUserToLocalStorage(user);
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, toggleSidebar, registerUser, loginUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
