import React from "react";
import MiniArticle from "../MiniArticle/MiniArticle";
// import random from '../../images/building2.png'
import "./ArticleContainer.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Parallax, Navigation, Mousewheel, Keyboard } from "swiper";


const ArticleContainer = ({ data }) => {
  console.log(data);

  let image = (
    <img
      src="https://www.google.com/aclk?sa=l&ai=DChcSEwjFyeWbko77AhWY8OMHHVKOB2kYABA1GgJ5bQ&sig=AOD64_0Z1L43vQp2fi29wCyTp6anQMATCA&adurl&ctype=5&ved=2ahUKEwi579Gbko77AhWBl1MKHShzCPgQ8w56BQgBENkD"
      alt=""
    />
  );


  const displayArticles = data.map((article, index) => {
    let date =[article.published_date.slice(
      0,
      article.published_date.length - 15
    )]
    const newImage = () => {
      return article.multimedia ? article.multimedia[0].url : image;
    };
    return (
      <MiniArticle
        id={article.title}
        section={article.section}
        img={newImage()}
        title={article.title}
        date={date}
        description={article.abstract}
        key={index}
        shortUrl={article.short_url}
        url={`/selected/${article.title}`}
      />
    );
  });
  const carouselArticles = displayArticles.map((article, index) => {
    return <SwiperSlide key={Math.random(13)}>{article}</SwiperSlide>;
  });

  const us = carouselArticles.filter((item, index) => {
    let usArticles = item.props.children.props.section.includes("us");
    return usArticles;
  });

  const world = carouselArticles.filter((item, index) => {
    let usArticles = item.props.children.props.section.includes("world");
    return usArticles;
  });

  const dining = carouselArticles.filter((item, index) => {
    return item.props.children.props.section.includes("science")
      ? item
      : item.props.children.props.section.includes("health")
      ? item
      : item.props.children.props.section.includes("technology")
      ? item
      : item.props.children.props.section.includes("dining")
      ? item
      : item.props.children.props.section.includes("food")
      ? item
      : item.props.children.props.section.includes("arts")
      ? item
      : item.props.children.props.section.includes("sports")
      ? item
      : item.props.children.props.section.includes("fashion")
      ? item
      : null;
  });

  const misc = carouselArticles.filter((item, index) => {
    // console.log(111, item.props.children.props.section)
    return item.props.children.props.section.includes("well")
      ? item
      : item.props.children.props.section.includes("podcasts")
      ? item
      : item.props.children.props.section.includes("cross")
      ? item
      : item.props.children.props.section.includes("obit")
      ? item
      : item.props.children.props.section.includes("upshot")
      ? item
      : item.props.children.props.section.includes("briefing")
      ? item
      : item.props.children.props.section.includes("opinion")
      ? item
      : null;
  });

  // console.log(111122222, carouselArticles)

  return (
    <div className="article-container">
      <div className="carousel-container">
        <div className="carousel-title-wrapper">
          <h2 className="carousel-title">US</h2>
        </div>
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
          breakpoints={{
            // when window width is >= 640px
            375: {
              width: 375,
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
            640: {
              width: 640,
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
          }}
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={5}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          key={1}
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          {us}
        </Swiper>
      </div>
      <div className="carousel-container">
        <div className="carousel-title-wrapper">
          <h2 className="carousel-title">WORLD</h2>
        </div>
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
          breakpoints={{
            // when window width is >= 640px
            375: {
              width: 375,
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
            640: {
              width: 640,
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
          }}
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={5}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          key={1}
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          {/* {carouselArticles} */}
          {world}
        </Swiper>
      </div>
      <div className="carousel-container">
        <div className="carousel-title-wrapper">
          <h2 className="carousel-title">TECH, HEALTH, SPORTS, ARTS</h2>
        </div>
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
          breakpoints={{
            // when window width is >= 640px
            375: {
              width: 375,
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
            640: {
              width: 640,
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
          }}
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={5}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          key={1}
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          {/* {carouselArticles} */}
          {dining}
        </Swiper>
      </div>
      <div className="carousel-container">
        <div className="carousel-title-wrapper">
          <h2 className="carousel-title">MISC</h2>
        </div>
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
          breakpoints={{
            // when window width is >= 640px
            375: {
              width: 375,
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
            640: {
              width: 640,
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 1,
            },
          }}
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={5}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          key={1}
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          {/* {carouselArticles} */}
          {misc}
        </Swiper>
      </div>
    </div>
  );
};

export default ArticleContainer;
