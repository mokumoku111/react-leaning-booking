import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from './layout/Main';
import List from './layout/List';
import Hotel from './layout/Hotel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

