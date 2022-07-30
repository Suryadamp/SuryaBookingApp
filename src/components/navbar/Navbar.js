import React, { useContext, useState } from "react";
import "./navbar.css";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">SuryaBooking</span>
        </Link>
        <div className="naviItems">
          <button className="navButton">Register</button>
          <button className="navButton" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
