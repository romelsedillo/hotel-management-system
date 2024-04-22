import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
const AdminDashboard = () => {
  return (
    <div className="flex items-start w-[100%] h-screen">
      <div className="">
        <SideBar />
      </div>
      <div className=" bg-slate-100 w-[100%] h-screen">
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminDashboard;
