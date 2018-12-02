import React from 'react';
import GiphyCard from './GiphyCard'
import { Row } from 'react-materialize'

const GifLists = (props) => {
  const gifs = props.gifs.map((pic) => {
    return <GiphyCard key={pic.id} gif={pic} />
  })
  return (
    <Row>
      {gifs}
    </Row>
  );

}



export default GifLists;