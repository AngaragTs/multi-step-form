"use client";

import { use, useState } from "react";
import { FormInput } from "../_componant/forminput";

const checkIfInputHasSymbols = (string) => {
  return /[!@#$%^&*()_+?><{}":"]/.test(string);
};

const checkIfInputHasNumbers = (string) => {
  return /\d/.test(string);
};

export const StepOne = (props) => {
  const { HandleNextStep } = props;
  const [formValues, setFormValues] = useState({
    Firstname: "",
    Lastname: "",
    Username: "",
  });

  const [errorState, setErrorstate] = useState({});

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const validateInput = () => {
    const errors = {};

    if (
      checkIfInputHasNumbers(formValues.Firstname) ||
      checkIfInputHasSymbols(formValues.Firstname)
    ) {
      errors.Firstname =
        "First name cannot contain special characters or numbers";
    }

    if (
      checkIfInputHasNumbers(formValues.Lastname) ||
      checkIfInputHasSymbols(formValues.Lastname)
    ) {
      errors.Lastname =
        "First name cannot contain special characters or numbers";
    }
    if (
      checkIfInputHasNumbers(formValues.Username) ||
      checkIfInputHasSymbols(formValues.Username)
    ) {
      errors.Username =
        "User name cannot contain special characters or numbers";
    }
    return errors;
  };

  const HandleContinueButton = () => {
    const errors = validateInput();
    if (Object.keys(errors).length === 0) {
      setErrorstate({});
      HandleNextStep();
    } else {
      setErrorstate(errors);
    }
  };

  const shouldDisableButton = () => {
    return (
      formValues.Firstname.length === 0 ||
      formValues.Lastname.length === 0 ||
      formValues.Username.length === 0
    );
  };

  return (
    <div className="body">
      <div className="temp">
        <div className="head">
          <img className="logo" src="/logo.png"></img>
          <p className="heading">Join Us!</p>
          <p className="heading2">
            Please provide all current information accurately.
          </p>
          {/* className="mid"> */}
          <FormInput
            inputTag={"First Name "}
            handleChange={handleInputChange}
            name={"Firstname"}
            value={formValues.Firstname}
            error={errorState.Firstname}
            errorMessage={
              "First name cannot contain special characters or numbers."
            }
          />
          <FormInput
            inputTag={"Last Name "}
            handleChange={handleInputChange}
            name={"Lastname"}
            value={formValues.Lastname}
            error={errorState.Lastname}
            errorMessage={
              "Last name cannot contain special characters or numbers."
            }
          />
          <FormInput
            inputTag={"User Name "}
            handleChange={handleInputChange}
            name={"Username"}
            value={formValues.Username}
            error={errorState.Username}
            errorMessage={
              "This username is already taken. Please choose another one."
            }
          />
        </div>
        <div style={{ paddingBottom: "50px" }}>
          <button
            disabled={shouldDisableButton()}
            onClick={HandleContinueButton}
            className="button"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
