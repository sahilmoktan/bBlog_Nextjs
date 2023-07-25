import {useNavigate } from "react-router-dom";
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import Righbar from "../../components/rightbar/Rightbar"
import Nav from "../../components/nav/Nav"
import Login from "../../components/login/Login";
// import Footer from '../../components/footer/Footer';



function Home() {
  const navigate = useNavigate()
  const auth = localStorage.getItem("user");
  navigate("/home");

  return (
    <>
    {auth ? (
      <div className="homeContainer">
        <Nav/>
      <Sidebar/>
      <Feed/>
      <Righbar/>
    </div>
        ) : (
          <Login/>
        )}
    {/* <Footer/> */}
    </>
  )
}

export default Home