import React from 'react';
import google from '../assets/images/en_badge_web_generic.png';
import store from '../assets/images/app-store-icons-apple-app-store.png';

const DownloadSection = () => {
  return (
    <div
      id="download"
      className="bg-gradient-to-r from-blue-500 to-teal-400 py-10"
    >
      <div className="container mx-auto text-center">
        <h4 className="text-xl font-semibold text-white font-poppins">
          How You Can Download App?
        </h4>
        <p className="text-white font-poppins my-4">
          Feel free to download your app, it’s available now for Apple Store and
          Play Store
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="#">
            <img className="w-32" src={google} alt="Google Play" />
          </a>
          <a href="#">
            <img className="w-32" src={store} alt="App Store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
