import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import About from "./Pages/About"
import NotFound from "./Pages/NotFound"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/Login" element={ <Login/> } />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/About" element={ <About/> } />
      <Route path="/*" element={ <NotFound/> } />

    </Routes>
    <ToastContainer
      position='top-center'
    />
    </BrowserRouter>
  )
}

export default App