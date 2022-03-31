import React from "react";
import { Link } from "react-router-dom";
import "../assets/App.css"
export default function HeaderComponent() {
  return (
    <div>
      <div className="navbar ">
        <Link to="/" className="logo">
          <img
            src="/assets/t_logo.png"
            className="bg-img"
            alt=""
          />
        </Link>
        <div className="logo"></div>
        <div className="menu-items">
          <Link to="about" className="menu-item">About us</Link>
          <Link to="contact-us"className="menu-item">Contact us</Link>
        </div>
      </div>
      
      
    </div>
  );
} 
