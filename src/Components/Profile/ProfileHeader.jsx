import React from "react";
import image2 from "../../Assest/profileImage.png";

function ProfileHeader() {
  return (
    <div className="profile-header">
      <img id="profile__img" src={image2} alt="" />
      <p className="profile-name" id="twitter">
        Skillzo__
      </p>
      <p className="profile-name" id="slack" style={{ display: "none" }}>
        Skillzo
      </p>
    </div>
  );
}

export default ProfileHeader;
