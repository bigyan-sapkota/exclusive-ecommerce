import React from "react";

const BoxText = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      {/* red box */}
      <div className="h-10 w-5 rounded bg-primary"></div>
      <p className="font-semibold text-primary">{text}</p>
    </div>
  );
};

export default BoxText;
