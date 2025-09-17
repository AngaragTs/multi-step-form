export const StepFour = (props) => {
  const { HandleBackStep } = props;
  const { HandleNextStep } = props;
  return (
    <div className="laststep">
      <div className="head">
        <img className="logo" src="/logo.png"></img>
        <p className="heading">You Are all set!</p>
        <p className="heading2">We have received your submission. Thank you!</p>
      </div>
    </div>
  );
};
