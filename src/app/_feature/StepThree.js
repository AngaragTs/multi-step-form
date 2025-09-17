export const StepThree = (props) => {
  const { HandleBackStep } = props;
  const { HandleNextStep } = props;
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
        <p className="text">
          Date of Birth <span style={{ color: "red" }}>*</span>{" "}
        </p>
        <input type="Date" className="input" placeholder="Placeholder"></input>

        <p className="text">
          Profile image <span style={{ color: "red" }}>*</span>{" "}
        </p>
        <input type="image" className="input"></input>
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
          //   disabled={shouldDisableButton()}
          onClick={HandleNextStep}
          className="step2button"
        >
          Continue
        </button>
      </div>
    </div>

    // <div>
    //   <button onClick={HandleBackStep}>BACK</button>
    // </div>
  );
};
