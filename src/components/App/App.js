import React, { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from '../../routes/Home/Home';
import SelectedView from '../../routes/SelectedView';
import { getAllData } from '../../utilities/utilities'
import { ProgressSpinner } from '../SpinLogo/SpinLogo';



function App() {
// const [articles, setArticles] = useState([])
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);





useEffect(() => {
    setLoading(true);
    getAllData('home').then(res => {
    console.log(res.results)
    setData(res.results)
  })
  setLoading(false);
}, []);

 



  return (
    <main className="app-container">
      {loading && <ProgressSpinner/>}
      <Routes>
        <Route path="/" element={<Home data={data} /> }/>
        <Route path="/selected" element={<SelectedView/>} />
      </Routes>
    </main>
  );
}

export default App;
