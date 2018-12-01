import React from 'react'
import axios from 'axios'
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
const giphyAPI = process.env.REACT_APP_GIPHY_API

class SearchFilter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: [],
      rating: [],
      userName: []
    };
  }
  onToggleClick = async (e) => {

  }

  handleChange = (e) => {
    this.setState({ value: e });
  }

  render() {
    return (
      <ToggleButtonGroup
        type="checkbox"
        value={this.state}
        onChange={this.handleChange}
      >
        <ToggleButton value={this.state.title} onClick={e => this.onToggleClick(e.target.value)}>filter By Title</ToggleButton>
        <ToggleButton value={this.state.rating}>filter By Rating</ToggleButton>
        <ToggleButton value={this.state.userName}>filter By Username</ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

export default SearchFilter;