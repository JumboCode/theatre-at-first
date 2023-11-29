"use client";
import { useState } from "react";

export default function Button1(label: string) {
    label = "Sidrah and Oliver";

    const [tempTotal, setTempTotal] = useState("");
    const [shortForecast, setShortForecast] = useState();

    const handleClick = () => {
        fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast")
            .then((res) => res.json())
            .then((json) => {
                setTempTotal(
                    "Current temperature: " +
                        json.properties.periods[0].temperature +
                        json.properties.periods[0].temperatureUnit
                );
                setShortForecast(json.properties.periods[0].shortForecast);
            });
    };

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <button
                type="button"
                onClick={handleClick}
                className="p-3 px-6 border-2 border-blue-500 hover:bg-blue-500 
                 hover:text-white duration-300 rounded-full"
            >
                {label}
            </button>
            <p>{tempTotal}</p>
            <p>{shortForecast}</p>
        </div>
    );
}
