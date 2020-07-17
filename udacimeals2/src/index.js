import React from 'react';
import { Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import reducer from './indexReducer';
export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe ({ day, recipe, meal}) {
    return {
        type: ADD_RECIPE,
        recipe,
        day,
        meal,
    }
}

export function removeFromCalendar ({day, meal}) {
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal,
    }
}
const store = createStore(
  reducer,
  //to set up the Redux DevTool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ())

// console.log(store.getState())

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
