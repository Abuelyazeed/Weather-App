import { useEffect, useState } from "react";
import "./App.css";
import SearchCity from "./components/SearchCity";
import WeatherTemperature from "./components/WeatherTemperature";
import WeatherDetails from "./components/WeatherDetails";

const apiKey = "d403a3476ecdac8bed27848b413064e9";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [ipData, setIpData] = useState({});
  const [searchByCity, setSearchByCity] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    try {
      const ipApiUrl = "http://ip-api.com/json";
      const response = await fetch(ipApiUrl);
      const data = await response.json();
      setIpData(data);
      searchCityByCoordinates(data.lat, data.lon);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  }

  async function searchCityByCoordinates(lat, lon) {
    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&appid=${apiKey}`;
      const response = await fetch(weatherUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  async function searchCity(city) {
    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apiKey}`;
      const response = await fetch(weatherUrl);
      const data = await response.json();
      setWeatherData(data);
      setSearchByCity(true);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  return (
    <>
      <SearchCity searchCity={searchCity} />
      <div className="app-box">
        {weatherData.main && (
          <>
            <WeatherTemperature
              city={searchByCity ? weatherData.name : ipData.city}
              temp={Math.round(weatherData.main.temp)}
              condition={weatherData.weather[0].main}
            />
            <WeatherDetails
              feelsLike={Math.round(weatherData.main.feels_like)}
              humidity={weatherData.main.humidity}
              windSpeed={Math.round(weatherData.wind.speed)}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
