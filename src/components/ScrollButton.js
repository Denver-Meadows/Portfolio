import React, { useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  console.log(window.innerWidth);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500 && window.innerWidth > 600) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="back-to-top back-btn"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <BsArrowUp />
    </button>
  );
};

export default ScrollButton;
