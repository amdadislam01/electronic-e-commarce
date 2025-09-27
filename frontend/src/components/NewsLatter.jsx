import React from "react";
import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa6";
const NewsLatter = () => {
  return (
    <section className="max-padd-container border-t-[1px] border-b-[1px] border-primary py-4">
      <div className="flexBetween flex-wrap gap-7">
        <div className="">
          <h4 className="bold-14 uppercase tracking-wide">Subscribe newsletter</h4>
          <p className="">Get latest information on Events, Sales & Offers.</p>
        </div>
        <div className="">
          <div className="flex bg-primary">
            <input type="email" placeholder="Email Address" className="p-4 bg-primary w-[266px] outline-none text-[13px]" />
            <button className="btn-dark !rounded-none !text-[13px] !font-bold uppercase">Submit</button>
          </div>
        </div>
        <div className="flex gap-x-3 pr-14">
          <div className="h-8 w-8 rounded-full hover:bg-tertiary hover:text-white flexCenter transition-all duration-500">
            <FaFacebook />
          </div>
          <div className="h-8 w-8 rounded-full hover:bg-tertiary hover:text-white flexCenter transition-all duration-500">
            <FaInstagram />
          </div>
          <div className="h-8 w-8 rounded-full hover:bg-tertiary hover:text-white flexCenter transition-all duration-500">
            <FaDribbble />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLatter;
