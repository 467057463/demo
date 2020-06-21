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
        <li>
          <Link to="/line-height">line-height</Link>
        </li>
        <li>
          <Link to="/gradient">gradient css渐变</Link>
        </li>
        <li>
          <Link to="/object-fit">object-fit</Link>
        </li>
        <li>
          <Link to="/word-break">word-break、word-wrap、white-space</Link>
        </li>
        <li>
          <Link to="/clip">clip</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;
