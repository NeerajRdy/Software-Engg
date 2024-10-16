import React from 'react';
import logo from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto flex justify-between">
        <img src={logo} alt="Logo" className="w-28" />
        <div className="flex space-x-6 ">
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Testimonials</a>
          <a href="#" className="hover:underline">Download</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
