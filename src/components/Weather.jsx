import axios from 'axios'
import { useEffect, useState } from 'react'
import config from '../config'

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";



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

            console.log(response)
        })
    }


    if(loading){
        return (
            <span>
                <AiOutlineLoading3Quarters className="icon-spin" /> Loading weather info
            </span>
        )
    }


    if(error){
        return (<span>
            <AiOutlineExclamationCircle / >No weather info
        </span>)
    }



    return ( <span>{weatherData.main.temp} C°</span> );
}
 
export default Weather;