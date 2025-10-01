import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { FaRegWindowClose } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Cart = () => {
  const { products, currency, cartItems , getCartCount} = useContext(ShopContext);

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
            initalQuantites[`${item}-${item}`] = cartItems[items][item];
          }
        }
      }
      setCartData(tempData);
      setQuantities(initalQuantites);
    }
  }, [cartItems, products]);
  return (
    <div>
      <div className="">
        <div className="">
          <div className="">
            {/* Title  */}
            <Title title1={"Cart "} title2={"List"} title1Styles={'h3'} />
            <h5>({getCartCount()} Items)</h5>
          </div>
          {/* Container */}
          <div className="">
            {cartData.map((item, i) => {
                const productData = products.find((product) => product._id === item._id)
                const key = `${item._id}-${item.color}`
                return (
                    <div key={i} className="">
                        <div className="">
                            <div className="">
                                <img src={productData.image[0]} alt="productImage" className="w-20 sm:w-18 rounded" />
                            </div>
                            <div className="">
                                <div className="">
                                    <h5>{productData.name}</h5>
                                    <FaRegWindowClose />
                                </div>
                                <p>{item.color}</p>
                                <div className="">
                                    <div className="">
                                        <button>
                                            <FaMinus />
                                        </button>
                                        <p>{quantities[key]}</p>
                                        <button>
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <h4>{currency}{productData.price}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
