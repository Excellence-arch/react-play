import React from "react";

const Input = ({ name, placeholder, value, handleChange }) => {
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
