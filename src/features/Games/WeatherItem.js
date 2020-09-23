import React from 'react'

function getTempInC(temp){
    var celsius = temp-273;
      return celsius;
    }
  console.log(getTempInC(300));

export default function WeatherItem({ weather }) {
    console.log(weather);

    return (
        <div className = "body">
            <img src = { `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` } className="image" alt="..."/>
            <div>Temperature: <span className = "temperature" > { getTempInC(weather.main.temp)}</span></div>
            <div>Min: <span className = "temperature-min" > {  getTempInC(weather.main.temp_min)} </span></div>
            <div>Max: <span className = "temperature-max" > {  getTempInC(weather.main.temp_max)}</span></div>
            <div>Fells like: <span className = "actual-feel" > {  getTempInC(weather.main.feels_like)}</span></div>
        </div>
    );
}

