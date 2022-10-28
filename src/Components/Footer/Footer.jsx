import React from "react";
import image1 from "../../Assest/I4G.png";

function Footer() {
  return (
    <div className="profile-footer">
      <div className="profile-footer-header">
        Zuri
        <div id="zuri-dot"></div>
        Internship
      </div>
      <p>HNG Internship 9 Frontend Task</p>
      <img className="profile-footer-header" src={image1} alt="" />
    </div>
  );
}

export default Footer;
