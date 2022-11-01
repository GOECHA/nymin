import React from 'react'
import MiniArticle from '../MiniArticle/MiniArticle'

import './ArticleContainer.css'



const ArticleContainer = ({articles, showArticles}) => {
console.log(showArticles)
// const displayArticles = articles.map((article, index)=>{
//     console.log(1234567, article)
//     return <MiniArticle 
//         id={index}
//         img ={article.artImg}
//         title={article.title}
//         date={article.date}
//         description={article.description}
//         />
// })


  return (
    <div className='article-container'>
     {/* {displayArticles} */}
    </div>
  )
}

export default ArticleContainer