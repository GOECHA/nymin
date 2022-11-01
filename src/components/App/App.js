import React, { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from '../../routes/Home/Home';
import SelectedView from '../../routes/SelectedView';
import { getAllData } from '../../utilities/utilities'
import { ProgressSpinner } from '../SpinLogo/SpinLogo';



function App() {
const [articles, setArticles] = useState([])
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);





useEffect(() => {
  getAllData(data)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {
      setData(actualData);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

// console.log(`line44`,  getAllData(data))
// console.log(`line45`,  data)


const showArticles = (article)=>{
  setArticles([...articles, article])
  console.log(`article`, [article])
}



  return (
    <main className="app-container">
      {loading && <ProgressSpinner/>}
      <Routes>
        <Route path="/" element={<Home articles={articles} showArticles={showArticles} /> }/>
        <Route path="/selected" element={<SelectedView/>} />
      </Routes>
    </main>
  );
}

export default App;
