import React, { Component } from 'react';
import GifLists from './components/GifLists'
import Search from './components/search/Search'
import SearchFilter from './components/search/SearchFilter'
import axios from 'axios'
import './App.css';




const giphyAPI = process.env.REACT_APP_GIPHY_API

class App extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  handleTermChange = async (term) => {
    try {
      const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=${giphyAPI}`;
      const data = await axios.get(url)
      const res = data.data
      const response = res.data
      console.log(response)
      this.setState({
        gifs: response
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="container">
        <Search onTermChange={this.handleTermChange} />
        <SearchFilter onTermChange={this.handleTermChange} />
        <GifLists gifs={this.state.gifs} />
      </div>
    );
  }
}


export default App;
