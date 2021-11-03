import React from "react";
import sky from "../../img/sky.jpg";
import "./Footer.css";

const Footer = () => (
  <div>
    {/* ---- Footer ---- */}
    <footer
      style={{
        backgroundColor: "#333",
        backgroundImage: `url(${sky})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="content-wrapper">
        <p className="copyright">&copy; Copyright 2021 | Madeline Reiff</p>
      </div>{" "}
      {/* -- end content-wrapper -- */}
    </footer>
  </div>
); // end Footer

export default Footer;
