import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const db = {
  user: {
    name: 'sss'
  }
};

const nameLength = db?.user?.name?.length;

console.log(nameLength);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
