import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import blogo from "../../bblogIcon.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { IconButton } from "@material-ui/core";
// import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MessageIcon from "@mui/icons-material/Message";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  console.log(auth);

  return (
    <div className="headerbar">
      <div className="searchbar">
        <img src={blogo} className="logo" alt="bblog logo" />
        <div className="searchbox">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Bblog"
            className="search-bblog"
            //   onChange={searchHandel}
          />
        </div>
      </div>

      <div className="nav_midsection">
        <div className="mid_icons mid_icons--active">
          <HomeIcon />
        </div>
        <div className="mid_icons">
          <StorefrontIcon />
        </div>
        <div className="mid_icons">
          <GroupsIcon />
        </div>
        <div className="mid_icons">
          <SportsEsportsIcon />
        </div>
      </div>

      <div className="profile">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <div>
          <img
            alt="logo"
            className="logo"
            src="https://avatars.githubusercontent.com/u/103031235?v=4"
          />
        </div>
        <div className="logoutdiv">
          <Link onClick={logout} to="/login">
            Logout({JSON.parse(auth).firstname})
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
