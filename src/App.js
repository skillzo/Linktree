import "./App.css";
import image1 from "./Assest/I4G.png";
import image2 from "./Assest/profileImage.png";
import Link from "./Link";
import { profile } from "./Profile";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RedoIcon from "@mui/icons-material/Redo";

function App() {
  return (
    <div className="wrapper">
      {/* ////////////////// */}
      <div className="profile-nav">
        <div className="profile-nav-icon" id="profile-nav__mobile">
          <MoreHorizIcon style={{ color: "#98A2B3" }} />
        </div>
        <div className="profile-nav-icon" id="profile-nav__desktop">
          <RedoIcon style={{ color: "#98A2B3" }} />
        </div>
      </div>

      {/* /////////Header///////// */}
      <div className="profile-header">
        <img id="profile__img" src={image2} alt="" />
        <p className="profile-name" id="twitter">
          Skillzo__
        </p>
        <p className="profile-name" id="slack" style={{ display: "none" }}>
          Skillzo
        </p>
      </div>
      {/* //////////////Body Links */}
      <div className="profile-body">
        {profile.map((profile) => {
          return (
            <Link
              key={Math.random() * 10}
              name={profile.name}
              link={profile.link}
              id={profile.id}
            />
          );
        })}
      </div>
      <div className="profile-body__icon">
        <img
          src="https://thumbs.bfldr.com/at/pl546j-7le8zk-6gwiyo?expiry=1667527057&fit=bounds&height=800&sig=Mzc1YzdjODNiNjZjZGZjNjc4ZTI3MWIzNTI3MzRhZjRmZTEzMWUwNQ%3D%3D&width=1100"
          alt=""
        />
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
      </div>

      <div className="profile-footer">
        <div className="profile-footer-header">
          Zuri
          <div id="zuri-dot"></div>
          Internship
        </div>
        <p className="profile-footer-header">HNG Internship 9 Frontend Task</p>
        <img className="profile-footer-header" src={image1} alt="" />
      </div>
    </div>
  );
}

export default App;
