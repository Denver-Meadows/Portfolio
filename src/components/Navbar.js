import React from "react";
import "../styles/nav.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {/* turn to anchor tags */}
        <li className="nav-list-link nav-list-link-1 ">Home</li>
        <li className="nav-list-link nav-list-link-2">Experience</li>
        <li className="nav-list-link nav-list-link-3">Work</li>
        <li className="nav-list-link nav-list-link-4">Contact</li>
        <li className="nav-list-link nav-list-link-5">Resume</li>
      </ul>
    </nav>
  );
};

export default Navbar;
