import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Router path='/' />          
        </Switch>
      <h1>Hi this is React js</h1>
    </Router>
  );
}

export default App;
