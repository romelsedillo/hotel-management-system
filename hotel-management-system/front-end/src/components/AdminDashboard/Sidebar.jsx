import { Link } from "react-router-dom";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${
        open ? " w-64" : "w-20"
      } h-screen relative duration-400 bg-blue-800`}
    >
      <div
        className=" border-[3px] absolute cursor-pointer -right-4 top-9 w-9 h-9 bg-white flex items-center justify-center rounded-full font-bold text-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? "<" : ">"}
        {/* <FontAwesomeIcon icon={faBars} /> */}
      </div>

      <div className="p-4">
        <div className="py-4">
          <h1
            className={`${
              !open && ""
            } font-bold text-center text-white duration-400 origin-left`}
          >
            Admin Dashboard
          </h1>
        </div>
        <hr className={`w-[100%] duration-100`} />
        <div className={` ${!open && "w-[10%]"} px-3 mt-12 w-full`}>
          <ul>
            <li className="mb-2">
              <Link
                to="/admin-dashboard/manage-rooms"
                className="text-white hover:text-gray-300"
              >
                Manage Rooms
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/admin-dashboard/manage-bookings"
                className="text-white hover:text-gray-300"
              >
                Staff Management
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/admin-dashboard/manage-bookings"
                className="text-white hover:text-gray-300"
              >
                Bookings
              </Link>
            </li>

            <li className="mb-2">
              <Link
                to="/admin-dashboard/manage-bookings"
                className="text-white hover:text-gray-300"
              >
                Reports
              </Link>
            </li>

            <li className="mb-2">
              <Link
                to="/admin-dashboard/manage-bookings"
                className="text-white hover:text-gray-300"
              >
                Activity Logs
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/admin-dashboard/manage-bookings"
                className="text-white hover:text-gray-300"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
