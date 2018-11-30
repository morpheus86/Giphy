import React, { Component } from 'react';
import GifLists from './components/GifLists'
import Search from './components/search/Search'
import './App.css';

import { connect } from 'react-redux'

class App extends Component {
  handleInputChange = (inp) => {
    console.log(inp)
  }
  render() {
    return (
      <div className="App">
        <Search onInputChange={this.handleInputChange} />
        <GifLists gifs={this.props.gifs} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    gifs: state.fetch.gifs
  };
}

// In our mapState we are getting the gifs from our fetchReducer whic is in the redux store

export default connect(mapState)(App);
