import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import Item from "./Item";
import { products } from "../assets/data";
import { ShopContext } from "../context/ShopContext";

const NewArrivals = () => {
  const {product} = useContext(ShopContext)
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    const data = products.slice(0, 7);
    setPopularProduct(data);
  }, []);

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
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          666: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mt-5"
      >
        {popularProduct.map((product) => (
          <SwiperSlide key={product._id}>
            <Item product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;
