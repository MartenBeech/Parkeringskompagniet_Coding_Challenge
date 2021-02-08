import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Card from './Card';

export default function DetailPage(coinName, coinTicker, coinID, coinPrice) {
  ReactDOM.render(
    <React.StrictMode>
      {NavBar()}
      {Card(coinName, coinTicker, coinID, coinPrice)}
    </React.StrictMode>,
    document.getElementById('root')
  );
}