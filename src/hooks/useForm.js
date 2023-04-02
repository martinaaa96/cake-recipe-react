import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

  console.log(onSubmitHandler)

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
      
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
    };

    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
       
        setValues(newValues);

      console.log(newValues)
    };


    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
    };
};