import React from 'react'
import MiniArticle from '../MiniArticle/MiniArticle'
// import random from '../../images/building2.png'
import './ArticleContainer.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Parallax, Navigation, Mousewheel, Keyboard } from "swiper";

const ArticleContainer = ({data}) => {
console.log(data)





let image = <img src='https://www.google.com/aclk?sa=l&ai=DChcSEwjFyeWbko77AhWY8OMHHVKOB2kYABA1GgJ5bQ&sig=AOD64_0Z1L43vQp2fi29wCyTp6anQMATCA&adurl&ctype=5&ved=2ahUKEwi579Gbko77AhWBl1MKHShzCPgQ8w56BQgBENkD' alt='' />

const displayArticles = data.map((article, index)=>{
   let date = article.published_date.slice(0, article.published_date.length-15)

    const newImage = () =>{return article.multimedia ? article.multimedia[0].url : image }
    console.log(1234567, article)
    return <MiniArticle 
        id={index}
        section={article.section}
        img= {newImage()}
        title={article.title}
        date={date}
        description={article.abstract}
        key={index}
        />
})
const carouselArticles = 
    displayArticles.map((article) => {
        console.log(`555555`, article)
        // return article
   return <SwiperSlide key={article.id}>{article}</SwiperSlide>
})



const us =  carouselArticles.filter((item, index) => {
    console.log(111, item.props.children.props.section)   
    let usArticles = item.props.children.props.section.includes('us')
    return usArticles
})

const world =  carouselArticles.filter((item, index) => {
    console.log(111, item.props.children.props.section)   
    let usArticles = item.props.children.props.section.includes('world')
    return usArticles
})

const scienceTech =  carouselArticles.filter((item, index) => {
    console.log(111, item.props.children.props.section)   
    return item.props.children.props.section.includes('science') ? item : 
           item.props.children.props.section.includes('technology') ? item : null
})


const arts =  carouselArticles.filter((item, index) => {
    console.log(111, item.props.children.props.section)   
    let usArticles = item.props.children.props.section.includes('arts')
    return usArticles
})


const dining =  carouselArticles.filter((item, index) => {
    console.log(111, item.props.children.props.section)   
    let usArticles = item.props.children.props.section.includes('dining')
    return usArticles
})

const sports =  carouselArticles.filter((item, index) => {
    console.log(111, item.props.children.props.section)   
    let usArticles = item.props.children.props.section.includes('sports')
    return usArticles
})

const misc =  carouselArticles.filter((item, index) => {
    console.log(111, item.props.children.props.section)   
   return item.props.children.props.section.includes('well') ? item : 
          item.props.children.props.section.includes('cross') ? item :
          item.props.children.props.section.includes('obit') ? item :
          item.props.children.props.section.includes('upshot') ? item :
          item.props.children.props.section.includes('briefing') ? item :
          item.props.children.props.section.includes('opinion') ? item : null
})

// console.log(111122222, carouselArticles)



  return (
    <div className='article-container'>
        <Swiper
     style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      parallax={true}
      navigation={true}
      modules={[Parallax, Navigation, Mousewheel, Keyboard]}
      className="my-swiper"
      slidesPerView={5}
      slidesPerGroup={5}
      spaceBetween={5}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      key={1}
    >
    <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div> 
     {/* {carouselArticles} */}
     {us}
    </Swiper>
    <Swiper
     style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      parallax={true}
      navigation={true}
      modules={[Parallax, Navigation, Mousewheel, Keyboard]}
      className="my-swiper"
      slidesPerView={5}
      slidesPerGroup={5}
      spaceBetween={5}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      key={1}
    >
    <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div> 
     {/* {carouselArticles} */}
     {world}
    </Swiper>
    <Swiper
     style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      parallax={true}
      navigation={true}
      modules={[Parallax, Navigation, Mousewheel, Keyboard]}
      className="my-swiper"
      slidesPerView={5}
      slidesPerGroup={5}
      spaceBetween={5}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      key={1}
    >
    <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div> 
     {/* {carouselArticles} */}
     {scienceTech}
    </Swiper>
         <Swiper
     style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      parallax={true}
      navigation={true}
      modules={[Parallax, Navigation, Mousewheel, Keyboard]}
      className="my-swiper"
      slidesPerView={5}
      slidesPerGroup={5}
      spaceBetween={5}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      key={1}
    >
    <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div> 
     {/* {carouselArticles} */}
     {arts}
    </Swiper>
    <Swiper
     style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      parallax={true}
      navigation={true}
      modules={[Parallax, Navigation, Mousewheel, Keyboard]}
      className="my-swiper"
      slidesPerView={5}
      slidesPerGroup={5}
      spaceBetween={5}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      key={1}
    >
    <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div> 
     {/* {carouselArticles} */}
     {dining}
    </Swiper>
    <Swiper
     style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      parallax={true}
      navigation={true}
      modules={[Parallax, Navigation, Mousewheel, Keyboard]}
      className="my-swiper"
      slidesPerView={5}
      slidesPerGroup={5}
      spaceBetween={5}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      key={1}
    >
    <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div> 
     {/* {carouselArticles} */}
     {sports}
    </Swiper>
    <Swiper
     style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={600}
      parallax={true}
      navigation={true}
      modules={[Parallax, Navigation, Mousewheel, Keyboard]}
      className="my-swiper"
      slidesPerView={5}
      slidesPerGroup={5}
      spaceBetween={5}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      key={1}
    >
    <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div> 
     {/* {carouselArticles} */}
     {misc}
    </Swiper>
     
    </div>
  )
}

export default ArticleContainer