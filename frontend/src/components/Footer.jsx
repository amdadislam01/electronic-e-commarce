import React from "react";
import cards from "../assets/cards.png"


const Footer = () => {
  return (
    <footer>
      <div className="max-padd-container flex items-start justify-between flex-wrap gap-12 mt-12">
        {/* logo - Left side */}
        <div className="flex flex-col max-w-sm gap-y-5">
          <div className="bold-28">
            ElectroPoint
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            earum reprehenderit possimus!
          </p>
          <img src={cards} alt="" height={33} width={144} className="mt-5"/>
        </div>
        <div className="flexStart gap-7 xl:gap-x-36 flex-wrap">
          <ul>
            <h4 className="h4 mb-3">Customer Service</h4>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Help center
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Payment methods
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Contact
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Shipping status
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Complaints
              </a>
            </li>
          </ul>
          <ul>
            <h4 className="h4 mb-3">Legal</h4>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Privacy Policy
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Cookie settings
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Terms & conditions
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Cancelation
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Imprint
              </a>
            </li>
          </ul>
          <ul>
            <h4 className="h4 mb-3">Others</h4>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Our teams
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Sustainability
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Press
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Jobs
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* copyrights */}
      <p className="max-padd-container bg-primary medium-14 py-2 px-8 rounded flexBetween mt-6">
        <span>2025 ElectroPoint</span>
        <span>Developed By Amdad Islam</span>
        <span>All rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
