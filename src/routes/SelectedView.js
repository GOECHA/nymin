import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../components/AppContext.js";
import Header from "../components/Header/Header.js";
import "./SelectedView.css";



const SelectedView = () => {
  const globals = useContext(AppContext)


  return (
    <>
    <Header /> 
    <div className="selected-container">
      <div className="sel-header-wrapper">
        <a className="linkToArt" target="blank" href={globals.article.short_url} >
         <h1 className="sel-header">{globals.article.title}</h1>
        </a>
       <div className="line"></div>
      <div className="sel-date-wrapper">
        <p className="sel-date">{globals.article.published_date}</p>
      </div>
      </div>
      <div className="sel-section-container">
        <p className="sel-section">{globals.article.section}</p>
      </div>
      <div className="sel-cent-container">
      <div className="sel-img-wrapper">
        <img className="selected-image" src={globals.article.multimedia[0].url} alt="selected" />
       </div>
         <div className="sel-description-wrapper">
        <p className="sel-description">{globals.article.abstract}</p>
      </div>
      </div>
    </div>
    </>
  );
};

export default SelectedView;
