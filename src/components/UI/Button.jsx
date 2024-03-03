import React from "react";

const Button = ({ children, type, color, onClick }) => {
  let className = `w-full text-white py-2 px-4 rounded-lg ${color} `;
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
