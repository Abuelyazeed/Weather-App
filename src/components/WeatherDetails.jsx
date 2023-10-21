import "./WeatherDetails.css";

function WeatherDetails({ feelsLike, humidity, windSpeed }) {
  return (
    <div className="weather-details">
      <div className="feels-humidity-wind">
        <div className="data">
          <p className="feels-like">{feelsLike}&deg;C</p>
          <p className="text">Feels Like</p>
        </div>
      </div>
      <div className="feels-humidity-wind">
        <div className="data">
          <p className="humidity-precentage">{humidity}%</p>
          <p className="text">Humidity</p>
        </div>
      </div>
      <div className="feels-humidity-wind">
        <div className="data">
          <p className="wind-speed">{windSpeed} KMH</p>
          <p className="text">Winds</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
