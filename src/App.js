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
      //both gifs and allGifs will receive the gifs, one will be filtered depending on what we are trying to show and only what is set on state will show, while 
      //still keeping al the data in allGifs.
      filterDataByRating: ["g", "pg", "pg-13", "R", "NC-17"]
    }
  }
  rating = (e, rate) => {
    e.preventDefault()
    let result = this.state.allGifs.filter(el => el.rating === rate)
    this.setState({
      gifs: result
    })
  }

  handleInputChange = async (term) => {
    //this method allows us the get the requested data. We are making an async axios call to get all our data from the gify api depending on what is inputed.
    //we are keeping the data in both gifs and allgifs by setting the state to what we are receiving from the GIPHY api.
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
    return (
      <div>
        <Search onTermChange={this.handleInputChange} />
        <div className='filter-button'>
          <h2>Filter By Rating</h2>
          {this.state.filterDataByRating.map((el, idx) => {
            return (
              <Button waves='light' key={idx} onClick={(e) => this.rating(e, el)}>{el}</Button>
            )
          })}
        </div>
        <GifLists gifs={this.state.gifs} />
      </div>
    );
  }
}


export default App;
