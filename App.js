import React, { useState } from 'react';
import { fetchWeather } from './api';
import WeatherCard from './components/WeatherCard';
import AdvisoryBox from './components/AdvisoryBox';
import WeatherChart from './components/WeatherChart';


function App() {
const [city, setCity] = useState('');
const [data, setData] = useState(null);


const searchCity = async () => {
const result = await fetchWeather(city);
setData(result);
};


return (
<div style={{ padding: 20 }}>
<h1>Farmer Weather Advisory</h1>


<input
placeholder="Enter city name"
value={city}
onChange={(e) => setCity(e.target.value)}
/>
<button onClick={searchCity}>Search</button>


{data && (
<>
<WeatherCard weather={data.weather} />
<WeatherChart weather={data.weather} />
<AdvisoryBox advisory={data.advisory} />
</>
)}
</div>
);
}


export default App;