import React, { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from '../../routes/Home';
import SelectedView from '../../routes/SelectedView';
import { getAllData } from '../../utilities/utilities'
import { ProgressSpinner } from '../SpinLogo/SpinLogo';



function App() {
const [articleData, setArticleData] = useState('')
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





  return (
    <main className="app-container">
      {loading && <ProgressSpinner/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/selected" element={<SelectedView/>} />
      </Routes>
    </main>
  );
}

export default App;
