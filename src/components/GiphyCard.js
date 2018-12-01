import React from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

const GiphyCard = (image) => {
  const rating = 'Rating: ' + image.gif.rating
  return (
    <Col m={3} s={6}>
      <Card header={<CardTitle reveal image={image.gif.images.downsized.url} waves='light' className="img" />}
        title={rating}>
      </Card>
    </Col>
  );
};

export default GiphyCard;

