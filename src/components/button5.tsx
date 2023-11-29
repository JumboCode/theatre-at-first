"use client";
import { useState } from "react";

interface prop {
    label: string;
}

export default function Button5(props: prop) {
    const [weather, setWeather] = useState<{
        probabilityOfPrecipitation: number;
    } | null>(null);

    const getWeather = () => {
        fetch(`https://api.weather.gov/gridpoints/BOX/71,90/forecast`)
            .then((res) => res.json())
            .then((res) => {
                const probability =
                    res.properties.periods[0].probabilityOfPrecipitation.value;
                console.log(probability);
                setWeather({
                    probabilityOfPrecipitation:
                        probability !== null ? probability : 0,
                });
            });
    };

    return (
        <div>
            <button
                onClick={getWeather}
                className="bg-red-700 border-[6px] border-red-900  text-white px-12 py-4 rounded-full text-3xl font-bold"
            >
                {props.label}
            </button>

            {weather ? (
                weather.probabilityOfPrecipitation > 55 ? (
                    <div>
                        <p className="text-center font-bold">
                            Dream harder. We are in New England.{" "}
                            {weather.probabilityOfPrecipitation}% chance of rain
                            today.
                        </p>
                    </div>
                ) : (
                    <div>
                        <p className="text-center font-bold">
                            Your wish has been granted.{" "}
                            {weather.probabilityOfPrecipitation}% chance of rain
                            today.
                        </p>
                    </div>
                )
            ) : (
                <div></div>
            )}
        </div>
    );
}
