import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbarWrapper">
        <img
          src="./Images/treeleaf-logo.svg"
          alt="treeleaf"
          className="treeleafLogo"
        />
        <div className="navItems">
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#00923F" : "black",
              };
            }}
            className="navList"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#00923F" : "black",
              };
            }}
            className="navList"
            to="/profiles"
          >
            Profile
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
