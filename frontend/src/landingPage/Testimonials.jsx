import React from 'react';
import user from '../assets/images/user-img.png'

const Testimonials = () => {
  return (
    <div id="testimonials" className="container mx-auto py-10 bg-gray-50">
      <h2 className="text-center text-3xl font-semibold">What People are Saying About Us</h2>
      <div className="max-w-xl mx-auto py-8">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={user} alt="User" className="w-12 h-12 rounded-full" />
              <h4 className="ml-3 text-xl">Evan Johnson</h4>
            </div>
            <div className="flex space-x-1">
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-center">“Best weather app on the market, if you want simple, detailed view...”</p>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
