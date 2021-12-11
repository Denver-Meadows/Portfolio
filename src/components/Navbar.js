import React from "react";

const Navbar = () => {
  return (
    <nav className="nav sticky">
      <ul className="nav-list">
        {/* turn to anchor tags */}
        <li className="nav-list-link">Home</li>
        <li className="nav-list-link">Projects</li>
        <li className="nav-list-link">About</li>
        <li className="nav-list-link">Contact</li>
        <li className="nav-list-link">Resume</li>
      </ul>
    </nav>
  );
};

export default Navbar;
