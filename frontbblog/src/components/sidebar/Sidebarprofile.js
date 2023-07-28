import React from 'react'
import "./sidebarprofile.css";


export default function Sidebarprofile() {
  const auth = localStorage.getItem("user");

  return (
    <div className="sidebarWrapper">
    <div className="profile">
      <img
        alt="logo"
        className="logo"
        src="https://avatars.githubusercontent.com/u/103031235?v=4"
      />
    </div>
    <div className="profilename">
      <h4>
        {JSON.parse(auth).firstname} {JSON.parse(auth).lastname}
      </h4>
      {/* <Link onClick={logout} to="/login">
          ({JSON.parse(auth).firstname})
        </Link> */}
    </div>
  </div>
  )
}
