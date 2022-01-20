import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react';
import './index.css';

import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root'));



const menuReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }

}

const menuReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// CART/ORDER REDUCER
// - What current user/orderer has in their cart
// - This is part of state that tracks current users order
/*
    {
        pizzas: pizzas
        total: total
    }
*/
const checkoutReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
}
// CUSTOMER INFO REDUCER
// - Screen two
//      - name, address, city, zip
//      { name: name, address: address, city: city, zip: zip }
//      - delivery or pickup

const customerInfoReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
}
/*
// ADMIN/ACTIVE ORDERS
// - Pull from the cart reducer and customer info reducer to 
//   to create a new object for each order
// - Clear arrays/data in other stores once the order is pushed here
// { name: name,
    address: address,
    city: city, 
    zip: zip,
    pizzas: pizzas,
    total: total    
    }
*/

// const adminReducer = (state = [], action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }

const storeInstance = createStore(
    combineReducers({
        menuReducer,
        checkoutReducer,
        customerInfoReducer
    }),
    applyMiddleware(logger)
);