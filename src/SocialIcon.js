import React from 'react';


function SocialIcon() {
    return (
      <div className="icon">
        <a href="https://twitter.com/Afangco">
          <img src={require("./twitter.jpeg")} alt="icon" style={{ width: 20 }} />{" "}
        </a>
        <a href="https://www.instagram.com/ugo_chiori/">
          <img
            src={require("./instagram.png")}
            alt="icon"
            style={{ width: 20 }}
          />{" "}
        </a>
  
        
        
      </div>
    );
  }
  export default SocialIcon;