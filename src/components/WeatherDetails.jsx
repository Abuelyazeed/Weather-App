import React, { useState } from "react";
import "./WeatherDetails.css";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

function WeatherDetails() {
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  return (
    <div className="container weather-details">
      <div className="humidity-wind">
        <img src={humidity_icon} className="humidity-icon"></img>
        <div className="data">
          <p className="humidity-precentage">64%</p>
          <p className="text">Humidity</p>
        </div>
      </div>
      <div className="humidity-wind">
        <img src={wind_icon} className="wind-icon"></img>
        <div className="data">
          <p className="humidity-precentage">18 km/h</p>
          <p className="text">Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
