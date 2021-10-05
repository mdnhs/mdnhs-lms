import React from "react";
import logo from "../../images/logo.png";
// Nav Link import
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="p-4" style={{ background: "#2196F3" }}>
      <img style={{ width: "55px" }} src={logo} alt="" />
      <h1 className="text-light">MDNHS-LMS</h1>
      <NavLink
        
        className="me-4 text-decoration-none text-light"
        activeStyle={{
          fontWeight: "bold",
          borderBottom: "1px solid white",
        }}
        to="/home"
      >
        Home
      </NavLink>

      <NavLink
        className="me-4 text-decoration-none text-light "
        activeStyle={{
          fontWeight: "bold",
          borderBottom: "1px solid white",
        }}
        to="/courses"
      >
        Courses
      </NavLink>

      <NavLink
        className="me-4 text-decoration-none text-light"
        activeStyle={{
          fontWeight: "bold",
          borderBottom: "1px solid white",
        }}
        to="/about"
      >
        About Us
      </NavLink>

      <NavLink
        className="me-4 text-decoration-none text-light"
        activeStyle={{
          fontWeight: "bold",
          borderBottom: "1px solid white",
        }}
        to="/contact"
      >
        Contact Us
      </NavLink>
    </nav>
  );
};

export default Header;
