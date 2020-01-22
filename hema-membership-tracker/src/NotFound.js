import React from 'react';

import './NotFound.css';


const NotFound = () => {
  return (
    <div>
        <div id="notFound-pg">
            <div id="text-panel">
                <div id="oops-txt">
                    Oops! 
                </div>
                <div id="other-txt">
                    We can't seem to find the page you're looking for. 
                </div>
                <div id="error-code">
                    Error Code: 404
                </div>
            </div>
            <div id="pic-panel"> 
                <img src={process.env.PUBLIC_URL + "/images/sadFace.png"} id="sad-pic" alt="Sad Face Not Found"></img>
            </div>
        </div>
    </div>
  );
};

export default NotFound;
