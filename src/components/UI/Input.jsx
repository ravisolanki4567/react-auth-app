import React from "react";

const Input = ({ type, id, name, placeholder, autoFocus, value, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className="mt-2 px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      placeholder={placeholder}
      // required
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
