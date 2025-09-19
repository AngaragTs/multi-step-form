import { FormInput } from "../_componant/forminput";
import { use, useState } from "react";

export const StepThree = (props) => {
  const { HandleBackStep } = props;
  const { HandleNextStep } = props;

  const [formValues, setFormValues] = useState({
    DateofBirth: "",
    ProfileImage: "",
  });

  const [errorState, setErrorstate] = useState({});
  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const validateInput = () => {
    const errors = {};

    if ((formValues.DateofBirth = "")) {
      errors.DateofBirth = "Please select a date.";
    }

    if ((formValues.ProfileImage = "")) {
      errors.ProfileImage = "Image cannot be blank";
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

  // const shouldDisableButton = () => {
  //   return (
  //     formValues.DateofBirth.length === " " ||
  //     formValues.ProfileImage.length === "
  //   );
  // };

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
        <p
          className="text"
          handleChange="handleInputChange"
          value={formValues.DateofBirth}
          error={errorState.DateofBirth}
          errorMessage={errorState.DateofBirth}
        >
          Date of Birth date.<span style={{ color: "red" }}>*</span>
        </p>
        <input type="Date" className="input"></input>

        <p className="text" handleChange="handleInputChange">
          Profile image <span style={{ color: "red" }}>*</span>
        </p>
        <input type="file" className="input2"></input>
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
          // disabled={shouldDisableButton()}
          onClick={HandleContinueButton}
          className="step2button"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
