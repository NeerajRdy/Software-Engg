// import React, { useState } from 'react';

// const WeatherDashboard = () => {
//   const [location, setLocation] = useState({ city: 'City', country: 'Country' });

//   // Function to handle location search
//   const handleLocationSearch = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(async (position) => {
//         const { latitude, longitude } = position.coords;

//         // Use a reverse geocoding API to get the city and country from latitude and longitude
//         const reverseGeocodeUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

//         try {
//           const response = await fetch(reverseGeocodeUrl);
//           const data = await response.json();

//           setLocation({
//             city: data.city || 'Unknown City',
//             country: data.countryName || 'Unknown Country',
//           });
//         } catch (error) {
//           console.error('Error fetching location data:', error);
//         }
//       });
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   };

//   return (
//     <div className="bg-blue-100 min-h-screen flex flex-col">
//       <h1 className="bg-blue-600 text-white text-2xl text-center py-4">Weather Dashboard</h1>
//       <div className="flex gap-8 p-8">
//         {/* Weather Input Section */}
//         <div className="w-96">
//           <h3 className="text-lg font-semibold">Enter a City Name</h3>
//           <input
//             className="h-12 w-full outline-none text-lg px-4 my-2 border border-gray-300 rounded-md focus:border-2 focus:border-blue-600"
//             type="text"
//             placeholder="E.g., New York, London, Tokyo"
//           />
//           <button className="w-full py-2 bg-blue-600 text-white rounded-md transition duration-200 hover:bg-blue-700">
//             Search
//           </button>
//           <div className="h-px my-6 bg-gray-400 flex items-center justify-center">
//             <span className="bg-blue-100 text-gray-600 px-4">or</span>
//           </div>
//           <button
//             className="w-full py-2 bg-gray-600 text-white rounded-md transition duration-200 hover:bg-gray-500"
//             onClick={handleLocationSearch}
//           >
//             Use Current Location
//           </button>
//         </div>

//         {/* Weather Data Section */}
//         <div className="w-full">
//           <div className="bg-blue-600 text-white rounded-md p-5 flex justify-between">
//             <div className="flex flex-col">
//               <h2 className="text-2xl font-bold">
//                 {location.city} ({location.country})
//               </h2>
//               <h6 className="mt-2">Temperature: 25°C</h6>
//               <h6 className="mt-1">Wind: 5 M/S</h6>
//               <h6 className="mt-1">Humidity: 60%</h6>
//             </div>
//             <div className="flex flex-col items-center">
//               {/* Optionally, you can include an icon here */}
//               {/* <img src="icon-url" alt="Weather Icon" className="w-24"/> */}
//             </div>
//           </div>
//           <div className="mt-6">
//             <h2 className="text-xl mb-4">5-Day Forecast</h2>
//             <ul className="flex gap-5 flex-wrap">
//               {Array.from({ length: 5 }).map((_, index) => (
//                 <li key={index} className="bg-gray-600 text-white rounded-md p-4 w-1/5 flex flex-col items-center">
//                   <h3 className="text-lg font-semibold">(Day {index + 1})</h3>
//                   <h6 className="mt-2">Temp: 25°C</h6>
//                   <h6 className="mt-1">Wind: 5 M/S</h6>
//                   <h6 className="mt-1">Humidity: 60%</h6>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherDashboard;
import React, { useState } from "react";
import './app.css';
import { Notifications } from "react-push-notification";
import addNotification from "react-push-notification";

const API_KEY = "a24b6a058e010b233ae5c2de3443f73a"; // OpenWeatherMap API key

function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [alerts, setAlerts] = useState({
    tempAlert1: false,
    tempAlert2: false,
    rainAlert: false,
  });
  function rainAlert() {
    addNotification({
        title: "Rain",
        subtitle: "Its going to rain soon",
        theme: "darkblue",
        closeButton: "X",        
    });
}

function tempAlert1() {
    addNotification({
        title: "Temperature",
        subtitle: "Temperature is above specified level",
        theme: "red",
        closeButton: "X",
    });
}
function tempAlert2() {
  addNotification({
      title: "Temperature",
      subtitle: "Temperature is below specified level",
      theme: "red",
      closeButton: "X",
  });
}
  const showAlert = (alertType) => {
        if (alertType === "rainAlert" ) rainAlert();
        else if(alertType === "tempAlert1") tempAlert1();
        else if(alertType === "tempAlert2") tempAlert2();
  };

  const getWeatherDetails = (cityName, latitude, longitude) => {
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    fetch(WEATHER_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const uniqueForecastDays = [];
        const filteredForecast = data.list.filter((forecast) => {
          const forecastDate = new Date(forecast.dt_txt).getDate();
          if (!uniqueForecastDays.includes(forecastDate)) {
            return uniqueForecastDays.push(forecastDate);
          }
          return;
        });

        setWeatherData(data.list[0]); // Current weather
        setFiveDayForecast(filteredForecast); // 5-day forecast

        const temperature = (data.list[0].main.temp - 273.15).toFixed(2);

        if (maxTemp && temperature > maxTemp) {
          console.log('max');
          showAlert("tempAlert1");
        } else if (minTemp && temperature < minTemp) {
          console.log('min');
          showAlert("tempAlert2");
        }

        if (data.list[0].weather[0].description.includes("rain")) {
          console.log('rain');
          showAlert("rainAlert");
        }
      })
      .catch(() => {
        alert("An error occurred while fetching the weather forecast!");
      });
  };

  const getCityCoordinates = () => {
    if (city === "") return;
    const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (!data.length) return alert(`No coordinates found for ${city}`);
        const { lat, lon, name } = data[0];
        getWeatherDetails(name, lat, lon);
      })
      .catch(() => {
        alert("An error occurred while fetching the coordinates!");
      });
  };

  const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
        fetch(API_URL)
          .then((response) => response.json())
          .then((data) => {
            const { name } = data[0];
            setCity(name);
            getWeatherDetails(name, latitude, longitude);
          })
          .catch(() => {
            alert("An error occurred while fetching the city name!");
          });
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert("Geolocation request denied. Please reset location permission to grant access again.");
        } else {
          alert("Geolocation request error. Please reset location permission.");
        }
      }
    );
  };

  return (
    <div className="App">
      <Notifications />
      <h1>Weather Dashboard</h1>

      {/* Alerts */}
      {alerts.tempAlert1 && <div className="alert tempAlert">Temperature Alert: Above your specified level!</div>}
      {alerts.tempAlert2 && <div className="alert tempAlert">Temperature Alert: Below your specified level!</div>}
      {alerts.rainAlert && <div className="alert rainAlert">Rain Alert: It's going to rain soon!</div>}

      {/* Input fields */}
      <div className="container">
      <div className="container3">
        <div className="weather-input">
          <h3>Enter a City Name</h3>
          <input
            className="city-input"
            type="text"
            placeholder="E.g., New York, London, Tokyo"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="search-btn" onClick={getCityCoordinates}>Search</button>
          <div className="separator"></div>
          <button className="location-btn" onClick={getUserCoordinates}>Use Current Location</button>
          <div style={{ height: '20px' }}></div>
          <h3>Enter Temperature</h3>
          <input
            className="temperature-min-input"
            type="text"
            placeholder="min"
            value={minTemp}
            onChange={(e) => setMinTemp(e.target.value)}
          />
          <input
            className="temperature-max-input"
            type="text"
            placeholder="max"
            value={maxTemp}
            onChange={(e) => setMaxTemp(e.target.value)}
          />
        </div>
        </div>
<div className="container2" >
        {/* Current weather */}
        {weatherData && (
          <div className="weather-data">
            <div className="current-weather">
              <div className="details">
                <h2>{city} ({new Date(weatherData.dt_txt).toDateString()})</h2>
                <h6>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</h6>
                <h6>Wind: {weatherData.wind.speed} M/S</h6>
                <h6>Humidity: {weatherData.main.humidity}%</h6>
              </div>
              <div className="icon">
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt="weather-icon" />
                <h6>{weatherData.weather[0].description}</h6>
              </div>
            </div>
          </div>
        )}

        {/* 5-day forecast */}
        <div className="days-forecast">
          <h2>5-Day Forecast</h2>
          <ul className="weather-cards">
            {fiveDayForecast.map((forecast, index) => (
              <li className="card" key={index}>
                <h3>({new Date(forecast.dt_txt).toDateString()})</h3>
                <h6>Temp: {(forecast.main.temp - 273.15).toFixed(2)}°C</h6>
                <h6>Wind: {forecast.wind.speed} M/S</h6>
                <h6>Humidity: {forecast.main.humidity}%</h6>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDashboard;
