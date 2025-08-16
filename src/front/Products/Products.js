import React, { useContext } from 'react';
import './Products.css';
import { menu_list } from '../../assest/Assest.js';
import { StoreContext } from '../../context/Context';

const Products = () => {
  const { addToCart } = useContext(StoreContext);

  return (
    <div className="container2" id="products">
      {menu_list.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt={item.menu_name} />
          <p>{item.menu_name}</p>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <button onClick={() => addToCart(item._id)}>Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
