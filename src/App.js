import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Prayers from './components/Prayers'


function App() {
  return (
    <div > 
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/prayers' element={<Prayers/>} />
    </Routes>
    </div>
  );
}

export default App;
