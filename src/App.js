import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import SigninPage from './pages/Signin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signin" element={<SigninPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
