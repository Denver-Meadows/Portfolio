import React from "react";
import "../styles/nav.scss";
import "./Logo";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="nav">
      <Logo />
      <ul className="nav-list">
        {/* turn to anchor tags */}
        <li
          className="nav-list-link nav-list-link-2"
          onClick={() => {
            const anchor = document.querySelector(".about");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          <span className="nav-number">01.</span> About
        </li>
        <li
          className="nav-list-link nav-list-link-3"
          onClick={() => {
            const anchor = document.querySelector(".projects");
            anchor.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <span className="nav-number">02.</span> Work
        </li>
        <li
          className="nav-list-link nav-list-link-4"
          onClick={() => {
            const anchor = document.querySelector(".contact");
            anchor.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <span className="nav-number">03.</span> Contact
        </li>
        <li className="nav-list-link nav-list-link-5">
          <span className="nav-number">04.</span> Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
