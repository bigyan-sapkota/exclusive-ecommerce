import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="fixed bottom-10 right-10 flex size-8 cursor-pointer items-center justify-center rounded-full bg-primary text-xl text-white"
      onClick={scrollToTopHandler}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTop;
