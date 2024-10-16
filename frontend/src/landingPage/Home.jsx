import React from "react";
import googlePlayBadge from "../assets/images/en_badge_web_generic.png";
import appleStoreBadge from "../assets/images/app-store-icons-apple-app-store.png";
import headerImage from "../assets/images/header-img.png"; // Update with correct path
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center  flex-wrap px-40 py-5">
        <div className="w-full md:w-1/2 pt-5">
          <h6 className="text-lg  py-5 text-blue-500">
            Easy way to know daily weather
          </h6>
          <Link to='/user/weatherSearching' className="text-4xl pb-5 font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Smart app for getting weather update.
          </Link>
          <p className="text-lg mb-4 ">
            Share your thoughts with us and make sure your nice journey
            anywhere.
          </p>
          <div className="flex space-x-4">
            <Link to="#">
              <img
                className="w-64  mt-2"
                src={googlePlayBadge}
                alt="Google Play Store Badge"
              />
            </Link>
            <Link to="#">
              <img
                className="w-64"
                src={appleStoreBadge}
                alt="Apple Store Badge"
              />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 img-container">
          <img
            className="w-full header-img"
            src={headerImage}
            alt="Header illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
