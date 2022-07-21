import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Expenses from './pages/Expenses/Expenses';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Expenses />
      </Router>
    </div>
  );
}

export default App;
