import { createContext, useState } from "react";
import { menu_list } from "../assest/Assest";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

 
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev; 
      const updatedCount = prev[itemId] - 1;
      return {
        ...prev,
        [itemId]: updatedCount > 0 ? updatedCount : 0
      };
    });
  };

  
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
       
        const product = menu_list.find(
          (product) => String(product._id) === String(itemId)
        );
        if (product) {
          totalAmount += product.price * cartItems[itemId];
        }
      }
    }

    return totalAmount;
  };

  const contextValue = {
    menu_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
