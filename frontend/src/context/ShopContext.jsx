import { createContext } from "react";
import React, { useState } from "react";

import { products } from "../assets/data";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [productData, setProductData] = useState(products);

  const value = {
    product: productData,
    setProductData,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
