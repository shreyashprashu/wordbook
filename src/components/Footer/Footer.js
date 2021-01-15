import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
     <p>Made with ❤️ in India</p>
      <div className="iconContainer">
        <a href="https://www.instagram.com" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      
      </div>
    </div>
  );
};

export default Footer;
