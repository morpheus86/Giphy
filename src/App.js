import React, { Component } from "react";
import GifLists from "./components/GifLists";
import Search from "./components/search/Search";
import { Button, ProgressBar, Col, Row } from "react-materialize";
import axios from "axios";
import "./App.css";

const giphyAPI = process.env.REACT_APP_GIPHY_API;

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      allGifs: [],
      //both gifs and allGifs will receive the gifs, one will be filtered depending on what we are trying to show and only what is set on state will show, while
      //still keeping al the data in allGifs.
      filterDataByRating: ["g", "pg", "pg-13", "R", "NC-17"]
    };
  }
  rating = (e, rate) => {
    e.preventDefault();
    try {
      let result = this.state.allGifs.filter(el => el.rating === rate);
      this.setState({
        gifs: result
      });
    } catch (err) {
      console.log(err);
    }
  };
  async componentDidMount() {
    const url = `http://api.giphy.com/v1/gifs/search?q=test&api_key=${giphyAPI}`;
    const data = await axios.get(url);
    const res = data.data;
    const response = res.data;
    this.setState({
      gifs: response,
      allGifs: response
    });
    this.setState({
      gifs: response
    });
  }

  handleInputChange = async term => {
    //this method allows us the get the requested data. We are making an async axios call to get all our data from the gify api depending on what is inputed.
    //we are keeping the data in both gifs and allgifs by setting the state to what we are receiving from the GIPHY api.
    try {
      const replace = term.replace(/\s/g, "+");
      const url = `http://api.giphy.com/v1/gifs/search?q=${replace}&api_key=${giphyAPI}`;
      const data = await axios.get(url);
      const res = data.data;
      const response = res.data;
      this.setState({
        gifs: response,
        allGifs: response
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const filterResult = this.state.filterDataByRating.map((el, idx) => {
      return (
        <Button
          className="button"
          waves="light"
          key={idx}
          onClick={e => this.rating(e, el)}
        >
          {el}
        </Button>
      );
    });
    return this.state.gifs.length !== 0 ? (
      <div>
        <Search onTermChange={this.handleInputChange} />
        <div className="filter-button">
          <h2>Filter By Rating</h2>
          {filterResult}
        </div>
        <GifLists gifs={this.state.gifs} />
      </div>
    ) : (
      <div>
        <Search onTermChange={this.handleInputChange} />
        <div>
          <div>
            <Row>
              <Col s={12}>
                <ProgressBar progress={70} />
              </Col>
              <Col s={12}>
                <ProgressBar />
              </Col>
            </Row>
          </div>
          <div className="progressive">
            <p>
              {" "}
              The GIPHY you are looking for doesnt exist or you havent created
              it yet :-){" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
