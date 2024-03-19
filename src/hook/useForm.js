import { useState } from "react";

export const useForm = () => {
  const [formState, setFormState] = useState({});

  const onChangeInput = (field,value) => {
    
    setFormState({
      ...formState,
      [field]: value,
    });
    console.log(formState);
  };

  return {
    ...formState,
    formState,
    onChangeInput,
    setFormState,
  };
};
