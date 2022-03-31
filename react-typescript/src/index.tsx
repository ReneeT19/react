import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';
import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

//create a component App
const App = () => {
  return <>
    {/* <h1>Hi I am a GrandParent - App Component!</h1> */}
    <div>
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
    {/* <Parent /> */}
  </>
};

ReactDOM.render(
  <App />,
  document.querySelector('#root') //or getElementById('root')
);
// With a querySelector statement, you can select an element based on a CSS selector. This means you can select elements by ID, class, or any other type of selector. Using the getElementById method, you can only select an element by its ID. Generally, you should opt for the selector that most clearly gets the job done.
