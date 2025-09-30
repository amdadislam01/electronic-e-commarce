import { createContext } from "react";
import React, { useState } from "react";
import { products } from "../assets/data";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [productData, setProductData] = useState(products);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const value = {
    products: productData,   
    setProductData,
    search,
    setSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
