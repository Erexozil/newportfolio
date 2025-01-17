import React from "react";
import './ContactMe.css'; 
import Img from "../Image/my-image-ozil.jpg";

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <h1 className="contactme">Contact Me</h1>
      {/* <p>This is the Contact Me section.</p>
      <p>Connect with me on social media:</p> */}
      <ul className="social-media-list">
        <li>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Erexozil"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-facebook"></i> Facebook</a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
      </ul>
        <img src={Img} alt="" className="img1"  />
    </div>
  );
};

export default ContactMe;

