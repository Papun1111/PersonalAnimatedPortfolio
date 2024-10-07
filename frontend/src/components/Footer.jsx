import React from "react";

import usericon from "../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer bg-gradient-to-r from-blue-900 to-blue-600 text-white py-10">
      <div className="footer-top container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="footer-top-left md:w-1/2">
          <h2 className="logo text-3xl font-bold">Papun</h2>
          <p className="mt-2 text-gray-200">
            I'm Papun, a web developer from India with two years of experience
            in MERN stack and Data Structures & Algorithms (DSA). I am
            passionate about basketball and enjoy listening to Arctic Monkeys.
          </p>
        </div>
        <div className="footer-top-right md:w-1/2 mt-6 md:mt-0">
          <div className="footer-email-input flex items-center border border-gray-400 rounded px-2 py-1">
            <img src={usericon} alt="" className="mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-transparent outline-none text-gray-200 placeholder-gray-400"
            />
            <button className="footer-subscribe bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/papunm/" className="text-gray-200 hover:text-white">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Papun1111" className="text-gray-200 hover:text-white">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 my-6" />
      <div className="footer-bottom container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="footer-bottom-left text-sm">&copy; 2024 Papun Mohapatra. All rights reserved.</p>
        <div className="footer-bottom-right flex space-x-6">
          <p className="text-sm hover:text-gray-300 cursor-pointer">Terms of Service</p>
          <p className="text-sm hover:text-gray-300 cursor-pointer">Privacy Policy</p>
          <p className="text-sm hover:text-gray-300 cursor-pointer">Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
