import React, { useState } from "react";
import axios from "axios";

function WeatherForm({ setWeather, setAdvice }) {
  const [location, setLocation] = useState("");

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:5000/api/weather/${location}`);
    setWeather(res.data.data);
    setAdvice(res.data.advisories);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter Location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchData}>Get Weather</button>
    </div>
  );
}

export default WeatherForm;
