import { createContext, useEffect } from "react";
import React, { useState } from "react";
import { products } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [productData, setProductData] = useState(products);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const currency = "$"
  const delivery_charges = 10
  const [cartItems, setCartItems] = useState({})

  // Adding items to cart
  const addToCart = async (itemId, color) => {
    if (!color) {
      toast.error("Please Select The color First")
      return
    }
    let cartData = structuredClone(cartItems)
    if (cartData[itemId]) {
      if (cartData[itemId][color]) {
        cartData[itemId][color] += 1
      }
      else{
        cartData[itemId][color] = 1
      }
    }
    else{
      cartData[itemId] = {}
      cartData[itemId][color] = 1
    }
    setCartItems(cartData)
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems])

  const value = {
    products: productData,   
    setProductData,
    search,
    setSearch,
    currency,
    delivery_charges,
    cartItems,
    setCartItems,
    addToCart
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
