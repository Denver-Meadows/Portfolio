import React, { useState } from "react";
import "../styles/contact.scss";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";
import Logo from "../components/Logo";

const Contact = () => {
  return (
    <section className="contact">
      <Rotate top right>
        <div className="contact-div">
          <h1 className="contact-header">
            <span className="number">03.</span> Say Hello
          </h1>
          <div className="section-underline"></div>
        </div>
      </Rotate>
      <Fade>
        <div className="contact-greeting">
          <p>
            I'm currently available and looking for new opportunities. If you
            have an interesting problem to solve or just want to say hi, please
            reach out!
          </p>
        </div>
        <div className="contact-button-container">
          <a href="mailto:denver.meadows@yahoo.com">
            <button className="contact-button">Say Hello</button>
          </a>
        </div>
      </Fade>
      {/* <Fade>
        <div className="contact-container">
          <div className="contact-container-content">
            <div className="contact-container-content-greeting">
              <p>
                I'm currently available and looking for new opportunities. If
                you have an interesting problem to solve or just want to say hi,
                please reach out!
              </p>
            </div>
          </div>
        </div>
      </Fade> */}
    </section>
  );
};

export default Contact;
