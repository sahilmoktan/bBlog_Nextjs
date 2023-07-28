import Sidebaricons from "./Sidebaricons";
import Sidebarprofile from "./Sidebarprofile";
import "./sidebar.css";

export default function Sidebar() {

  return (
    <div className="sidebar">
      <Sidebarprofile/>
      <Sidebaricons />
    </div>
  );
}
