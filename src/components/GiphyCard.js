import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap'

const GiphyCard = (props) => {
  console.log(props)
  const { id, url } = props
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Image src={url} id={id} responsive />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default GiphyCard;