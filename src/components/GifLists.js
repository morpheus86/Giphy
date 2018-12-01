import React from 'react';
import GiphyCard from './GiphyCard'
import { Row, Col } from 'react-materialize'

const GifLists = (props) => {

  const gifs = props.gifs.map((pic) => {
    return <GiphyCard key={pic.id} gif={pic} />
  })
  return (
    <Row>
      <Col s={12} m={5}>
        {gifs}
      </Col>
    </Row>
  );

}



export default GifLists;