import React from 'react';
import { Link } from 'react-router-dom';

let name: String = 'mma';

interface Prop {
  title: string;
  children?: React.ReactNode;
}

function Element({ title, children }: Prop) {
  return (
    <div>
      <h1>{title}</h1>
      <p>ssssss</p>
    </div>
  );
}

class Clock extends React.Component {
  public constructor(props: any) {
    super(props);
    this.state = { date: new Date() };
    this.timerId = null;
  }
  public componentDidMount() {
    this.timerId = setInterval(() => this.ticker(), 1000);
  }
  public componentWillUnmount() {
    clearInterval(this.timerId);
  }
  public ticker() {
    this.setState({
      date: new Date()
    });
  }
  public render() {
    return (
      <div>
        <h2>hello</h2>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
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
      <div className="box">
        宝贝，<span className="emphasis">爱你比心{name}</span>
      </div>
      <Element title="hello world">
        <div>children</div>
      </Element>
      <Element title="hello world" />
      <Clock />
    </div>
  );
}

export default Home;
