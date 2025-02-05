import React from "react";

const Button = ({ text, type = "button", buttonClickHandler }) => {
  return (
    <button
      onClick={buttonClickHandler}
      type={type}
      className="custom-transition block rounded-sm border-2 border-primary bg-primary px-8 py-1.5 font-medium text-white hover:bg-white hover:text-primary disabled:bg-gray-200"
    >
      {text}
    </button>
  );
};

export default Button;
