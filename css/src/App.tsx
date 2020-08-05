import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

import routes from './routers';

import mmUtil from 'mm.util';
const rest = mmUtil.cat(1, 1)
let r1 = mmUtil.add(1)
console.log(mmUtil.cat(4, 2));
console.dir(r1, rest)
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
