import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
