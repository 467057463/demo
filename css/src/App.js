import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Home from './pages/Home';
import Grid from './pages/Grid';


function App() {
  return (
    <div className="app">
      <nav>
      <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
        </ul>
      </nav>
      
      <Switch>        
        <Route path="/grid">
          <Grid/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
