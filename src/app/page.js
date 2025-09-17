"use client";

import { useState } from "react";
import { StepOne } from "./_feature/StepOne";
import { StepTwo } from "./_feature/StepTwo";
import { StepThree } from "./_feature/StepThree";
import { StepFour } from "./_feature/StepFour";

import "./index.css";

export default function Home() {
  const [Step, setStep] = useState(1);

  const HandleNextStep = () => {
    setStep(Step + 1);
  };

  const HandleBackStep = () => {
    console.log("hi");

    if (Step === 1) {
      return;
    } else {
      setStep(Step - 1);
    }
  };
  return (
    <>
      {Step === 1 && <StepOne HandleNextStep={HandleNextStep} />}
      {Step === 2 && (
        <StepTwo
          HandleBackStep={HandleBackStep}
          HandleNextStep={HandleNextStep}
        />
      )}
      {Step === 3 && (
        <StepThree
          HandleNextStep={HandleNextStep}
          HandleBackStep={HandleBackStep}
        />
      )}
      {Step === 4 && <StepFour HandleNextStep={HandleNextStep} />}
    </>
  );
}
