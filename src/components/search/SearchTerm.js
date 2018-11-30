import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class SearchTermNum extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.formControlsText]: e.target.value
    })

  }
  render() {
    return (
      <form>
        <FormControl
          id="formControlsText"
          type={this.state.input}
          label="Text"
          placeholder="Enter text"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchTermNum;