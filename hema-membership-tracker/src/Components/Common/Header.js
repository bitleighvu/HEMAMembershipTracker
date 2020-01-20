import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div id="header"> 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://www.hemaalliance.com/">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} id="logo" alt="Historical European Martial Arts Logo"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Membership Tracker<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Waiver Submission<span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Event Sign-In<span className="sr-only"></span></a>
              </li>
            </ul>
          </div>
      </nav>
    </div>
  )
};

export default Header;
