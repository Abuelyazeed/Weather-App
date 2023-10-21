import React from "react";
import "./WeatherTemperature.css";

function WeatherTemperature({ city, temp, condition }) {
  return (
    <div className="box">
      <div className="city-temp">
        <h2 className="city">{city}</h2>
        <h1 className="temp">{temp}&deg;C</h1>
      </div>
      <div className="condition">
        <p>{condition}</p>
      </div>
    </div>
  );
}

export default WeatherTemperature;
