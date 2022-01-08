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
              <a
                href="https://github.com/Denver-Meadows"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/denver-meadows-615a6442"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a
                href="mailto:denver.meadows@yahoo.com"
                style={{ color: "#73cca8" }}
              >
                <MdOutlineEmail />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/denver_meadows"
                target="_blank"
                rel="noreferrer"
              >
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
