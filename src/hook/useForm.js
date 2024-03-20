import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export const useForm = () => {
  const { formState, setFormState } = useContext(FormContext);

  const onChangeInput = (field, value) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  return {
    ...formState,
    formState,
    onChangeInput,
    setFormState,
  };
};
