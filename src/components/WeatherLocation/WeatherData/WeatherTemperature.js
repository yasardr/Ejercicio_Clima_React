import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    SUN,
    SNOW,
    DRIZZLE,
    RAIN,
    THUNDER,
} from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [SNOW]: "snow",
    [DRIZZLE]: "day-showers",
    [RAIN]: "rain",
    [THUNDER]: "day-thunderstorm",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";

    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`°C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;