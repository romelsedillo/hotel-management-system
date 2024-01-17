import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "../Logo/Logo";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavbarComponent() {
  const navigate = useNavigate();

  return (
    <Navbar isBordered className=" bg-[#DD7210] text-[white] h-[80px]">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/" className=" gap-2">
            <Logo />
            <p className="hidden sm:block font-bold text-[white] ml-4 text-[28px] font-CormorantGaramond italic">
              Optimum Pension House
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* nav links */}
      <NavbarContent className="hidden sm:flex gap-10" justify="end">
        <NavbarItem>
          <NavLink
            color="foreground"
            to="/"
            aria-current="page"
            className=" hover:border-b-2 border-[#fff]"
          >
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            color="foreground"
            to="/rooms"
            className=" hover:border-b-2 border-[#fff]"
          >
            Rooms & Suites
          </NavLink>
        </NavbarItem>
        {/* <NavbarItem>
          <NavLink color="foreground" to="/services" className=" hover:border-b-2 border-[#7828C8]">
            Services
          </NavLink>
        </NavbarItem>  */}
        <NavbarItem>
          <NavLink
            color="foreground"
            to="/gallery"
            className=" hover:border-b-2 border-[#fff]"
          >
            Gallery
          </NavLink>
        </NavbarItem>
        {/* <NavbarItem>
          <NavLink color="foreground" to="/about-us" className=" hover:border-b-2 border-[#fff]">
            About Us
          </NavLink>
        </NavbarItem> */}
        <NavbarItem>
          <Button
            color="secondary"
            size="sm"
            className=" bg-[white] text-[#DD7210] font-bold"
            onClick={() => navigate("./login")}
          >
            Book Now
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
