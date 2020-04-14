import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import HomePage from './HomePage.js';
import ResultsPage from './ResultsPage';

function App() {

return(
  <Router>
    <div className="App">
      <Switch>
        <Route path = "/" exact component ={HomePage}/>
        <Route path = "/ResultPage/:id" component={ResultsPage}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
