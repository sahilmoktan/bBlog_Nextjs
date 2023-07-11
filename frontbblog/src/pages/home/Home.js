import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import Righbar from "../../components/rightbar/Rightbar"



function Home() {
  return (
    <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Righbar/>
    </div>
  )
}

export default Home