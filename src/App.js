import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';

import HomePage from './pages/homepage.component'

const page = () => {
  return (
    <div>
      <h1>Page Soem</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hat" component={page} />
      </Switch>
    </div>
  );
}

export default App;
