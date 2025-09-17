export const StepTwo = (props) => {
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
          Email <span style={{ color: "red" }}>*</span>{" "}
        </p>
        <input type="text" className="input" placeholder="Placeholder"></input>

        <p className="text">
          Phone Number <span style={{ color: "red" }}>*</span>{" "}
        </p>
        <input type="text" className="input" placeholder="Placeholder"></input>

        <p className="text">
          Password <span style={{ color: "red" }}>*</span>{" "}
        </p>
        <input type="text" className="input" placeholder="Placeholder"></input>

        <p className="text">
          Confirm Password <span style={{ color: "red" }}>*</span>{" "}
        </p>
        <input type="text" className="input" placeholder="Placeholder"></input>
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
