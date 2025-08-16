import React, { useState } from 'react'
import './Home.css'
import Header from '../../front/Header/Header'
import  About from '../../front/About/About'
import Products from '../../front/Products/Products'


function Home() {
  const [category,setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <About category={category} setCategory={setCategory}/>
      <Products category={category}/>
   
    </div>
  )
}

export default Home;