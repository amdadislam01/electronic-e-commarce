import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const RelatedProduct = ({ category }) => {
  const { products } = useContext(ShopContext);
  const [reletedProduct, setReletedProduct] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
        let filtered = products.slice()
        filtered = filtered.filter((item)=> category === item.category)

        setReletedProduct(filtered.slice(0, 5))
    }
  }, [products]);
  return (
    <section className="max-padd-container py-16">
      <Title
        title1={"Related"}
        title2={"Products"}
        titleStyles={"pb-10"}
        paraStyles={"!block"}
      />
      {/* Container */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {reletedProduct.map((product) => (
          <div className="" key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProduct;
