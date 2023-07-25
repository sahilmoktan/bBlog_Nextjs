import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import myImage from "../../bblogIcon.png";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  console.log(auth);

  return (
    <div className="navbar">
      <div className="searchbar">
        <img src={myImage} className="logo" alt="Mountain and pond" />
        <input
          type="text"
          placeholder="Search Bblog"
          className="search-bblog"
          //   onChange={searchHandel}
        />
      </div>

      <div className="home">
        {auth ? (
          <ul className="nav-ul">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Products</Link>
            </li>
            <li>
              <Link to="/update">About</Link>
            </li>
            <li>
              <Link onClick={logout} to="/login">
                Logout({JSON.parse(auth).firstname})
              </Link>
            </li>
            
          </ul>
        ) : (
          <ul className="nav-ul NAV-RIGHT">
            <li>
              <Link to="/register">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="profile">
        <img
          alt="logo"
          className="logo"
          src="https://avatars.githubusercontent.com/u/103031235?v=4"
          />

      </div>
    </div>
  );
};

export default Nav;
