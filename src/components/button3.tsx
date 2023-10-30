"use client"
import { useState } from "react";

export default function Button3(props) {
    const [forecast, setForecast] = useState<{name: string, shortForecast: string}>(
        {name: "Text A", shortForecast: "Text B"}
    );

    function handleClick() {
        fetch("https://api.weather.gov/gridpoints/BOX/69,92/forecast")
            .then((res) => res.json())
            .then((json) => {
                setForecast(json.properties.periods[0]);
        });

    };

    return (
        <>
            <button onClick={handleClick}>{props.name}</button>
            <p>{forecast.name}</p>
            <i>{forecast.shortForecast}</i>
        </>
    );
}


// fetch test