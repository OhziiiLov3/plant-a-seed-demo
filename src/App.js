import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'



function App() {
  return (
    <div > 
    <h1>Plant-A-Seed</h1>
    <Routes>

      <Route path='/' element={<Home/>} />


    </Routes>
    </div>
  );
}

export default App;
