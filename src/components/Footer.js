import React from "react";
import "../styles/footer.scss";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li>
              <FiGithub />
            </li>
            <li>
              <FiLinkedin />
            </li>
            <li>
              <MdOutlineEmail />
            </li>
            <li>
              <FiTwitter />
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>Created by Me 👋</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
