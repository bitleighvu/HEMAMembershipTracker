import React from 'react';
import Home from './Components/Common/Home/Home';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
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