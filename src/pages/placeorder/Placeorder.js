import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/Context'

function Placeorder() {

  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='place-order'>
      <div className="place-order-left">
          <p className='title'>Details</p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="text" placeholder='Email address' />
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='city' />
            <input type="text" placeholder='state' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>${getTotalCartAmount() + 2}</b>
            </div>

          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  )
}

export default Placeorder