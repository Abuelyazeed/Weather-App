import { useEffect, useState } from "react";
import "./App.css";
import SearchCity from "./components/SearchCity";
import WeatherTemperature from "./components/WeatherTemperature";
import WeatherDetails from "./components/WeatherDetails";
import fakeapi from "./data.json";

function App() {
  const apiKey = "d403a3476ecdac8bed27848b413064e9";

  const [weatherData, setWeatherData] = useState({});

  //The ipData is to display the name of the city based on the ip address
  const [ipData, setIpData] = useState({});
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  //checks whether you have searched by the city or not to display the weather data
  const [searchByCity, setSearchByCity] = useState(false);

  //checks if we have reached the api limit
  const [apiOverload, setApiOverload] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (lat && long) {
      searchCityByIp();
    }
  }, [lat, long]);

  async function getLocation() {
    // const url = "http://ip-api.com/json";
    // const response = await fetch(url);
    // if (response.ok == false) {
    //   setApiOverload(true);
    // } else {
    //   const data = await response.json();
    //   setIpData(data);
    //   setLat(data.lat);
    //   setLong(data.lon);
    // }
    setIpData(fakeapi);
    setLat(fakeapi.latitude);
    setLong(fakeapi.longitude);
    setApiOverload(true);
  }

  // GET LOCATION USING IP ADDRESS
  async function searchCityByIp() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=Metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
  }

  // GET LOCATION USING CITY NAME
  async function searchCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    setWeatherData(data);
    setSearchByCity(true);
    setApiOverload(false);
  }

  return (
    <>
      <SearchCity searchCity={searchCity} />
      <div className="app-box">
        {apiOverload ? (
          <div>
            <p>Unfortunatly we weren't able to detect your location😔</p>
            <p>Please enter a city name to check its weather</p>
          </div>
        ) : (
          weatherData.main && (
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
          )
        )}
      </div>
    </>
  );
}

export default App;
