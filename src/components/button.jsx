import React from "react";

const Button = ({ text, type = "button" }) => {
  return (
    <button
      type={type}
      className="custom-transition block rounded-sm border-2 border-primary bg-primary px-8 py-1.5 font-medium text-white hover:bg-white hover:text-primary"
    >
      {text}
    </button>
  );
};

export default Button;
