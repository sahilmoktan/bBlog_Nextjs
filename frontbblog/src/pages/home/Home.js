import {useNavigate } from "react-router-dom";
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import Righbar from "../../components/rightbar/Rightbar"
import Nav from "../../components/nav/Nav"
// import Login from "../../components/login/Login";
import Register from '../../components/register/Register'

// import Footer from '../../components/footer/Footer';



// function Home() {
//   const navigate = useNavigate()
//   const auth = localStorage.getItem("user");
//   navigate("/home");

//   return (
//     <>
//     {auth ? (
//     <div className="h">

//     <Nav/>
//     <div className="homeContainer">
//       <Sidebar/>
//       <Feed/>
//       <Righbar/>
//       </div>
//     </div>
//       ) : (
//         <Login/>
//         )}
//     </>
//   )
// }

function Home() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  if (!auth) {
    // If the user is not authenticated, redirect to the login page
    navigate("/register");
    return (<Register /> )

  }

  return (
    <div className="h">
      <Nav />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Righbar />
      </div>
    </div>
  );
}

export default Home