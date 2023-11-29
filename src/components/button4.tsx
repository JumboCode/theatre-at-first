"use client";
import React, { useState, useEffect } from "react";

export default function Button4() {
    const [weatherData, setWeatherData] = useState(null);
    const [showWeather, setShowWeather] = useState(false);

    useEffect(() => {
        const apiUrl = "https://api.weather.gov/gridpoints/BOX/69,92/forecast";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setWeatherData(data);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }, []);

    const handleClick = () => {
        setShowWeather(true);
    };

    if (!weatherData) {
        return <div>Loading weather data...</div>;
    }

    if (!showWeather) {
        return (
            <div>
                <button
                    onClick={handleClick}
                    className="bg-blue-300 hover:bg-blue-900 text-white font-bold 
                            py-12 px-12 rounded border-2 border-blue-800"
                >
                    Show Weather Data
                </button>
            </div>
        );
    }

    return (
        <div>
            {weatherData.properties.periods.map((period) => (
                <div key={period.number}>
                    <h2 className="text-center text-bold text-fuchsia-800 font-mono">
                        {period.name}
                    </h2>
                    <p className="text-center text-cyan-600 font-mono">
                        Temperature: {period.temperature}°
                        {period.temperatureUnit}
                    </p>
                    <p className="text-center text-cyan-600 font-mono">
                        Short Forecast: {period.shortForecast}
                    </p>
                    <br></br>
                </div>
            ))}
        </div>
    );
}
