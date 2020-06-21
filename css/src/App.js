import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Home from './pages/Home';

// router 相关
import Topics from './pages/topics';

// css 相关
import Grid from './pages/Grid';
import LineHeight from './pages/LineHeight';
import Gradient from './pages/Gradient';
import ObjectFit from './pages/ObjectFit';
import WordBreak from './pages/WordBreak';
import Clip from './pages/Clip';


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
        <Route path="/clip">
          <Clip/>
        </Route> 
        <Route path="/word-break">
          <WordBreak/>
        </Route>    
        <Route path="/object-fit">
          <ObjectFit/>
        </Route>     
        <Route path="/grid">
          <Grid/>
        </Route>
        <Route path="/line-height">
          <LineHeight/>
        </Route>
        <Route path="/gradient">
          <Gradient/>
        </Route>
        <Route path="/topics">
          <Topics/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
