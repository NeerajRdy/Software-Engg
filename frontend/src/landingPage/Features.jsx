import React from 'react';
import features from '../assets/images/feature-img.png'


const Features = () => {
  return (
    <div id="feature" className="px-32 py-10 ">
      <h2 className="text-center text-5xl text-[#28B6FC] font-semibold ">Features</h2>
      <div className="flex justify-center items-center">
        <div>
          <img src={features} alt="Feature" className="w-full" />
        </div>
        <div className='w-[90%]'>
          <div className="py-2">
            <h3 className="text-2xl pb-5 text-blue-500  font-semibold">10-day forecast</h3>
            <p className="text-left text-gray-600">A 10-day weather forecast is available for most countries and regions. The data is provided by Apple Weather. If you use iOS 14 or earlier, you'll see a 10-day forecast that's provided by The Weather Channel.</p>
          </div>
          <div className="py-2">
            <h3 className="text-2xl pb-5 text-blue-500  font-semibold">Severe weather information</h3>
            <p className="text-gray-600">Severe weather information is available from national weather services for Australia, Brazil, Canada, India, Japan, Mexico, Thailand, the United States, and most countries and regions in Europe. Severe weather information is available from Weather for China mainland..</p>
          </div>
          <div className="py-2">
            <h3 className="text-2xl pb-5 text-blue-500  font-semibold">Next-hour precipitation</h3>
            <p className="text-gray-600">Next-hour precipitation forecasts and precipitation notifications are available for Australia, Ireland, the United Kingdom, and the United States. The information is provided by Apple using data from national weather services.</p>
          </div>
          <div className="py-2">
            <h3 className="text-2xl pb-5 text-blue-500  font-semibold">Air quality</h3>
            <p className="text-gray-600">Air quality information is provided by BreezoMeter for Canada, France, Germany, India, Italy, Japan, Mexico, Netherlands, Singapore, South Korea, Spain, the United Kingdom, and the United States. Air quality information for China mainland is provided by Weather and reflects data from air monitoring stations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
