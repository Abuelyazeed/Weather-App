import React, { useState } from "react";
import "./SearchCity.css";

function SearchCity({ searchCity }) {
  const [enteredCity, setEnteredCity] = useState("");

  function changeHandler(event) {
    setEnteredCity(event.target.value);
  }
  function searchHandler(event) {
    event.preventDefault();
    searchCity(enteredCity);
    setEnteredCity("");
  }
  return (
    <form className="search-section" onSubmit={searchHandler}>
      <input
        type="text"
        placeholder="Enter Location"
        className="search-input"
        onChange={changeHandler}
        value={enteredCity}
      ></input>
    </form>
  );
}

export default SearchCity;
