import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

import routes from './routers';

import mmUtil from 'mm.util';
console.log(mmUtil);
function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">首页</Link>
            <Link to="/topics">topics</Link>
          </li>
        </ul>
      </nav>
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
