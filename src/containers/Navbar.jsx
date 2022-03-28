import React from 'react';
import { MainMenu } from "../components";
import "../assets/styles/components/navbar/navbar.css";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="logo">
        <a href="/" className="logo-content">Eric Go</a>
      </div>
      <MainMenu />
    </div>
  )
}

export default Navbar 