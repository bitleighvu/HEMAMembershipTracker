import React from "react";

import "./Home.css";


const Home = () => {
  return (
    <div id="home-pg">
      <a id="text-header">Membership Tracker</a>
      <div id="validation">
        <input 
          id="emailInput"
          className="form-control form-control-lg"
          type="email"
          placeholder="johndoe@hema.com"
        />
        <button 
          id="button-input"
          className="btn btn-secondary btn-md"
          >
          VERIFY MEMBERSHIP
        </button>
      </div>
      
      <span id="message">Please input an email to check on their HEMAA membership status.</span>

    </div>
  );
};

export default Home;
