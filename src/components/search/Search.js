import React, { Component } from 'react';


class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }
  onInputChange = (input) => {
    this.setState({ input })
    this.props.onTermChange(input)
  }

  render() {

    return (
      <form className='search'>
        <input onChange={e => this.onInputChange(e.target.value)} />
      </form>
    );
  }
}

export default Search;