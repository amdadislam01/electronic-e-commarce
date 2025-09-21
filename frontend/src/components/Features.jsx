import React from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { AiFillTruck } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

const Features = () => {
  return (
    <section className='max-padd-container mt-16'>
      {/* Container */}
      <div className="max-padd-container flexBetween flex-wrap gap-8 rounded-2xl">
        <div className="flexCenter gap-x-3">
          <RiMoneyDollarCircleLine className='text-3xl' />
          <div className="">
            <h4 className='medium-15'>MONEY-BACK-GUARANTEE</h4>
            <p>100% refund guaranteed if you're not satisfied.</p>
          </div>
        </div>
        <div className="flexCenter gap-x-3">
          <AiFillTruck className='text-3xl'  />
          <div className="">
            <h4 className='medium-15'>FREE SHIPPING & RETURNS</h4>
            <p>Free shipping available on all orders above $99.</p>
          </div>
        </div>
        <div className="flexCenter gap-x-3">
          <BiSupport className='text-3xl'  />
          <div className="">
            <h4 className='medium-15'>24/7 ONLINE SUPPORT</h4>
            <p>Our team is here to assist you round the clock..</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
