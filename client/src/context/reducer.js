import {
  TOGGLE_SIDEBAR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
    };
  }

  throw new Error(`no such action ${action.type}`);
};

export default reducer;
