# 🌤️ React Weather App

A sleek and modern weather app built with **React** and **Vite** that allows users to check current weather conditions for any city around the world.


---

## 🚀 Features

- 🔎 Search for any city’s weather
- 📍 Weather info includes:
  - Temperature in °C
  - Weather condition (Rain, Clouds, etc.)
  - Date display
  - Custom weather icons
- 🎯 Built with **React + Vite**
- 🎨 Fully responsive and modern UI
- 💡 Clean component structure
- 🔐 Uses `.env` file to securely store API keys

---

## 🖼️ Preview

> ![App Screenshot](./public/weather-screenshot.png)  

---

## 🔧 Tech Stack

| Tool               | Purpose                          |
|--------------------|----------------------------------|
| React              | Frontend library                 |
| Vite               | Development server + build tool  |
| CSS3               | Styling                          |
| OpenWeatherMap API | Weather data API                 |

---

## 🧪 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-weather-app.git
cd react-weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```bash
touch .env
```

Add your [OpenWeatherMap](https://openweathermap.org/api) API key like this:

```env
VITE_API_KEY=your_openweathermap_api_key_here
```

### 4. Run the app locally

```bash
npm run dev
```

Then open your browser at: `http://localhost:5173/`

---

## 🌐 API Used

**OpenWeatherMap API**

- URL: [https://api.openweathermap.org](https://api.openweathermap.org)
- Format: `GET https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=API_KEY&units=metric`

---

## 📁 Folder Structure

```
.
├── public
├── src
│   ├── Api/           # Optional test components
│   ├── assets/        # Weather icons/images
│   ├── App.jsx
│   ├── main.jsx
│   ├── style.css
│   └── ...
├── .env
├── index.html
├── vite.config.js
└── README.md
```

---

## 🧠 How It Works

- User enters a city name → hits **Search**
- App fetches real-time weather data from OpenWeatherMap API
- Displays:
  - Date
  - City name
  - Weather icon based on condition
  - Temperature in °C
  - Weather description


