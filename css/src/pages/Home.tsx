import React from 'react';
import { Link } from 'react-router-dom';

const ThemeContent = React.createContext('light');

class Toolbar extends React.Component {
  public static contextType = ThemeContent;
  public render() {
    console.log(this);
    return <div>ssss</div>;
  }
}

console.log(ThemeContent);

function Content() {
  return (
    <ThemeContent.Consumer>
      {(value) => <div>{value}</div>}
    </ThemeContent.Consumer>
  );
}

function Home() {
  return (
    <div className="home">
      <ul>
        <li>
          <Link to="/topics">topics</Link>
        </li>
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

      <ThemeContent.Provider value="dark">
        <Toolbar />
        <Content />
      </ThemeContent.Provider>
    </div>
  );
}

export default Home;
