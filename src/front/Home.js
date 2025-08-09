import React from 'react'
import './Home.css';

const Home = () => {
  const handleClick = () => {
    alert(`Welcome to Sports Zone`);
  }

  return (
    <div className='wall'>
      <h1>Sports Zone</h1>
      <p>
        Sports Zone is a dynamic and energetic space dedicated to sports enthusiasts, athletes, and fitness lovers.
        It serves as a central hub where people can explore, experience, and engage with various sports and physical activities.
        Whether it’s a physical venue, an online platform, or a store, Sports Zone promotes an active lifestyle
        and brings together a community that shares a passion for sports.
      </p><br></br>
      <p>
        Ground, artificial turf, and indoor courts – from top brands like Nike, Adidas, Puma, and more.
        <strong>Kits & Jerseys:</strong> Official club and national team jerseys, training kits, and custom teamwear.
        <strong>Balls & Accessories:</strong> Match balls, training balls, shin guards, goalkeeper gloves, cones, pumps, and more.
        <strong>Fan Gear:</strong> Scarves, caps, bags, and limited-edition collectibles for your favorite clubs and players.
        <strong>Kids & Youth:</strong> Complete football gear and apparel for young aspiring players.
      </p><br></br>
      <button onClick={handleClick}>SPORTS ZONE</button>
    </div>
  )
}

export default Home;
