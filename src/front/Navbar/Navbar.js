import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from '../../context/Context'
import { img } from '../../assest/Assest'

function Navbar({ setShowLogin }) {
  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#footer">Contact Us</a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={img.add_logo} alt="cart" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
