import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import "./MiniArticle.css";
import AppContext from "../AppContext";


const MiniArticle = ({
  title,
  img,
  date,
  description,
  section,
  id,
  url
}) => {

  const globals = useContext(AppContext)

  const handleClick = (e) => {
    console.log(111, e.currentTarget.name)
    // console.log(111223, id)
    let art = globals.data.find(article =>{
      return article.title === e.currentTarget.name ? article : console.log(`boats n hoes`)
    })
    globals.setArticle(art)
  // return( <Link to={`/selected/${id}`} />)
  }

  return (
    <Link to={`/selected/${id}`} >
    <button className="mini-article" name={id} onClick={(e) => handleClick(e)} >
        <div className="mini-header-wrapper">
          <h3 className="mini-header">{title}</h3>
        </div>
        <div className="img-wrapper">
          <img src={img} className="mini-img" alt="mini img" />
        </div>
        <div className="section-container">
          <p className="section">{section}</p>
        </div>
        <div className="date-wrapper">
          <p className="mini-date">{date}</p>
        </div>
        <div className="mini-description-wrapper">
          <p className="mini-description">{description}</p>
        </div>
      </button>
      </Link>
    
  );
};

export default MiniArticle;
