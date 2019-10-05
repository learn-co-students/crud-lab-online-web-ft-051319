import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant'
// import manageReviews from './reducers/manageReviews'

// import { combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// const rootReducer = combineReducers({
//   restaurants: manageRestaurant,
//   reviews: manageReviews
// });

const store = createStore(manageRestaurant);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
