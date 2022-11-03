import React, {  useContext } from 'react'
import './Form.css'
import AppContext from "../AppContext";

const Form = () => {

  const globals = useContext(AppContext)

  // const handleClick = (e) => {
  //   // console.log(111, e.currentTarget.name)
  //   // console.log(111223, id)
  //   let art = globals.data.filter(article =>{
  //     return article.title === e.currentTarget.name ? article : "No articles found"
  //   })
  //   globals.setASearch(art)
  // // return( <Link to={`/selected/${id}`} />)
  // }
const searchArticles = (e) => {
  e.preventDefault()
  console.log(`globals.data)`,globals.data)
  return globals.data.filter((article) =>  {
   return article.title.toLowerCase().includes(article.title.toLowerCase()) ? article : "No articles found"
  }
  );
};

  return (
    <div className='form-container'>
        <form>
            <input type='text' className='form-control' placeholder='Search'></input>
            <button className='btn' onClick={(e) => searchArticles(e)} >Search</button>
        </form>
    </div>
  )
}

export default Form