import React from "react";
import "./FooterStyles.css";

export const Footer = () => {
  return (
    <div id="footer" className="footer-div">
      <div className="footer-title">
        <h1>Develop.</h1>
        <p>Creating, Innovating and getting better every day</p>
      </div>
      <div className="icons-row">
        <a href="https://wa.me/4121240464">
          <div className="circle">
            <i className="fa-brands fa-whatsapp icon-footer"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/carlos-daniel-chac%C3%B3n-m%C3%A9ndez-148ab4263/">
          <div className="circle">
            <i className="fa-brands fa-linkedin icon-footer"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/carloschacon2701/">
          <div className="circle">
            <i className="fa-brands fa-instagram icon-footer"></i>
          </div>
        </a>
      </div>
      <p className="copy">&#169; CarlosChacon</p>
    </div>
  );
};
