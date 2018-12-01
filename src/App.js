import React, { Component } from 'react';
import GifLists from './components/GifLists';
import Search from './components/search/Search';
import { Button } from 'react-materialize'
import axios from 'axios'
import './App.css';

const giphyAPI = process.env.REACT_APP_GIPHY_API

class App extends Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
      allGifs: [],
      //both gifs will receive the gifs, one will be filtered depending on what we are trying to show and only what is set on state will show, while 
      //still keeping al the data in allGifs.
      filterDataByRating: ["g", "pg", "pg-13", "R", "NC-17"]
    }
  }
  rateByPG = (e, rate) => {
    e.preventDefault()
    let result = this.state.allGifs.filter(el => el.rating === rate)
    this.setState({
      gifs: result
    })
  }

  handleTermChange = async (term) => {
    //we are making an async axios call to get all our data from the gify api depending on what is inputed
    //we are keeping 2 sets of data in order to filter the data to our liking and setting the state with the data that we need to display
    try {
      const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=${giphyAPI}`;
      const data = await axios.get(url)
      const res = data.data
      const response = res.data
      this.setState({
        gifs: response,
        allGifs: response
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log('state', this.state.gifs)
    return (
      <div className="container">
        <Search onTermChange={this.handleTermChange} />
        <h1>Filter By Rating</h1>
        {this.state.filterDataByRating.map((el, idx) => {
          return (
            <Button waves='light' key={idx} onClick={(e) => this.rateByPG(e, el)}>{el}</Button>
          )
        })}
        <GifLists gifs={this.state.gifs} />
      </div>
    );
  }
}


export default App;
