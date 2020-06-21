import React from 'react';

import Topic from './topic';

import { 
  Link, 
  useRouteMatch,
  Route,
  Switch
} from 'react-router-dom';

function Topics(){
  const math = useRouteMatch();
  console.log(math)
  return(
    <div className="topics">
      <h2>topics</h2>
      <ul>
        <li>
          <Link to={math.url}>home</Link>
        </li>
        <li>
          <Link to={`${math.url}/111`}>show</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/topics/:id">
          <Topic/>
        </Route>
        <Route path={math.path}>
          <h3>topics index</h3>
        </Route>
      </Switch>
    </div>
  )
}

export default Topics;