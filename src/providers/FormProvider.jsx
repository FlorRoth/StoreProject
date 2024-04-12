import { useReducer, useState } from "react";
import { FormContext } from "../contexts/FormContext";
import { FormReducer } from "../reducers/FormReducer";
import { axiosApi } from "../config/AxiosApi";
import { useNavigation } from "@react-navigation/core";

const initialValues = {
  isLogged: false,
  user: {},
  isLoading: false,
  token: "",
  msg: "",
};

export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({});
  const [state, dispatch] = useReducer(FormReducer, initialValues);
  const { UserName = "", Email = "", Password = "" } = formState;
  const navigation = useNavigation();

  const postLogin = async () => {
    dispatch({
      type: "LOGIN",
      payload: {
        ...initialValues,
        isLoading: true,
      },
    });

    try {
      const res = await axiosApi.post("/auth/login", {
        username: UserName,
        password: Password,
      });

      dispatch({
        type: "LOGIN",
        payload: {
          user: {
            username: UserName,
          },
          isLogged: true,
          token: res.data,
          msg: "Logged in",
          isLoading: false,
        },
      });
    } catch (error) {
      dispatch({
        type: "LOGIN",
        payload: {
          user: {
            username: UserName,
          },
          isLogged: false,
          token: "",
          msg: "invalidCredential",
          isLoading: false,
        },
      });
    }
  };

  const getUserData = async () => {
    dispatch({
      type: "LOGIN",
      payload: {
        ...state,
        isLoading: true,
      },
    });
    try {
      const res = await axiosApi.get("/users/1");
      dispatch({
        type: "LOGIN",
        payload: { ...state, isLoading: false, user: res.data },
      });
    } catch (error) {
      dispatch({
        type: "LOGIN",
        payload: {
          user: {
            username: UserName,
          },
          isLogged: false,
          token: "",
          msg: "invalidCredential",
          isLoading: false,
        },
      });
    }
  };

  const postSignUp = async () => {
    const res = await axiosApi.post("/users", {
      email: Email,
      username: UserName,
      password: Password,
      name: {
        firstname: "null",
        lastname: "null",
      },
      address: {
        city: "null",
        street: "null",
        number: 0,
        zipcode: "null",
        geolocation: {
          lat: "null",
          long: "null",
        },
      },
      phone: "null",
    });
    navigation.navigate("SuccessfulScreen");
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <FormContext.Provider
      value={{
        state,
        formState,
        logout,
        setFormState,
        getUserData,
        postLogin,
        postSignUp,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
