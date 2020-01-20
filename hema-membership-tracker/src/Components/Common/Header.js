import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div id="header"> 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://www.hemaalliance.com/">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} width="80" height="80" alt="Historical European Martial Arts Logo"/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Membership Tracker<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Waiver Submission<span class="sr-only"></span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Event Sign-In<span class="sr-only"></span></a>
              </li>
            </ul>
          </div>
      </nav>
    </div>
  )
};

export default Header;
