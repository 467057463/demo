import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// this is a ppp
const foo = [1, 2, 3].map((num) => {
  console.log(num * num);
});

let my_name = 'mm';

function foos(i: number) {
  if (i === 1) console.log(i);
  if (i === 2) console.log(i);
  if (i === 3) console.log(i);
  if (i === 4) console.log(i);
  if (i === 5) console.log(i);
  if (i === 6) console.log(i);
  if (i === 7) console.log(i);
  if (i === 8) console.log(i);
  if (i === 9) console.log(i);
  if (i === 10) console.log(i);
  if (i === 11) console.log(i);
  if (i === 12) console.log(i);
  if (i === 13) console.log(i);
  if (i === 14) console.log(i);
  if (i === 15) console.log(i);
  if (i === 16) console.log(i);
  if (i === 17) console.log(i);
  if (i === 18) console.log(i);
  if (i === 19) console.log(i);
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
