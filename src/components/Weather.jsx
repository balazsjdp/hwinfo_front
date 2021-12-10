import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react'
import config from '../config'

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaTemperatureLow } from "react-icons/fa";


const Weather = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        getWeatherInfo()
    },[])
   
    function getWeatherInfo(){
        axios.get(config.weatherAPIURL + `?q=${config.weatherAPICity}&appid=${config.weatherAPIKey}&units=metric`)
        .then((response) => {
            if(response.status != 200){
                setError(true)
                setLoading(false)
            }else{
                setWeatherData(response.data)
                setLoading(false)
            }
        })
    }

    if(loading)
    {
        return (
            <span>
                <AiOutlineLoading3Quarters className="icon-spin" /> Loading weather info
            </span>
        )
    }

    if(error)
    {
        return (
            <span>
                <AiOutlineExclamationCircle / > No weather info
            </span>
        )
    }


    return (
        <span>
            <img className="weather-icon" src={`icons/${weatherData.weather[0].icon}.png`} alt="" /> 
            <span style={{marginRight: "5px"}}>{weatherData.name} </span>
            <span>{weatherData.main.temp} <FaTemperatureLow /></span>
        </span> 
    );
}
 
export default Weather;