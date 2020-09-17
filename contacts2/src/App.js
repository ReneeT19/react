import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts 
 
    return <ol>
      {people.map(person => (
        <li key = {person.name}>{person.name}</li>
      ))}
    </ol>
  }
 }

 class App extends Component {
  render() {
  return (
    <div className="App">
      <ContactList contacts={[
        {name: 'Michael'},
        {name: 'Ryan'},
        {name: 'Tyler'}
    ]}/>
      <ContactList contacts={[
        {name: 'Renee'},
        {name: 'Erik'},
        {name: 'Soren'}
    ]}/>
    </div>
  );
 }
 }
 
 export default App;
 
// function App() {
//   return (
//     <div className="App">
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */




