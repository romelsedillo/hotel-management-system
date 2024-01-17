import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavBar/Navbar";
import Home from "./pages/Home";
import RoomsAndSuits from "./pages/RoomsAndSuits";
import AboutUs from "./pages/AboutUs";
import AdminLogin from "./pages/AdminLogin";
import Page404 from "./pages/Page404";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer/footer";
import ManagerLogin from "./pages/ManagerLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRegister from "./pages/AdminRegister";

// admin children
import ManageRooms from "./components/AdminDashboard/ManageRooms";

import AdminLayout from "./components/AdminLayout";
import GuestDashboard from "./pages/GuestDashboard";

// import { ToastContainer } from "react-toastify";

function App() {
  // const location = useLocation();
  return (
    <main className="">
      <BrowserRouter>
        {location.pathname !== "/admin-dashboard" && <NavbarComponent />}
        {/* <ToastContainer /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rooms" element={<RoomsAndSuits />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/guest-dashboard" element={<GuestDashboard />}></Route>

          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/admin-register" element={<AdminRegister />}></Route>
          <Route element={<AdminLayout />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />}>
              <Route path="manage-rooms" element={<ManageRooms />} />
            </Route>
          </Route>
          <Route path="/manager" element={<ManagerLogin />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        {location.pathname !== "/admin-dashboard" && <Footer />}
      </BrowserRouter>
    </main>
  );
}

export default App;
