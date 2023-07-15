import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import Righbar from "../../components/rightbar/Rightbar"
import Nav from "../../components/nav/Nav"
// import Footer from '../../components/footer/Footer';



function Home() {
  return (
    <>
    <Nav/>
    <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Righbar/>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Home