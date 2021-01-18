import { useState } from "react";

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.files ? target.files : (target.hasOwnProperty('checked') ? (target.checked ? target.checked : false) : target.value)
    })
  }

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  return [values, handleInputChange, reset];
}

export default useForm;