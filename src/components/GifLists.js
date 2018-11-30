import React from 'react';
import GiphyCard from './GiphyCard'


const GifLists = (props) => {

  const gifs = props.gifs.map((pic) => {
    return <GiphyCard key={pic.id} gif={pic} />
  })
  return (
    <div>
      <ul>
        {gifs}
      </ul>
    </div>
  );

}



export default GifLists;