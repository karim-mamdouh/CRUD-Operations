//React
import React from "react";
//Scss styling file
import "./FormInput.scss";

const FormInput = ({
  label,
  register,
  validations,
  type,
  placeholder,
  error,
  children,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        {...register(label, validations)}
        type={type}
      />
      {children}
    </>
  );
};

export default FormInput;
