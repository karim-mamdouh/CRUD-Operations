//React
import PropTypes from "prop-types";
//Scss styling file
import "./FormInput.scss";

const FormInput = ({
  labelText,
  label,
  register,
  validations,
  type,
  placeholder,
  children,
}) => {
  return (
    <>
      <label>{labelText}</label>
      <input
        placeholder={placeholder}
        {...register(label, validations)}
        type={type}
      />
      {children}
    </>
  );
};

//Props type validation
FormInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validations: PropTypes.object,
};

export default FormInput;
