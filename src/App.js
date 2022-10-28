import "./App.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RedoIcon from "@mui/icons-material/Redo";
import ProfileHeader from "./Components/Profile/ProfileHeader";
import Links from "./Components/Links/Links";
import Footer from "./Components/Footer/Footer";

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
      <ProfileHeader />
      <Links />
      <div className="profile-body__icon">
        <img
          src="https://thumbs.bfldr.com/at/pl546j-7le8zk-6gwiyo?expiry=1667527057&fit=bounds&height=800&sig=Mzc1YzdjODNiNjZjZGZjNjc4ZTI3MWIzNTI3MzRhZjRmZTEzMWUwNQ%3D%3D&width=1100"
          alt=""
        />
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
