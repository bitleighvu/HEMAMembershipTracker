import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div id="header"> 
      <a target="_blank" href="https://www.hemaalliance.com/">
      <img
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt="Historical European Martial Arts Logo"
        id="HEMALogo"/>
      </a>
    </div>
  )
};

export default Header;
