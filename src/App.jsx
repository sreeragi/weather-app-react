import React, { useState } from "react";
import "./App.css";
import useFetch from "./useFetch";

function App() {
  const [city, setCity] = useState("");
  const [query, setQuery] = useState(city);

  const { data, loading, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(city);
  };

  return (
    <div style={{ width: "100%", minHeight: "90vh" }}  className="weather-app container d-flex flex-column justify-content-center align-items-center ">
     
        <h1 className=" fw-bolder fs-1 text-center text-warning">Weather App</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            spellCheck="false" 
          />
          <button type="submit">Search</button>
        </form>
  
        {loading && <p>Loading...</p>}
       
  
        {data && (
          <div className="weather-details">
            <h2 className="fw-bolder text-info">Weather in {data.name}</h2>
            <p className="fw-bolder ">Temperature: {data.main.temp}°C</p>
            <p className="fw-bolder">Humidity: {data.main.humidity}%</p>
            <p className="fw-bolder">Condition: {data.weather[0].description}</p>
          </div>
        )}
     
    </div>
  );
}

export default App;
