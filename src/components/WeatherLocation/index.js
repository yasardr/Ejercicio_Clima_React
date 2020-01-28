import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

//Componente funcional
const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
        <Location city={city} />
        {data ? 
            <WeatherData data={data} /> :
            <CircularProgress size={50}/>
        }
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape( {
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;

/*//Metodo que se ejecuta al presionar el boton actualizar
handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    //Buscar los datos a partir del api
    fetch(api_weather).then ( resolve => {
        return resolve.json();
    }).then(data => {
        const newWeather = transformWeather(data);
        //Para hacer una actualizacion del estado se utiliza el setState
        //Y se vuelve a renderizar con los cambios del state
        this.setState({
            //Se pasan solo los datos que se modifiquen
            data: newWeather,
        });
    });
}*/

//Componenete de tipo clase (este debe importar Component junto con React)
//Se ocupa cuando se necesita de los metodos de ciclo de vida
/*const  WeatherLocation extends Comp {
    
    //Se recibe props para poder trabajar con las propiedades
    constructor(props) {
        //Siempre se invoca al metodo super
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
        };
    }*/

    /*//Se actualiza al inicio
    componentDidMount() {
        //Consulta por primera vez los valores de data
        this.handleUpdateClick();
    }

    //Se ejecuta si hay actualizaciones
    componentDidUpdate(prevProps, prevState) {
    }

    //No se recomienda su uso
    componentWillMount() {}
    componentWillUpdate(nextProps, nextState) {}
    
    //Renderizacion con el primer estado inicial en el constructor
    render() {
        const { onWeatherLocationClick, city, data } = this.props;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city} />
                {data ? 
                    <WeatherData data={data} /> :
                    <CircularProgress size={50}/>
                }
            </div>
        )
    }
}*/