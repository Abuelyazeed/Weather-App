import React, { useState } from "react";
import "./WeatherTemperature.css";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

function WeatherTemperature() {
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");
  return (
    <div className="container">
      <img src={cloud_icon} className="weather-icon"></img>
      <h1 className="temp">25&deg;C</h1>
      <h1 className="city">London</h1>
    </div>
  );
}

export default WeatherTemperature;
