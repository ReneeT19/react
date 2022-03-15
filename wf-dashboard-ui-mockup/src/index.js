import React, {useState, useReducer} from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
// function Hello({library, message, number}) {  //pass props to make it dynamic
//   return (
//     <div>
//       <h1>Welcome to {library}!</h1>
//       <p>{message}</p>
//       <p>{number} props total</p>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Hello  
//   library="React"
//   message="Have fun!"
//   number={3} //for jsx number it needs to be in {}
//   />,   //JSX self-close to make the code cleaner and it needs to be Capitalized
//   document.getElementById('root')
// );

//Composing Components
// function Lake(props) { //or pass {name}
//   return (
//     <h1>{props.name}</h1> //change to name
//   )
// }
// function App() {  //parent component
//   return (
//     <div>App
//     <Lake name="Lake Tahoe" />
//     <Lake name="Shirley Lake" />
//     <Lake name="Angora Lake" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

//Rendering list
// const lakeList = [
//   "Lake 1",
//   "Lake 2",
//   "Lake 3"
// ];

// functon App({lakes}) { // pass shorthand lakes instead of props
//   return (
//     <ul>
//       {lakes.map(lake => ( //use map when building a list
//         <li>{lake}</li>
//       ))}
//     </ul>
//   );
// }

// ReactDOM.render(
//   <App lakes={lakeList}/>, //pass the const as property
//   document.getElementById('root')
// );

//Rendering list of objects + adding keys
// const lakeList = [
//   {id: "1", name: "Echo", trailhead: "Echo"},
//   {id: "2", name: "Maud", trailhead: "Wrights"},
//   {id: "3", name: "Velma", trailhead: "Bayview"}
// ];

// function App({lakes}) { // pass shorthand lakes instead of props
//   return (
//     <div>
//       {lakes.map(lake => ( //use map when building a list and put each lake object in one div
//       <div key={lake.id}>  
//         <h2>{lake.name}</h2>
//         <p>Accessed by: {lake.trailhead}</p>
//       </div>
//       ))}
//     </div>
//   );
// }

// ReactDOM.render(
//   <App lakes={lakeList}/>, //pass the const as property
//   document.getElementById('root')
// );

//create keys for numbers
// const itemList = [1,2,3,4,5];

// function App({items}) { // pass shorthand lakes instead of props
//   return (
//     <ul>
//       {items.map(item => ( //use map when building a list and put each lake object in one div
//       <li key={item.toString()}>{item}</li> //or use (item,i) to iterate and pass {i} as key
//       ))}
//     </ul>
//   );
// }

// ReactDOM.render(
//   <App items={itemList}/>, //pass the const as property
//   document.getElementById('root')
// );

//Conditioning rendering
// set in the render "season = "summer" and pass season as props to App function and give name property to pass
// as props in lake and skiresort functions to make the two functions dynamic
// function Lake({name}) {   //try to keep the children function dynamic by passing {name}
//   return (
//     <div>
//       <h1>Visit {name} </h1>
//     </div>
//   );
// }

// function SkiResort({name}) {
//   return (
//     <div>
//       <h1>Visit {name} </h1>
//     </div>
//   );
// }

// function App({season}) { //use ternary expression to list the conditions
//   return (
//     <div>
//       {season === "summer" ? (<Lake name="Jenny Lake" />) :
//       season === "winter" ? (<SkiResort name="JHMR" />) :
//       (
//         <h1>Come back in the summer or winter!</h1>
//       )}
//     </div>
//   );
// }

// ReactDOM.render(
//   <App season="summer"/>,
//   document.getElementById('root')
// );

//React Fragments
// function Lake() { 
//   return (
//       <h1>Visit Lake </h1>
//   );
// }

// function SkiResort() {
//   return (
//       <h1>Visit Ski Resort </h1>
//   );
// }

// function App() { //render two sibling components at the same time and avoid many div tags
//   return (
//     <React.Fragment>  
//      <Lake />
//      <SkiResort />
//     </React.Fragment>
//   );
// }

// ReactDOM.render( // <>/</> is the same as React.Fragment tag; 
//   <App />,
//   /*
//   use the code below instead of in App component renders the same result; 
//   comment out App component above
//   <>
//   <Lake /> <Lake />
//   </>,
//   */ 
//   document.getElementById('root')
// );

//Array - ways to get item
// const snacks = ["popcorn", "pretzels", "pineapple"];
// console.log(snacks[0]);

// const [first, , third] = ["popcorn", "pretzels", "pineapple"];  
// //you can give it whatever name you want to replace first, second, third
// console.log(third);

//State with Hooks
// function App() {
//   //useState is a built-in hook, which is a function to handle state changes
//   //create a constant and apply array destructuring for status value; set initial status to Open
//   const [status, setStatus] = useState("Open"); //useStateu returns two values: status value,status update function
//   // have multiple different state values in the same component
//   const [year, setYear] = useState(2022);
//   const [manager, setManager] = useState("M");
//   return ( //when you have multiple objects, wrap up with <>/</>
//     <> 
//     <div>
//     <h1>Year: {year}</h1>
//     <button onClick={() => setYear(year + 1)}>New Year</button>
//     <button onClick={() => setYear("2022")}>Current Year</button>
//     </div>
//     <div>
//     <h1>Manager: {manager}</h1>
//     <button onClick={() => setManager("M")}>Current Manager</button>
//     <button onClick={() => setManager("S")}>New Manager</button>
//     </div>
//     <div>
//       <h1>Status: {status}</h1>
//       <button onClick={() => setStatus("Open")}>Open</button>
//       <button onClick={() => setStatus("Back in 5")}>Break</button>
//       <button onClick={() => setStatus("Close")}>Close</button>
//     </div>
//     </>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

//useEffect
// function Checkbox() {
//   const [checked, setChecked] = useState(false); //true or false as the onChange is a boolean expression
//   useEffect(() => {
//     alert(`checked: ${checked.toString()}`); //the alert itself fires before we render the component;
//     //however, after useing useEffect, it allows performing side effects inside the component
//   });
//   return (
//     <>
//     <input 
//     type="checkbox"
//     value={checked}
//     onChange={() => setChecked(checked => !checked) //a toggle: whatever the value of checked is, returns the opposite
//     }/>
//     {checked ? "checked" : "not checked"}
//     </>
//   );
// }

// ReactDOM.render(
//   <Checkbox />,
//   document.getElementById('root')
// );

//useEffect dependency array
// function InputDependency() {
//   const [val, setVal] = useState(""); //give the input an empty array as initial value
//   const [val2, setVal2] = useState("");

//   // Why using dependency array? 
//   // because we want only one of these useEffects to fire if that state value is being updated
//   // because we won't trigger unnecessary re-renders if we pass the right values to that array
//   useEffect(() => { //takes two arguments (the state variable that we want to listen for changes)
//     console.log(`field 1: ${val}`);
//   }, [val]);   //adding [val] dependency array will listen to only
//   // [val], [val2] will let you listen to both whenever you type in val input
  
//   useEffect(() => {
//     console.log(`field 2: ${val2}`);
//   }, [val2]); //adding [val2] dependency array will listen to only
  
  
//   return (
//     <>
//     <label>Favorite Phrase:
//       <input value={val} onChange={e => setVal(e.target.value)} />
//     </label>
//     <br/>
//     <label>Second Favorite Phrase:
//       <input value={val2} onChange={e => setVal2(e.target.value)} />
//     </label>
//     </>
//   );
// }

// ReactDOM.render(
//   <InputDependency />,
//   document.getElementById('root')
// );

// Fetch API data with useEffect
// function GitHubUser({login}) { //fetch data from Github API; pass login as dynamic param and call in the parent component
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/${login}`)
//     .then(res => res.json())
//     .then(setData) //call the function with the new value of data
//     .catch(console.error);
//   }, []);

//   if(data) { //display the block of json data or fetch particular data using JSON keys
//     return (
//       <>
//       <div>{JSON.stringify(data)}</div> 
//       <h1>{data.login}</h1>
//       <img src={data.avatar_url} width={100} /> 
//       </>
//     )
//   }
//   return null; //if no user, return null
// }

// function FetchAPI() { // return GitHubUser with a property of login that's passed to GitHubUser function
//   return <GitHubUser login="ReneeT19" />
// }

// ReactDOM.render(
//   <FetchAPI />,
//   document.getElementById('root')
// );

// useReducer
function Checkbox() {
  // const [checked, setChecked] = useState(false); 
  // use useReducer and call the function toggle instead of setChecked
  const [checked, toggle] = useReducer(checked => !checked, false); //false is the initial state
  // we don't need the toggle function if we bring the logic one level up to the useReducer function above
  // function toggle() { //extract the state change into a functioin and call this function in onChange
  //   setChecked(checked => !checked)
  // }

  return (
    <>
    <input 
    type="checkbox"
    value={checked}
    onChange={toggle}/>
    {checked ? "checked" : "not checked"}
    </>
  );
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById('root')
);