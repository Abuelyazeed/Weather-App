import { useState } from "react";
import "./App.css";
import { WiDaySunnyOvercast } from "react-icons/wi";
import SearchCity from "./components/SearchCity";
import WeatherTemperature from "./components/WeatherTemperature";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [count, setCount] = useState(0);
  const apiKey = "d403a3476ecdac8bed27848b413064e9";

  async function searchCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apiKey}`;

    const response = await fetch(url);
    console.log(response);
  }

  return (
    <>
      <SearchCity searchCity={searchCity} />
      <WeatherTemperature />
      <WeatherDetails />
    </>
  );
}

export default App;
