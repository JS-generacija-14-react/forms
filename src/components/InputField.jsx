const InputField = ({ type, value, handleChange }) => {
  return (
    <div>
      <input type={type} onChange={handleChange} />
    </div>
  );
};
