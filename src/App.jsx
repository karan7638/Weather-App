import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === "404") {
        setWeatherData(null);
        setError("City not found. Please try again.");
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleInputChange = (e) => setCity(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "/thunder.png";
      case "Rain":
        return "/rain_with_cloud.png";
      case "Mist":
        return "/Tornado.png";
      case "Haze":
        return "/sun.png";
      case "Clear":
        return "/clear.png";
      default:
        return "/default.png";
    }
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="container">
      <h1 className="container_date">{currentDate}</h1>

      {loading && <p>Loading weather data...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && !loading && (
        <>
          <h2 className="container_city">{weatherData.name}</h2>
          <img
            src={getWeatherIconUrl(weatherData.weather[0].main)}
            className="container_img"
            alt="Weather Icon"
          />
          <h2 className="container_degree">{weatherData.main.temp}°C</h2>
          <h2 className="country_per">{weatherData.weather[0].main}</h2>
        </>
      )}

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter city"
          value={city}
          onChange={handleInputChange}
          required
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
