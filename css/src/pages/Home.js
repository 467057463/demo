import React from 'react';
import {
  Link
} from 'react-router-dom';

function Home(){
  return(
    <div className="home">
      <ul>
        <li>
          <Link to="/grid">css grid</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;
