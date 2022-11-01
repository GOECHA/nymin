import React from 'react'
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer'
// import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import HeroImg from '../../components/HeroImg/HeroImg'
import './Home.css'


const Home = () => {
  return (
    <div className="home-container">
        <Header />
        <HeroImg />
        <ArticleContainer />
    </div>
  )
}

export default Home