import React, { useState } from "react";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // Load API key


const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  // const API_KEY = "f5fbd047ffb5d73173f95496ca813011"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div>
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>{weather.weather[0].description}</p>
          <p>🌡️ Temperature: {weather.main.temp}°C</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
