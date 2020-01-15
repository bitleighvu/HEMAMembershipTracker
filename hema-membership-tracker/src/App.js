import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
import Header from './Components/Common/Header';


import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <div id='app'>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route component={NotFound} /> */}
          {/* We should add other Routes here */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;