import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-black">
              Contact <span className="text-gray-700">Us</span>
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or need support? We’re always
              ready to help you out.
            </p>
          </div>

          {/* Contact Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <form className="p-8 border border-gray-300 rounded-xl shadow-xl space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:gray-red-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:gray-red-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:gray-red-600 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="p-8 border border-gray-300 rounded-xl shadow-xl flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold text-black">Get in Touch</h3>
              <p className="text-gray-700">
                Reach out directly through our contact details or visit our
                store.
              </p>

              <div className="space-y-4 text-black font-medium">
                <p>📞 Phone: +880 1234-567890</p>
                <p>📧 Email: support@electronics.com</p>
                <p>📍 Address: 123 Electronics Market, Dhaka, Bangladesh</p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-5 pt-4">
                <a href="#" className="text-black hover:text-gray-700 text-xl">
                  🌐
                </a>
                <a href="#" className="text-black hover:text-gray-700 text-xl">
                  📘
                </a>
                <a href="#" className="text-black hover:text-gray-700 text-xl">
                  📸
                </a>
                <a href="#" className="text-black hover:text-gray-700 text-xl">
                  💬
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Contact;
