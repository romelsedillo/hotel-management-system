import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavBar/Navbar";
import Home from "./pages/Home";
import RoomsAndSuits from "./pages/RoomsAndSuits";
import AboutUs from "./pages/AboutUs";
import Book from "./pages/Book";
import AdminLogin from "./pages/AdminLogin";
import Page404 from "./pages/Page404";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Register from "./pages/Register";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <main className="">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rooms" element={<RoomsAndSuits />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
