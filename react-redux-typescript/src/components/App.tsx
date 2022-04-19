import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

//Provider is the component to redux store that gives access to all redux components
//store is exporting all redux stuff from index.ts file instead of digging into state folder

//RepositoriesList is the component that contains all the logic
const App = () => {
  return (
    <>
    <Provider store = {store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
    </div>
    </Provider>
    </>
  );
};

export default App;
