import React, { useState } from "react";
import loginImage from "../assets/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-50">
      {/* Container */}
      <div className="flex w-[90%] md:w-[70%] lg:w-[60%] bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Image Side */}
        <div className="hidden md:block w-1/2">
          <img
            src={loginImage}
            alt="login"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Side */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            {currState}
          </h3>

          <form className="space-y-4">
            {/* Show Name if Sign Up */}
            {currState === "Sign Up" && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 ring-1 ring-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-3 py-2 ring-1 ring-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 ring-1 ring-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>

            {/* Submit Button */}
            <Link to={'/'}>
              <button
                type="submit"
                className="w-full font-semibold btn-secondary transition mt-4"
              >
                {currState === "Sign Up" ? "Sign Up" : "Login"}
              </button>
            </Link>
          </form>

          {/* Links */}
          <div className="mt-4 text-center text-sm text-gray-600">
            <p className="cursor-pointer hover:underline">
              Forgot your password?
            </p>
            {currState === "Login" ? (
              <p className="mt-2">
                Don’t have an account?{" "}
                <span
                  onClick={() => setCurrState("Sign Up")}
                  className="font-bold cursor-pointer hover:underline"
                >
                  Create account
                </span>
              </p>
            ) : (
              <p className="mt-2">
                Already have an account?{" "}
                <span
                  onClick={() => setCurrState("Login")}
                  className="font-bold cursor-pointer hover:underline"
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
