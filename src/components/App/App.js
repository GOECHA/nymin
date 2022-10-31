import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from '../../routes/Home';
import SelectedView from '../../routes/SelectedView';


function App() {
  return (
    <main className="app-container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/selected" element={<SelectedView/>} />
      </Routes>
    </main>
  );
}

export default App;
