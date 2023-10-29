'use client';
import { useState } from "react";

interface prop {
    label: string;
}


export default function Button5(props: prop) {
    const [properties, setWeather] = useState([]);

    const getWeather = () => {
        fetch(`https://api.weather.gov/gridpoints/BOX/69,92/forecast`)
        .then(res => res.json())
        .then(res => {
            setWeather(res.properties)
        }); 
    };
    
    return (
        <div>
            <button onClick={getWeather} className="bg-red-700 border-[6px] border-red-900  text-white px-12 py-4 rounded-full text-3xl font-bold">{props.label}</button>

            {properties.map((now) => (
                <div key={now.periods[0].name}>
                <p>{now.periods[0].name}</p>
                <i>{now.periods[0].shortForecast}</i>
                </div>
            ))}
        </div>
    );
}
