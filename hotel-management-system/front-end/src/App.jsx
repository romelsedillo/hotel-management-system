import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavBar/Navbar";
import Home from "./pages/Home";
import RoomsAndSuits from "./pages/RoomsAndSuits";
import AboutUs from "./pages/AboutUs";
import AdminLogin from "./pages/AdminLogin";
import Page404 from "./pages/Page404";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer/footer";
import ManagerLogin from "./pages/ManagerLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRegister from "./pages/AdminRegister";
import ManageRooms from "./pages/ManageRooms";
import GuestDashboard from "./pages/GuestDashboard";
import PrivateRoutes from "./utility/PrivateRoutes";

import { ToastContainer } from "react-toastify";
import ManagerRegister from "./pages/ManagerRegister";

function App() {
  return (
    <main className="">
      <BrowserRouter>
        {/* {location.pathname !== "/admin-dashboard" && <NavbarComponent />} */}
        {/* {location.pathname.includes("/admin") ? "" : <NavbarComponent />}
        {location.pathname.includes("/manager") ? "" : <NavbarComponent />} */}
        {!(location.pathname.includes("/admin") || location.pathname.includes("/manager")) && <NavbarComponent />}

        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rooms" element={<RoomsAndSuits />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/guest-dashboard" element={<GuestDashboard />}></Route>
          <Route path="/admin-login" element={<AdminLogin />}></Route>
          <Route path="/admin-register" element={<AdminRegister />}></Route>
          <Route path="/manager-login" element={<ManagerLogin />}></Route>
          <Route path="/manager-register" element={<ManagerRegister />}></Route>


          {/* ADMIN DASHBOARD */}
          <Route element={<PrivateRoutes />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />}>
              <Route path="manage-rooms" element={<ManageRooms />} />
            </Route>
          </Route>
          {/* ADMIN DASHBOARD */}

          {/* MANAGER DASHBOARD */}

          {/* MANAGER DASHBOARD */}

          <Route path="*" element={<Page404 />}></Route>
        </Routes>

        {/* FOOTER */}
        {/* {location.pathname !== "/admin-dashboard" && <Footer />} */}
        {/* {location.pathname.includes("/admin") ? "" : <Footer />} */}
        {!(location.pathname.includes("/admin") || location.pathname.includes("/manager")) && <Footer />}
        {/* FOOTER */}

      </BrowserRouter>
    </main>
  );
}

export default App;
