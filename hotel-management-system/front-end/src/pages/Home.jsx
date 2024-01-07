import Homebg from "../assets/images/bedroom5-darker2.jpg";
import {
  // Navbar,
  // NavbarBrand,
  // NavbarContent,
  // NavbarItem,
  // Link,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Teams from "../components/Teams";
// import GoogleMap from "../components/GoogleMap/Map";

const Home = () => {
  return (
    <div>
      <div
        name="home"
        className=" bg-cover bg-center h-screen w-full flex justify-start"
        style={{ backgroundImage: `url(${Homebg})` }}
      >
        <div className=" flex mt-[80px] ml-40 flex-col items-start gap-8">
          <div>
            <h1 className="title text-[#fff] text-[60px] italic font-CormorantGaramond font-bold">
              Optimum Pension House
            </h1>

            <p className=" text-[30px] text-[white] font-Raleway italic">
              Indulge in Unparalleled Comfort
            </p>
            <p className="text-[28px] text-[white] font-Raleway italic">
              Where Every Stay is a Celebration
            </p>
          </div>
          <NavLink color="foreground" to="/book">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-purple-500 text-[#fff] rounded-md font-semibold"
            >
              Book Your Stay Now
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-center bg-slate-200">
        <AboutUs></AboutUs>
      </div>
      <div className="w-[100%] p-32">
        <Teams></Teams>
      </div>
      {/* <div className=" flex justify-center bg-slate-500 py-10 mb-10 ">
        <GoogleMap></GoogleMap>
      </div> */}
    </div>
  );
};

export default Home;
