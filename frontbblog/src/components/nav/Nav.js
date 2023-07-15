import { Link, useNavigate } from "react-router-dom";
import "./nav.css";

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
        <img
          alt="logo"
          className="logo"
          src="https://avatars.githubusercontent.com/u/103031235?v=4"
        />
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update">About</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
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
    </div>
  );
};

export default Nav;
