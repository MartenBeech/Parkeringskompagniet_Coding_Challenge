import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SearchHistoryBar from './SearchHistoryBar';

export default function SearchPage(coinList) {
  ReactDOM.render(
    <React.StrictMode>
      {NavBar()}
      {SearchBar(coinList)}
      {SearchHistoryBar()}
    </React.StrictMode>,
    document.getElementById('root')
  );
}