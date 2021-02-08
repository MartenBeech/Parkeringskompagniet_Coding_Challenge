import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoinList from './CoinList';

ReactDOM.render(
  <React.StrictMode>
      {CoinList()}
  </React.StrictMode>,
  document.getElementById('root')
);
