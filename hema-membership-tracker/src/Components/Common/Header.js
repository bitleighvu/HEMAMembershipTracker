import React from "react";
import "./Header.css";

const Header = () => {
  const activeStyle = { color: "#AC539B" };

  return (
    <div id="header">
      <img
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt="Historical European Martial Arts Logo"
        id="HEMALogo"
      />
    </div>
  )
};

export default Header;
