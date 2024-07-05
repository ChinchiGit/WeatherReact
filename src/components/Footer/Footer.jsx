import React from "react";
import "./Footer.css"


const Footer = () => (
  <footer>
    <p>Powered by <a href="#" onClick={() => window.open("https://openweathermap.org/", "_blank")}>OPEN WEATHER</a></p>
  </footer>
);

export default Footer;