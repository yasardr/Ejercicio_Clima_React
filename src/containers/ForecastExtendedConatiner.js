import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForcastDataFromCities, getCity } from './../reducers';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedConatiner extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            this.props.city &&
            <ForecastExtended city={city} forecastData={forecastData}/> //:
            //<div>No se ha seleccionado ciudad</div>
            // ||
            //null
        );
    }
}

ForecastExtendedConatiner.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

const mapStateToProps = state => ({ city: getCity(state), forecastData: getForcastDataFromCities(state) });

//El connect devuelve un componente mejorado con otras propiedades
export default connect(mapStateToProps,null)(ForecastExtendedConatiner);