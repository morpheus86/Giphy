import React, { Component } from 'react';
import { Row, Input } from 'react-materialize'

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
      // <form className='search'>
      <Row>
        <Input type="text" label="Search Giphy" s={12} onChange={e => this.onInputChange(e.target.value)} />
      </Row>

    );
  }
}

export default Search;