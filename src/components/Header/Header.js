import React from "react";
import { Link } from "react-router-dom";
import sky from "../../img/sky.jpg";
import logo from "../../img/logo.png";
import "./Header.css";

const Header = () => (
  <div>
    {/* ---- Header ---- */}
    <header
      style={{
        backgroundColor: "#333",
        backgroundImage: `url(${sky})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="content-wrapper">
        <figure className="logo">
          <img src={logo} alt="Logo" />
        </figure>
        <h4>Madeline Reiff</h4>
        <div className="header-divider"></div>
        {/* -- Nav -- */}
        <nav>
          <ul>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </ul>
        </nav>
        <div className="header-divider"></div>
      </div>{" "}
      {/* -- end content-wrapper -- */}
    </header>
  </div>
); // end Header

export default Header;
