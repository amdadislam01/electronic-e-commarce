import React, { useState } from "react";
import Title from "../components/Title";
import CartTotal from "./CartTotal";
import Footer from "../components/Footer";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  return (
    <div>
      <div className="bg-primary mb-16">
        {/* Container */}
        <form className="max-padd-container py-16">
          <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
            {/* LEFT SIDE */}
            <div className="flex-1 flex flex-col gap-3 text-[95%]">
              <Title title1={"Delivery"} title2={"Information"} />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
              <input
                type="text"
                name="lastName"
                placeholder="Email Address"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />
              <input
                type="number"
                name="lastName"
                placeholder="Phone Number"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Street"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="lastName"
                  placeholder="City"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="State"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="number"
                  name="lastName"
                  placeholder="Zip Code"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Country"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
            </div>
            {/* Right Side */}
            <div className="flex-1 flex flex-col">
              <CartTotal />
              {/* payment Method */}
              <div className="my-6">
                <h3 className="bold-20 mb-5">
                  Payment <span>Method</span>
                </h3>
                <div className="flex gap-3">
                  <div
                    className={`${
                      method === "stripe" ? "btn-dark" : "btn-white"
                    } !py-1 text-xs cursor-pointer`}
                    onClick={() => setMethod("stripe")}
                  >
                    Stripe
                  </div>
                  <div
                    className={`${
                      method === "cod" ? "btn-dark" : "btn-white"
                    } !py-1 text-xs cursor-pointer`}
                    onClick={() => setMethod("cod")}
                  >
                    Cash on Delivery
                  </div>
                </div>
              </div>
              <div className="">
                <button type="submit" className="btn-secondary">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
