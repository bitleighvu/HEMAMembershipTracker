import React from "react";

import "./Home.css";


const Home = () => {
  return (
    <div>
      <a id="text-header">Membership Tracker</a>
      <input 
        id="emailInput"
        className="form-control form-control-lg"
        type="email"
        placeholder="johndoe@hema.com"
      />
    </div>
  );
};

export default Home;
