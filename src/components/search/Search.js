import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }
  onInputChange = (input) => {

  }

  render() {

    return (
      <form>
        <FormControl
          id="formControlsText"
          type={this.state.input}
          label="Text"
          placeholder="Enter text"
          onChange={e => this.onInputChange(e.target.value)}
        />
      </form>
    );
  }
}

export default Search;