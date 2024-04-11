import { types } from "../types/types";

export const FormReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isLogged: action.payload.isLogged,
        token: action.payload.token,
        msg: action.payload.msg,
        isLoading: action.payload.isLoading,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLogged: false,
        token: "",
        msg: "User logged out",
      };
    default:
      return state;
  }
};
