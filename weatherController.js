const axios = require('axios');
const generateAdvisory = require('../utils/advisoryLogic');


exports.getWeather = async (req, res) => {
const { city } = req.params;


try {
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.WEATHER_KEY}`;
const { data } = await axios.get(url);


const advisory = generateAdvisory(data);


res.json({ weather: data, advisory });
} catch (err) {
res.status(400).json({ error: 'City not found' });
}
};