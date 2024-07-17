import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/about';
import Booking from './pages/booking';
import Home from './pages/Home';
import Login from './pages/login';
import Profile from './pages/profile';
import SignUp from './pages/signUp';
import Faq from './pages/faq';
import PrivateRoute from './components/PrivateRoute'; 
import AppProvider from './components/AppProvider';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero user={user} />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login user={user} setUser={setUser} />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/home" element={<PrivateRoute ><Home/></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
