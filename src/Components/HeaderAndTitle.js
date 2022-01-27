import React from "react";
import logo from "../assets/logo.png";
const HeaderAndTitle = ({ toggleShow }) => {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
        <h3>Xaviers School for Gifted Youngsters</h3>
      </header>

      <div className="title">
        <h2>Register in Professor x workshop</h2>
        <p onClick={toggleShow}>Attendees</p>
      </div>
    </div>
  );
};

export default HeaderAndTitle;
