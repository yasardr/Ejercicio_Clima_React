import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    };

    //Funcion que crea cada WeatherLocation a partir de las ciudades recibidas
    const strToComponents = cities => (
        cities.map( city => 
            (
                <WeatherLocation 
                    key={city.key} 
                    city={city.name}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
                    data={city.data} />
            ))
    );

    return (
        <div className="locationList">
            {strToComponents(cities)}
        </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;