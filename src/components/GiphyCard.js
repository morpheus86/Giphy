import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap'

const GiphyCard = (props) => {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Image src="/thumbnail.png" responsive />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default GiphyCard;