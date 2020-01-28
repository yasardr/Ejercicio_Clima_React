import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

//Funcion que genera cada ForecastItem
const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data} />
    ));
}

//Funcion que muestra Forecastextended por primera vez
const renderProgress = () => {
    return <h3>Cargando Pronóstico extendido...</h3>;
}

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
        {forecastData ?
            renderForecastItemDays(forecastData) :
            renderProgress()}
    </div>
);

    /*Eliminamos todos estos componentes ya que todo se traaja a partir de Redux
    constructor() {
        super();
        this.state = { forecastData: null }
    }

    //Consultando los datos del pronostico por primera vez
    componentDidMount() {
        this.updateCity(this.props.city);
    }

    //Se ejecuta cada que hay una actualizacion de las propiedades excepto la primera vez
    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }
    
    //Se ejecuta cada que hay una actualizacion de las propiedades
    /*tatic getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.city !== prevState.city) {
            const url_forecast = `${url}?q=${nextProps.city}&appid=${api_key}`;
            fetch(url_forecast).then(
                data => (data.json())
            ).then(
                weather_data => {
                    const forecastData = transformForecast(weather_data);
                    return {
                        forecastData,
                    };
                }
            );
        }

        return null;
    }
    

    //Funcion que consulta los datos del pronostico correspondiente a la ciudad
    updateCity = city => {
        //fetch o axios
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData });
            }
        );
    }*/

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}
export default ForecastExtended;