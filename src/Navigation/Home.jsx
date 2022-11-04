import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RedoIcon from "@mui/icons-material/Redo";
import ProfileHeader from "../Components/Profile/ProfileHeader";
import Links from "../Components/Links/Links";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      {/* ////////////////// */}
      <div className="profile-nav">
        <div className="profile-nav-icon" id="profile-nav__mobile">
          <MoreHorizIcon style={{ color: "#98A2B3" }} />
        </div>
        <div className="profile-nav-icon" id="profile-nav__desktop">
          <RedoIcon style={{ color: "#98A2B3" }} />
        </div>
      </div>
      <ProfileHeader />
      <Links />
      <div className="profile-body__icon">
        <img src="https://img.icons8.com/color/512/slack-new.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
