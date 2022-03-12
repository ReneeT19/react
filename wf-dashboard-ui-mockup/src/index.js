import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// example to use createElement
// ReactDOM.render(
//   React.createElement("h1", {style:{color:"red"}}, "Hello!"),
//   document.getElementById('root')
// );

// example to use JSX
// ReactDOM.render(
//   <ul>
//     <li>Hot Pot</li>
//     <li>Hot Dogs</li>
//     <li>Hot Soup</li>
//   </ul>,
//   document.getElementById('root')
// );

// JSX - create a variable and use it dynamically
// let city = "Shanghai";
// ReactDOM.render(
//   <h1>Hello from {city}</h1>,
//   document.getElementById('root')
// );

// JSX - create an object and use it dynamically
let city = {
  name: "Shanghai",
  country: "China"
};
ReactDOM.render(
  <h1 id="heading" className="cool-text">{city.name} is in {city.country}</h1>,
  document.getElementById('root')
);