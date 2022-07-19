import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
