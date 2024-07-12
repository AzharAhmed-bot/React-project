import React from 'react';
import About from "./pages/about";
import Home from "./pages/Home";
import Booking from "./pages/booking";
import Login from "./pages/login";
import Profile from "./pages/profile";
import SignUp from "./pages/signUp";
import Hero from './pages/Hero';
import Faq from "./pages/faq"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

function App() {

  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/booking" element={<Booking/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/Hero" element={<Hero/>}/>
    <Route path="/faq" element={<Faq/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
