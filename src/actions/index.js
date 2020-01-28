import transformForecast from './../services/transformForecast';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from './..//services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';

//ActionCreator
const setCity = payload => (
    //Action es un objeto identificado con un nombre y se le pasa un valor
    { type: SET_CITY, payload }
  );
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });


const api_key = "e3d04fbaadf9b2bda34e785614387ddb";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {

  return (dispatch, getState) => {
    //fetch o axios
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
    
    //Activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));
    
    //Funcion que devuelve el estado global de la app
    const state = getState();
    const date = state.cities[payload] && state.cities[payload].forecastDataDate;
    
    const now = new Date();

    //Verifica qu epor lo menos haya pasado un minuto para volver a consultar a la API
    if(date && (now - date) < 1 * 60 * 1000){
      return;
    }

    return fetch(url_forecast).then(
        data => (data.json())
    ).then(
        weather_data => {
            const forecastData = transformForecast(weather_data);
            //this.setState({ forecastData });

            //Modificar el estado con el resultado de la promise (fetch)
            dispatch(setForecastData({city: payload, forecastData}));
        }
    );

  };
};

export const setWeather = payload => { 
  
  return dispatch => {
    payload.forEach(city => {

      dispatch(getWeatherCity(city));

      const api_weather = getUrlWeatherByCity(city);
      fetch(api_weather).then ( resolve => {
          return resolve.json();
      }).then(data => {
          const weather = transformWeather(data);
          dispatch(setWeatherCity({city, weather}));
      });
    });
  }

};