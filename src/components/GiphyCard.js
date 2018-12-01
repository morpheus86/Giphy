import React from 'react';


const GiphyCard = (image) => {

  return (
    <div className='img1'>
      <img src={image.gif.images.downsized.url} />
    </div>
  );
};

export default GiphyCard;