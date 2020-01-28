import { SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY } from './../actions';
import toPairs from 'lodash.topairs';
import { createSelector } from 'reselect';

export const cities = (state = {}, action) => {
 switch (action.type) {
    case SET_FORECAST_DATA: {
        const { city, forecastData } = action.payload;
        //Copia de segundo nivel -> obtiene ese objeto para que despues se le sume forecastData y no reemplace todo el objeto, si ya contiene forecastData ahi si lo reemplaza si no lo ocntiene lo agrega
        return { ...state, [city]: { ...state[city], forecastData, forecastDataDate: new Date() } };
    }
    case GET_WEATHER_CITY: {
        const city = action.payload;
        return { ...state, [city]: { ...state[city], weather: null } };
    }
    case SET_WEATHER_CITY: {
        const { city, weather } = action.payload;
        return { ...state, [city]: { ...state[city], weather } };
    }
    default:
        return state;
 }
}

//Selector para obtener el forecastData de la ciudad
export const getForcastDataFromCities = 
    createSelector((state, city) => state[city] && state[city].forecastData, 
        forecastData => forecastData);

const fromObjectToArray = cities => (toPairs(cities).map(([key, value]) => ({ key, name: key, data: value.weather })));

export const getWeatherCities = 
    createSelector(state => fromObjectToArray(state), cities => cities);