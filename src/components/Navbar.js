import React, { useContext } from "react";
import "../styles/nav.scss";
import "./Logo";
import Logo from "./Logo";
import { AppContext } from "../context";

const Navbar = () => {
  const { openSideNav } = useContext(AppContext);

  const handleClick = (id) => {
    const anchor = document.querySelector(`.${id}`);
    if (id === "about") {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    } else anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="nav">
      <Logo />
      <ul className="nav-list">
        <li
          className="nav-list-link nav-list-link-2"
          id="about"
          onClick={(e) => handleClick(e.target.id)}
        >
          <span className="nav-number">01.</span> About
        </li>
        <li
          className="nav-list-link nav-list-link-3"
          id="projects"
          onClick={(e) => handleClick(e.target.id)}
        >
          <span className="nav-number">02.</span> Work
        </li>
        <li
          className="nav-list-link nav-list-link-4"
          id="contact"
          onClick={(e) => handleClick(e.target.id)}
        >
          <span className="nav-number">03.</span> Contact
        </li>
        <li className="nav-list-link nav-list-link-5">
          <span className="nav-number">04.</span> Resume
        </li>
      </ul>
      <div className="nav-toggle-btn" onClick={openSideNav}>
        <span className="hamburger-0"></span>
        <span className="hamburger-1"></span>
        <span className="hamburger-2"></span>
      </div>
    </nav>
  );
};

export default Navbar;
