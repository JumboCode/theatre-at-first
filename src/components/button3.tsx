"use client"
import { useState } from "react";

export default function Button3(props) {
    const [forecast, setForecast] = useState<{name: string, shortForecast: string}|undefined>(undefined);

    function handleClick() {
        fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast")
            .then((res) => res.json())
            .then((json) => {
                setForecast(json.properties.periods[0]);
        });

    };

    return (
        <>
            <button onClick={handleClick} className="bg-blue-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border-8 border-emerald-800">{props.name}</button>
            { forecast && (
                <div>
                    <i className="text-center font-mono text-base">Weather {forecast.name}:</i>
                    <p className="text-center font-mono text-xl">{forecast.shortForecast}</p>
                </div>
            )}
        </>
    );
}
