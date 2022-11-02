import React from 'react'
import './MiniArticle.css'


const MiniArticle = ({title, img, date, description, section}) => {

  


  return (
    <div className='mini-article'>
        <div className='section-container'>    
        <p className='section'>{section}</p>
        </div>
        <img src={img} className='mini-img' alt='mini img'/>
        <h3 className='mini-header'>{title}</h3>
        <div className='date-wrapper'>
        <p className='mini-date'>{date}</p>
        </div>
        <div className='mini-description-wrapper'>
        <p className='mini-description'>{description}</p>
        </div>
    </div>
  )
}

export default MiniArticle