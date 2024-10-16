import React from "react";
import logo from "../assets/images/logo.svg";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-3">
      <div className="container mx-auto flex justify-between items-center cursor-pointer">
        <RouterLink to="/">
          <img src={logo} alt="Logo" className="w-38" />
        </RouterLink>
        <div className="space-x-6 text-lg">
          {/* Smooth scrolling links */}
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
          <ScrollLink
            className="text-gray-800"
            smooth={true}
            duration={500}
            to="features"
          >
            Features
          </ScrollLink>
          <ScrollLink
            className="text-gray-800"
            smooth={true}
            duration={500}
            to="testimonials"
          >
            Testimonials
          </ScrollLink>
          <ScrollLink
            className="text-gray-800"
            smooth={true}
            duration={500}
            to="download"
          >
            Download
          </ScrollLink>

          <RouterLink className="text-gray-800" to="/user/contactUs">
            Contact Us
          </RouterLink>

          {/* React Router links for separate login and signup pages */}
          <RouterLink to="/user/signup" className=" py-2">
            Sign up
          </RouterLink>

          <RouterLink
            to="/user/login"
            className="px-4 py-1 bg-gradient-to-l from-blue-500 to-teal-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 text-white rounded-md"
          >
            Log In
          </RouterLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
