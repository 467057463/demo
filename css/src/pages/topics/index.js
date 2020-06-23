import React from 'react';
import { renderRoutes } from "react-router-config";

import { 
  Link, 
  useRouteMatch,
} from 'react-router-dom';

function Topics({ route }){
  const math = useRouteMatch();
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
      {renderRoutes(route.routes)}
    </div>
  )
}

export default Topics;