import React from 'react';

const WeatherCard = ({ weather }) => {
  const today = weather.list[0];

  return (
    <div style={{ border: '1px solid #ddd', padding: 20, marginTop:20 }}>
      <h2>Current Weather</h2>
      <p>Temperature: {today.main.temp}°C</p>
      <p>Humidity: {today.main.humidity}%</p>
      <p>Wind Speed: {today.wind.speed} km/h</p>
      <p>Rain Probability: {today.pop * 100}%</p>
    </div>
  );
};

export default WeatherCard;
