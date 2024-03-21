import { useReducer, useState } from "react";
import { FormContext } from "../contexts/FormContext";
import { FormReducer } from "../reducers/FormReducer";
import { types } from "../types/types";
import { axiosApi } from "../config/AxiosApi";

const initialValues = {
  isLoading: true,
}

export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({});
  const [state, dispatch] = useReducer(FormReducer, initialValues);
  const { UserName = "",
    Email = "",
    Password = "", } = formState;

  const postLogin = async () => {
    const res = await axiosApi.post('/auth/login', {
      username: UserName, password: Password
    })
    console.log(res.status)
  }

  const postSignUp = async () => {
    const res = await axiosApi.post('/users', {
      email: Email,
      username: UserName,
      password: Password,
      name: {
        firstname: 'null',
        lastname: 'null'
      },
      address: {
        city: 'null',
        street: 'null',
        number: 0,
        zipcode: 'null',
        geolocation: {
          lat: 'null',
          long: 'null'
        }
      },
      phone: 'null'
    })
    console.log(res.status)
  }

  return (

    <FormContext.Provider value={{
      state,
      formState,
      setFormState,
      postLogin,
      postSignUp,
    }}>
      {children}
    </FormContext.Provider>
  )
}