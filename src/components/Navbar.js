import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {/* turn to anchor tags */}
        <li className="nav-list-link">Home</li>
        <li className="nav-list-link">Experience</li>
        <li className="nav-list-link">Work</li>
        <li className="nav-list-link">Contact</li>
        <li className="nav-list-link">Resume</li>
      </ul>
    </nav>
  );
};

export default Navbar;
