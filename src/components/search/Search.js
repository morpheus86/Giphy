import React, { Component } from "react";
import { Row, Input } from "react-materialize";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
  onInputChange = input => {
    this.setState({ input });
    this.props.onTermChange(input);
    /*
    onInputChange will be fired whenever the input is being updated and setting the new state through this.setState().
    Also, the prop onTermChange that was passed down to the Search component in our app also fires whenever there is an input change with that input being
    passed as an argument. This allows the fetching of data related depending on the input being type.
    */
  };

  render() {
    return (
      <Row>
        <Input
          type="text"
          label="Search Giphy"
          s={12}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </Row>
    );
  }
}

export default Search;
