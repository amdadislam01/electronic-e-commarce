import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaCheck, FaHeart, FaStar } from "react-icons/fa";
import { FaStarHalfStroke, FaTruckFast } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");

  const fetchProduct = async () => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setImage(selectedProduct.image[0]);
      console.log(selectedProduct);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId, products]);

  if (!product) {
    return <div>Loading.........</div>;
  }
  return (
    <div>
      <div className="max-padd-container">
        {/* Product Data */}
        <div className="flex gap-10 flex-col xl:flex-row rounded-2xl p-3 mb-6">
          {/* Image */}
          <div className="flex flex-1 gap-x-2 max-w-[477px]">
            <div className="flex-1 flexCenter flex-col gap-[7px] flex-wrap">
              {product.image.map((item, i) => (
                <img
                  src={item}
                  alt="productImg"
                  className="object-cover aspect-square rounded-lg"
                  key={i}
                />
              ))}
            </div>
            <div className="flex-[4] flex">
              <img src={image} alt="productImage" className="rounded-xl" />
            </div>
          </div>
          {/* Product INFO */}
          <div className="flex-[1.5] rounded-2xl px-5 py-3 bg-primary">
            <h3 className="h3 leading-none">{product.name}</h3>
            {/* Rating / price */}
            <div className="flex items-baseline gap-x-5">
              <div className="flex items-center gap-x-2 text-secondary">
                <div className="flex gap-x-2 text-secondary">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span className="medium-14">(140)</span>
              </div>
            </div>
            <h4 className="h4 my-2">
              {currency}
              {product.price}.00
            </h4>
            <p className="max-w-[555px]">{product.description}</p>
            <div className="">
              <div className="">
                {[...product.colors].map((item, i) => (
                  <button
                    onClick={() => setColor(item)}
                    className={`h-9 w-9 rounded-full flexCenter`}
                    style={{ background: item }}
                    key={i}
                  >
                    {item === color ? (
                      <FaCheck
                        className={
                          item === "White" ? "text-black" : "text-white"
                        }
                      />
                    ) : (
                      <></>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <button
                className="btn-secondary !rounded-lg sm:w-1/2 flexCenter gap-x-2 capitalize"
                onClick={() => {}}
              >
                Add to Cart <TbShoppingBagPlus />
              </button>
              <button className="btn-white !rounded-lg !py-3.5"><FaHeart /></button>
            </div>
          <div className="">
            <FaTruckFast className="text-lg" />
            <span className="medium-14">Free Delivery on orders over 500$</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
