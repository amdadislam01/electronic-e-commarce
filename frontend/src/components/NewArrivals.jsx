import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const NewArrivals = () => {
  const { product } = useContext(ShopContext);
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    if (product && product.length > 0) {
      const data = product.slice(0, 7);
      setPopularProduct(data);
    }
  }, [product]);

  return (
    <section className="max-padd-container py-16">
      <Title
        title1={"New"}
        title2={"Arrivals"}
        titleStyles={"pb-10"}
        paraStyles={"!block"}
      />
      {/* Container */}
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // navigation={true}
        loop={true} 
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className=""
      >
        {popularProduct.map((p) => (
          <SwiperSlide key={p._id}>
            <Item product={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;
