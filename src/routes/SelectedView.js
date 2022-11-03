import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../components/AppContext.js";
import Header from "../components/Header/Header.js";
import "./SelectedView.css";



const SelectedView = () => {
  const globals = useContext(AppContext)

 const upDate = () => {
 return globals.article.published_date.slice(
  0,
  globals.published_date.length - 15
)}

console.log(globals.article.published_date)
// 

  return (
    <>
    <Header /> 
    <div className="selected-container">
      <div className="sel-header-wrapper">
        <h1 className="sel-header">{globals.article.title}</h1>
      </div>
      <div className="section-container">
        <p className="sel-section">{globals.article.section}</p>
      </div>
      <div className="sel-img-wrapper">
        <img className="selected-image" src={globals.article.multimedia[0].url} alt="selected" />
        {/* <p className="sel-description">{globals.article.description}</p> */}
         <div className="sel-description-wrapper">
        <p className="sel-description">{globals.article.abstract}</p>
       </div>
      </div>
      <div className="sel-date-wrapper">
        <p className="sel-date">{upDate}</p>
      </div>
      {/* <div className="sel-description-wrapper">
        <p className="sel-description">{globals.article.description}</p>
      </div> */}
      
    </div>
    </>
  );
};

export default SelectedView;
