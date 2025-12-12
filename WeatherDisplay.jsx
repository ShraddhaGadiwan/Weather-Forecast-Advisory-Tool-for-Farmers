function WeatherDisplay({ data }) {
  const item = data.list[0];

  return (
    <div>
      <h3>Weather Info</h3>
      <p>Temperature: {item.main.temp}°C</p>
      <p>Humidity: {item.main.humidity}%</p>
      <p>Rain Probability: {item.pop * 100}%</p>
      <p>Wind Speed: {item.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDisplay;
