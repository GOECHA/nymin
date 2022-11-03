import React from 'react'
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer'
// import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import HeroImg from '../../components/HeroImg/HeroImg'
import './Home.css'


const Home = ({data}) => {
console.log(`home-triggered`)
console.log(data)
  return (
    <div className="home-container">
        <Header />
        <HeroImg />
        <ArticleContainer data={data} />
    </div>
  )
}

export default Home