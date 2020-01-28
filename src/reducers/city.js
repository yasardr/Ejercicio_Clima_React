import { SET_CITY } from './../actions';

//Reducer funcion para modificar el estado a partir de las acciones
export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            //Desglosa el estado inicial y si existe la propiedad city
            //se modifica el valor por payload pero si no existe
            //se agrega al objeto inicial
            return action.payload;
        default:
            return state;
    }
}