import { url_base_weather, api_key } from './../constants/api_url';

const getUrlWeatherByCity = city => {
    //Solicitar datos directamente en ºC
    //`${url_base_weather}?q=${city}&appid=${api_key}&units=metric`;
    return  `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;