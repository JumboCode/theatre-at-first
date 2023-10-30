'use client';
import { useState } from "react";

interface prop {
    label: string;
}


export default function Button5(props: prop) {
    const [weather, setWeather] = useState<{name: string, shortForecast: string} | null>(null);

    const getWeather = () => {
        fetch(`https://api.weather.gov/gridpoints/BOX/69,92/forecast`)
        .then(res => res.json())
        .then(res => {
            setWeather(res.properties.periods[0])
        }); 
    };
    
    return (
        <div>
            <button onClick={getWeather} className="bg-red-700 border-[6px] border-red-900  text-white px-12 py-4 rounded-full text-3xl font-bold">{props.label}</button>

            { weather != null ?
                <div>
                    <p>{weather.name}</p>
                    <i>{weather.shortForecast}</i>
                </div> : <div></div>
            }
        </div>
    );
}
