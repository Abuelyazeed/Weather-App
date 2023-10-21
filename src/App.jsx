import { useEffect, useState } from "react";
import "./App.css";
import { WiDaySunnyOvercast } from "react-icons/wi";
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
    // const url = "https://ipapi.co/json";
    // const response = await fetch(url);
    // if (response.ok == false) {
    //   setApiOverload(true);
    // } else {
    //   const data = await response.json();
    //   setIpData(data);
    //   setLat(data.latitude);
    //   setLong(data.longitude);
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

      {apiOverload ? (
        <p>Sorry, too many API requests at the moment</p>
      ) : (
        weatherData.main && (
          <>
            <WeatherTemperature
              city={searchByCity ? weatherData.name : ipData.city}
              temp={Math.round(weatherData.main.temp)}
            />
            <WeatherDetails />
          </>
        )
      )}
    </>
  );
}

export default App;
