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

  return (

    <FormContext.Provider value={{
      state,
      formState,
      setFormState,
    }}>
      {children}
    </FormContext.Provider>
  )
}