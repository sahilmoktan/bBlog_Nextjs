import Sidebaricons from "../sidebaricons/Sidebaricons";
import Sidebarprofile from "../sidebarprofile/Sidebarprofile";
import "./sidebar.css";

export default function Sidebar() {

  return (
    <div className="sidebar">
      <Sidebarprofile/>
      <Sidebaricons />
    </div>
  );
}
