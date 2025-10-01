import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { FaRegWindowClose } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import CartTotal from "./CartTotal";
import Footer from "../components/Footer";

const Cart = () => {
  const { products, currency, cartItems, getCartCount, updateQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      const initalQuantites = {};
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              color: item,
              quantity: cartItems[items][item],
            });
            initalQuantites[`${items}-${item}`] = cartItems[items][item];
          }
        }
      }
      setCartData(tempData);
      setQuantities(initalQuantites);
    }
  }, [cartItems, products]);

  const increment = (id, color) => {
  const key = `${id}-${color}`;
  const newValue = quantities[key] + 1;
  setQuantities((prev) => ({ ...prev, [key]: newValue }));
  updateQuantity(id, color, newValue); 
};

const dicrement = (id, color) => {
  const key = `${id}-${color}`;
  if (quantities[key] > 1) {
    const newValue = quantities[key] - 1;
    setQuantities((prev) => ({ ...prev, [key]: newValue }));
    updateQuantity(id, color, newValue); 
  }
};


  return (
    <section>
      <div className="bg-primary mb-16">
        <div className="max-padd-container py-10">
          <div className="flexStart gap-x-4">
            {/* Title  */}
            <Title title1={"Cart "} title2={"List"} title1Styles={"h3"} />
            <h5 className="medium-15 text-gray-30 relative  bottom-1.5">
              ({getCartCount()} Items)
            </h5>
          </div>
          {/* Container */}
          <div className="mt-6">
            {cartData.map((item, i) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              const key = `${item._id}-${item.color}`;
              return (
                <div key={i} className="bg-white p-2 mb-3 rounded-lg">
                  <div className="flex items-center gap-x-3">
                    <div className="flex items-start gap-6">
                      <img
                        src={productData.image[0]}
                        alt="productImage"
                        className="w-20 sm:w-18 rounded"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flexBetween">
                        <h5 className="h5 !my-0 line-clamp-1">
                          {productData.name}
                        </h5>
                        <FaRegWindowClose onClick={() => updateQuantity(item._id, item.color, 0)} className="cursor-pointer text-secondary" />
                      </div>
                      <p className="bold-14 my-0.5">{item.color}</p>
                      <div className="flexBetween">
                        <div className="flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary">
                          <button onClick={() => dicrement(item._id, item.color)} className="p-1.5 bg-white text-secondary rounded-full shadow-md">
                            <FaMinus  className="text-xs" />
                          </button>
                          <p className="px-2">{quantities[key]}</p>
                          <button onClick={() => increment(item._id, item.color)} className="p-1.5 bg-white text-secondary rounded-full shadow-md">
                            <FaPlus className="text-xs" />
                          </button>
                        </div>
                        <h4 className="h4">
                          {currency}
                          {productData.price}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex my-20">
            <div className="w-full sm:w-[450px]">
              <CartTotal />
              <button className="btn-secondary mt-7">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Cart;
