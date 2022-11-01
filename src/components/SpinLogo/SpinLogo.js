import React from "react";
import { Link } from "react-router-dom";
import whiteLogo from "../../images/nymin-logo.png";
import "./SpinLogo.css";

const SpinLogo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img className="pinkLogo" src={whiteLogo} alt="pink logo" />
      </Link>
    </div>
  );
};

const ProgressSpinner = () => {
  return (
    <div className="progressContainer">
      <div className="progress-wrapper">
        <img className="whiteProgress" src={whiteLogo} alt="white progress" />
        <img className="whiteProgress" src={whiteLogo} alt="white progress" />    
        <img className="whiteProgress" src={whiteLogo} alt="white progress" />
      </div>
    </div>
  );
};

export { SpinLogo, ProgressSpinner };
