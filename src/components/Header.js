import React from "react";
import reactLogo from "../images/logo.svg";

function Header() {
  return (
    <nav className="nav">
      <img src={reactLogo} alt="react Logo" className="nav-logo"></img>
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Header;
