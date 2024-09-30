import React, { createContext, useState } from 'react'
import { product_list } from '../assets/assets';
export const StoreContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0;index < product_list.length + 1;index++)
    {
      cart[index] = 0;
    }
    return cart;
}

const StoreContextProvider = (props) => {

  
  const [cartItems , setCartItems] = useState(getDefaultCart());

  const addToCart = ((itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
    
  })

  const removeFromCart = ((itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}));
  })

  const removeItem = ((itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - prev[itemId]}));
  })
  const getTotalCartAmount = () => {
    let sum = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        // Convert itemId to a number for comparison
        const partiItem = product_list.find((product) => product.id === Number(itemId));

        // Ensure partiItem exists before accessing its properties
        if (partiItem) {
          sum += partiItem.price * cartItems[itemId];
        }
      }
    }
    return sum;
  }

  const contextValue = {
    product_list,
    cartItems,
    addToCart,
    removeFromCart,
    removeItem,
    getTotalCartAmount
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;


