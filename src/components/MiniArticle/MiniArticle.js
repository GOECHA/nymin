import React from 'react'
import './MiniArticle.css'


const MiniArticle = ({title, artImg, date, description}) => {
  return (
    <div className='mini-article'>
        <img src={artImg} className='mini-img' alt='mini img'/>
        <h2 className='mini-header'>{title}</h2>
        <p className='mini-date'>{date}</p>
        <p className='mini-description'>{description}</p>
    </div>
  )
}

export default MiniArticle