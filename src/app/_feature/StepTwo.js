import { FormInput } from "../_componant/forminput";
import { use, useState } from "react";

const checkIfInputHasSymbols = (string) => {
  return /[!#$%^&*()_+?><{}":"]/.test(string);
};

export const StepTwo = (props) => {
  const { HandleBackStep } = props;
  const { HandleNextStep } = props;

  const [formValues, setFormValues] = useState({
    Email: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [errorState, setErrorstate] = useState({});
  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const validateInput = () => {
    const errors = {};

    if (checkIfInputHasSymbols(formValues.Email)) {
      errors.Email = "Please provide a valid email address.";
    }

    if (
      checkIfInputHasSymbols(formValues.PhoneNumber) ||
      formValues.PhoneNumber.length !== 8
    ) {
      errors.PhoneNumber = "Please enter a valid phone number.";
    }
    if (checkIfInputHasSymbols(formValues.Password)) {
      errors.Password = "Password must include letters and numbers";
    }
    if (
      checkIfInputHasSymbols(formValues.ConfirmPassword) ||
      formValues.ConfirmPassword.length !== formValues.Password.length
    ) {
      errors.ConfirmPassword = "Password do not match. Please try again.";
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
      formValues.Email.length === 0 ||
      formValues.PhoneNumber.length === 0 ||
      formValues.Password.length === 0 ||
      formValues.ConfirmPassword.length === 0
    );
  };

  return (
    <div className="temp">
      <div className="head">
        <img className="logo" src="/logo.png"></img>
        <p className="heading">Join Us!</p>
        <p className="heading2">
          Please provide all current information accurately.
        </p>
      </div>
      <div style={{ paddingtop: "80px" }}>
        <FormInput
          inputTag={"Email"}
          handleChange={handleInputChange}
          name={"Email"}
          value={formValues.Email}
          error={errorState.Email}
          errorMessage={errorState.Email}
        />

        <FormInput
          inputTag={"PhoneNumber"}
          handleChange={handleInputChange}
          name={"PhoneNumber"}
          value={formValues.PhoneNumber}
          error={errorState.PhoneNumber}
          errorMessage={errorState.PhoneNumber}
        />

        <FormInput
          inputTag={"Password"}
          handleChange={handleInputChange}
          name={"Password"}
          type={"Password"}
          value={formValues.Password}
          error={errorState.Password}
          errorMessage={errorState.Password}
        />

        <FormInput
          inputTag={"ConfirmPassword"}
          handleChange={handleInputChange}
          name={"ConfirmPassword"}
          type={"Password"}
          value={formValues.ConfirmPassword}
          error={errorState.ConfirmPassword}
          errorMessage={errorState.ConfirmPassword}
        />

        {/* <p className="text">
          Email <span style={{ color: "red" }}>*</span>{" "}
        </p>
        <input type="text" className="input" placeholder="Placeholder"></input> */}

        {/* <p className="text">
          Phone Number <span style={{ color: "red" }}>*</span>{" "}
        </p>
        <input type="text" className="input" placeholder="Placeholder"></input> */}

        {/* <p className="text">
          Password <span style={{ color: "red" }}>*</span>{" "}
        </p>
        <input
          type="Password"
          className="input"
          placeholder="Placeholder"
        ></input> */}

        {/* <p className="text">
          Confirm Password <span style={{ color: "red" }}>*</span>{" "}
        </p>
        <input
          type="Password"
          className="input"
          placeholder="Placeholder"
        ></input> */}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <button className="backbutton" onClick={HandleBackStep}>
          Back
        </button>
        <button
          disabled={shouldDisableButton()}
          onClick={HandleContinueButton}
          className="step2button"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
