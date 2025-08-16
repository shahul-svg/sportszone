import React, { useContext, useState } from 'react'
import './Navbar.css'

import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/Context';
import {img} from '../../assest/Assest'
function Navbar({setShowLogin}) {

const [menu,setMenu] =useState("home");
const {getTotalCartAmount} =useContext(StoreContext);


  return (
    <div className="navbar">
     
           <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":" "}>home</Link>
            <a href='#about' onClick={()=>setMenu("about")}className={menu==="about"?"active":" "}>about</a>
            <a href='#products' onClick={()=>setMenu("products")}className={menu==="products"?"active":" "}>products</a>
         <a href='#footer' onClick={()=>setMenu("contact")} className={menu==="contact" ? "active" : ""}>contact us</a>

           </ul>
           <div className="navbar-right">
               <div className="navbar-search-icon">
              <Link to='/cart' ><img src={img.add_logo} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
               </div>
               <button onClick={()=>setShowLogin(true)}>sign in</button>
           </div>
    
    
    </div>
  )
}

export default Navbar