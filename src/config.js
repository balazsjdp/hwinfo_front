import env from "react-dotenv";



const config = {
    weatherAPIKey : env.WEATHER_API_KEY,
    weatherAPIURL: env.WEATHER_API_URL,
    weatherAPICity: env.WEATHER_API_CITY
}

export default config;

