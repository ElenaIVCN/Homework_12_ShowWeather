import React, { useEffect, useState } from 'react';
import WeatherItem from './WeatherItem';

export default function ShowWeather() {
    const [weather, setWeather] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,Ro&appid=c7da641777760054e5ca6164eb47580a')
            .then(res => res.json())
            .then(data => setWeather(data))
            .finally(() => setIsLoading(false));
    }, []);

    // console.log(useEffect);

    return (
    <div>
        <h1>The Weather for Brasov</h1>
        <div className="container">
            {/* {! isLoading && (<WeatherItem weather={ weather }/> )} */}
            {! isLoading && (<WeatherItem weather={ weather }/> )}
        </div>
    </div> 
    );
}

