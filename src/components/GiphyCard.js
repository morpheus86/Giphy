import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const GiphyCard = (image) => {
  return (
    <Card header={<CardTitle reveal image={image.gif.images.downsized.url} waves='light' />}
      title={image.gif.title}
      reveal={<h1>VOILA</h1>}>
    </Card>
    // <div className='img'>
    //   <img src={image.gif.images.downsized.url} />
    // </div>
  );
};

export default GiphyCard;