//React
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
//Scss styling file
import "./CRUDForm.scss";
//Redux store
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  modifyUser,
  setEditID,
} from "../../redux store/features/dataSlice";
//Components
import FormInput from "../FormInput/FormInput";

const CRUDForm = () => {
  //Object holding user data to be modified
  let [editUser, setEditUser] = useState();
  //User id to be editted, used to detect changes
  const editID = useSelector((state) => state.userData.editID);
  //Array of users in store to get user to bet editted
  const data = useSelector((state) => state.userData.data);
  //Form variables
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();
  //Variable for dispatching store actions
  const dispatch = useDispatch();
  //Function called on form submit to add data to store, then resets form
  const formSubmit = (data) => {
    if (editID !== undefined) {
      editUser = { ...editUser, ...data };
      dispatch(setEditID(undefined));
      dispatch(modifyUser(editUser));
    } else {
      dispatch(addUser(data));
    }
    reset();
  };
  //If editId is changed the form data is filled with user object data
  useEffect(() => {
    if (editID !== undefined) {
      let temp = data.find((element) => element.id === editID);
      setEditUser(temp);
      setValue("First Name", temp["First Name"]);
      setValue("Last Name", temp["Last Name"]);
      setValue("Phone", temp["Phone"]);
    }
  }, [editID]);
  return (
    <div className="crud-form">
      <form onSubmit={handleSubmit(formSubmit)}>
        <h2 className="crud-form__title">Add/Modify User</h2>
        {/* First name input */}
        <FormInput
          type="text"
          placeholder="First Name"
          label="First Name"
          validations={{ required: true }}
          register={register}
          error={errors.Name}
        >
          {/* Field errors */}
          {errors["First Name"]?.type === "required" && (
            <p className="crud-form__error">This field is required</p>
          )}
        </FormInput>
        {/* Last name input */}
        <FormInput
          type="text"
          placeholder="Last Name"
          label="Last Name"
          validations={{ required: true }}
          register={register}
          error={errors.Name}
        >
          {/* Field errors */}
          {errors["Last Name"]?.type === "required" && (
            <p className="crud-form__error">This field is required</p>
          )}
        </FormInput>
        {/* Phone input */}
        <FormInput
          type="tel"
          placeholder="01234567890"
          label="Phone"
          validations={{ required: true, minLength: 11, maxLength: 11 }}
          register={register}
          error={errors.Name}
        >
          {/* Field errors */}
          {errors["Phone"]?.type === "required" && (
            <p className="crud-form__error">This field is required</p>
          )}
          {(errors["Phone"]?.type === "minLength" ||
            errors["Phone"]?.type === "maxLength") && (
            <p className="crud-form__error">Length should be 11 digits</p>
          )}
        </FormInput>
        {/* Actions buttons */}
        <div className="crud-form__actions">
          {/* Submit button */}
          <button type="submit" className="crud-form__button">
            Add
          </button>
          {/* Clear button */}
          <button
            type="button"
            className="crud-form__button"
            onClick={() => {
              reset();
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default CRUDForm;
