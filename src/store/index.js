import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

//Estado inicial
const initialState = {
    city: 'Washington dc,us'
};

//Sirve para poder visualizar con la herramienta en chrome
//Utilizando middlware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creacion de store                        el applyMiddleware es necesario el compose no 
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
    //Sirve para poder visualizar con la herramienta en chrome
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());