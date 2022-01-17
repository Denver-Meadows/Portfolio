import React, { useRef, useContext } from "react";
import "../styles/sideNav.scss";
import { AppContext } from "../context";
import { AiOutlineClose } from "react-icons/ai";

const SideNav = () => {
  const sideNav = useRef(null);
  const { isSideNavOpen, closeSideNav } = useContext(AppContext);

  const handleClick = (id) => {
    const anchor = document.querySelector(`.${id}`);
    if (id === "about" && window.innerWidth > 600) {
      console.log(id);
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    } else anchor.scrollIntoView({ behavior: "smooth", block: "start" });

    closeSideNav();
    document.body.classList.add("overflow-visible");
  };

  return (
    <aside
      className={`${
        isSideNavOpen ? "side-nav-modal show-side-nav-modal" : "side-nav-modal"
      }`}
      ref={sideNav}
    >
      <div className="side-nav">
        <div className="close-side-nav-btn" onClick={closeSideNav}>
          <AiOutlineClose />
        </div>
        <ul className="side-nav-list">
          <li
            className="side-nav-list-link side-nav-list-link-2"
            id="about"
            onClick={(e) => handleClick(e.target.id)}
          >
            <span className="side-nav-number">01.</span> About
          </li>
          <li
            className="side-nav-list-link side-nav-list-link-3"
            id="projects"
            onClick={(e) => handleClick(e.target.id)}
          >
            <span className="side-nav-number">02.</span> Work
          </li>
          <li
            className="side-nav-list-link side-nav-list-link-4"
            id="contact"
            onClick={(e) => handleClick(e.target.id)}
          >
            <span className="side-nav-number">03.</span> Contact
          </li>
          {/* <li className="side-nav-list-link side-nav-list-link-5">
            <span className="side-nav-number">04.</span> Resume
          </li> */}
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
