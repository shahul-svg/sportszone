import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './front/Login/Login';
import Navbar from './front/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/placeorder/Placeorder';

import Home from './pages/home/Home';
import Footer from '../src/front/Footer/Footer'

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
   <>
        {showLogin ? <Login setShowLogin={setShowLogin} />:<></>}

        <div className="app">
          <Navbar setShowLogin={setShowLogin} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Placeorder />} />
          </Routes>
        </div>
        <Footer/>
</>
        
      
  )
};

export default App;
