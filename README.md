🌾 Weather Forecast & Farmer Advisory Tool (MERN Stack)

A full-stack MERN application that fetches real-time weather data from the OpenWeatherMap API and converts it into actionable, farmer-friendly advisory messages.
This project is built as part of the Web Developer Intern (MERN) Technical Assignment.

🚀 Tech Stack

Frontend: React.js
Backend: Node.js, Express.js
Charts: Chart.js + react-chartjs-2
API: OpenWeatherMap (Free Tier)

📌 Features
🌦 Weather Data (Real-time)

Temperature

Humidity

Wind Speed

Rain Probability (POP)

5-Day Forecast (3-hour intervals)

👨‍🌾 Farmer Advisory System

Automatic rule-based suggestions such as:

Rain > 60% → Avoid irrigation & pesticide spraying.

Temperature > 35°C → Increase irrigation for heat-sensitive crops.

Wind Speed > 15 km/h → Avoid pesticide spraying (drift risk).

Humidity > 80% → Risk of fungal infection.

Good spraying window → Wind < 10 km/h and no rain predicted.

🎨 User Interface

Clean weather dashboard

Temperature trend line chart

Advisory message box

Responsive UI

Search bar with location input

🗂 Folder Structure
weather-advisory-app/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
└── README.md
