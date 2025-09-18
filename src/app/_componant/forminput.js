export const FormInput = (props) => {
  const { inputTag, handleChange, name, value, error, errorMessage, type } =
    props;
  return (
    <div>
      <p className="text">
        {inputTag} <span style={{ color: "red" }}>*</span>{" "}
      </p>
      <input
        type={type || "text"}
        className={error ? "input-error" : "input"}
        placeholder="Placeholder"
        onChange={handleChange}
        name={name}
        value={value}
      />

      {error && <div style={{ color: "red" }}>{errorMessage} </div>}
    </div>
  );
};
