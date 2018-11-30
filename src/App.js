import React, { Component } from 'react';
import GifLists from './components/GifLists'
import './App.css';
import SearchTerm from './components/search/SearchTerm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchTerm />
        <GifLists />
      </div>
    );
  }
}

export default App;
