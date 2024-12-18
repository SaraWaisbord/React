
import React, { useEffect, useState } from "react";

function WeatherComponent() {
    const [weatherObj, setWeather] = useState([])
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch('http://localhost:5261/WeatherForecast');
                const data = await res.json();
                weatherObj.map((obj) => console.log(obj))
                setWeather(data);
                console.log(data)

            }
            catch (error) {
                console.error("Error fetching weather array😒", error);
            }
        };
        fetchWeather();
    }, [])
               
    return (

        <>
            {

                weatherObj.map((obj) => <div>{obj.date}📅{obj.temperatureC}🌎{obj.temperatureF}🐧{obj.summary}✌️</div>)
            }
        </>
    )
}

export default WeatherComponent;