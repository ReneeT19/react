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
// let city = {
//   name: "Shanghai",
//   country: "China"
// };
// ReactDOM.render(
//   <h1 id="heading" className="cool-text">{city.name} is in {city.country}</h1>,
//   document.getElementById('root')
// );

//Create components
// function Hello(props) {  //pass props to make it dynamic
//   console.log(props); //it will take the attribute added to the Hello tag and refer props.library in JSX
//   console.log(Object.keys(props)); //return keys in inspect so the number of props is more dynamic
//   return (
//     <div>
//       <h1>Welcome to {props.library}!</h1>
//       <p>{props.message}</p>
//       <p>{props.number} props total</p>
//       <p>{Object.keys(props).length} Props Total</p>
//     </div>
//   );
// }
// passing value instead of the entire object to make it look cleaner
function Hello({library, message, number}) {  //pass props to make it dynamic
  return (
    <div>
      <h1>Welcome to {library}!</h1>
      <p>{message}</p>
      <p>{number} props total</p>
    </div>
  );
}

ReactDOM.render(
  <Hello  
  library="React"
  message="Have fun!"
  number={3} //for jsx number it needs to be in {}
  />,   //JSX self-close to make the code cleaner and it needs to be Capitalized
  document.getElementById('root')
);