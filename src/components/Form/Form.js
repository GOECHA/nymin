import React, {  useState, useContext } from 'react'
import './Form.css'
import AppContext from "../AppContext";


const Form = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [q, setQ] = useState("")
  const globals = useContext(AppContext)





const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
// };
console.log(`globals.data.title`, globals.data)
console.log(`earchInput`,searchInput)
const articleData = globals.data.filter((article) => {
  console.log(1234567, article.title)
   return article
     } )
console.log(`articleData1`,articleData)
return articleData.title > 0 ?  articleData
 : console.log('not found')
}
// console.log(111122134235, handleChange())



  return (
    <div className='form-container'>
        <form>
            <input type='text' className='form-control' placeholder='Search by title . . .' onChange={handleChange}
   value={searchInput}></input>
            <button className='btn' onClick={(e) => handleChange(e)} >Search</button>
        </form>
    </div>
  )
}

export default Form

// const Form = () => {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);
//   const [searchInput, setSearchInput] = useState("title","section");
//   const [q, setQ] = useState("")
//   const globals = useContext(AppContext)




// const handleChange = (e) => {
//   e.preventDefault();
//   setSearchInput(e.target.value);
// // };
// console.log(`globals.data.title`, globals.data)
// console.log(`earchInput`,searchInput)
// return searchInput.length > 0 ?  
// globals.data.filter((article) => {
//   console.log(1234567, article)
//     return article.title == (searchInput);
// }) : console.log('not found')
// }
// // console.log(111122134235, handleChange())



//   return (
//     <div className='form-container'>
//         <form>
//             <input type='text' className='form-control' placeholder='Search by title . . .' onChange={handleChange}
//    value={searchInput}></input>
//             <button className='btn' onClick={(e) => handleChange(e)} >Search</button>
//         </form>
//     </div>
//   )
// }

// export default Form