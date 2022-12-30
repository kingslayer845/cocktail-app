import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.9a3d2645.svg";
function Nav() {
  return (
    <nav>
      <div className="container flex justify-between items-center">
        <img className=" w-44" src={logo} alt="" />
        <div className="nav-options">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
