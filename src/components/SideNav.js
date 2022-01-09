import React, { useRef } from "react";
import "../styles/sideNav.scss";

const SideNav = () => {
  const sideNav = useRef(null);

  const handleClick = (id) => {
    const anchor = document.querySelector(`.${id}`);
    if (id === "about") {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    } else anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    sideNav.current.classList.remove("show-side-nav-modal");
  };

  return (
    <div className={`side-nav-modal show-side-nav-modal`} ref={sideNav}>
      <div className="side-nav">
        <ul className="side-nav-list">
          <li
            className="side-nav-list-link side-nav-list-link-2"
            id="about"
            onClick={(e) => handleClick(e.target.id)}
          >
            <span className="nav-number">01.</span> About
          </li>
          <li
            className="side-nav-list-link side-nav-list-link-3"
            id="projects"
            onClick={(e) => handleClick(e.target.id)}
          >
            <span className="nav-number">02.</span> Work
          </li>
          <li
            className="side-nav-list-link side-nav-list-link-4"
            id="contact"
            onClick={(e) => handleClick(e.target.id)}
          >
            <span className="nav-number">03.</span> Contact
          </li>
          <li className="side-nav-list-link side-nav-list-link-5">
            <span className="nav-number">04.</span> Resume
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
