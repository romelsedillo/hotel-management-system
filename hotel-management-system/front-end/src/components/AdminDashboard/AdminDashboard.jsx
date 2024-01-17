import SideBar from "./Sidebar";
const AdminDashboard = () => {
  return (
    <div className="flex items-start w-[100%] h-screen">
      <div className="">
        <SideBar />
      </div>
      <div className=" bg-slate-100 w-[100%] h-screen">
        <h1 className="text-black ml-8 mt-8">Admin Dashboard</h1>
      </div>
    </div>
  );
};

export default AdminDashboard;
