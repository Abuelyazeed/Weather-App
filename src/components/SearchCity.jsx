import React, { useState } from "react";
import "./SearchCity.css";
import { MdSearch } from "react-icons/md";

function SearchCity({ searchCity }) {
  const [enteredCity, setEnteredCity] = useState("");

  function changeHandler(event) {
    setEnteredCity(event.target.value);
  }
  function searchHandler(event) {
    event.preventDefault();
    searchCity(enteredCity);
  }
  return (
    <div className="container search-section">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={changeHandler}
        value={enteredCity}
      ></input>
      <button className="search-button" onClick={searchHandler}>
        <span className="search-icon">
          <MdSearch />
        </span>
      </button>
    </div>
  );
}

export default SearchCity;
