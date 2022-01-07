import React from "react";
import "../styles/footer.scss";

export const Footer = () => {
  return (
    <div>
      <div className="contact-container-content-links">
        <ul>
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Email</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="copyright">
        <p>Created by Denver Meadows</p>
      </div>
    </div>
  );
};

export default Footer;
