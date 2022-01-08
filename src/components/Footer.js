import React from "react";
import "../styles/footer.scss";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li>
              <a href="https://github.com/Denver-Meadows" target="_blank">
                <FiGithub />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/denver-meadows-615a6442"
                target="_blank"
              >
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:denver.meadows@yahoo.com">
                <MdOutlineEmail />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/denver_meadows" target="_blank">
                <FiTwitter />
              </a>
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
