import React from 'react';
import { Card, Row, Col, Icon, CardTitle} from 'react-materialize';

export default function Blog() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        
        heres where my projects will go.
      </p>
        <Row>
        <Col m={6} s={12}>
        <Card actions={[<a key="1" href="#">This is a link</a>]}
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" />}
              horizontal
              revealIcon={<Icon>more_vert</Icon>}>
              Here is the standard card with a horizontal image.
        </Card>
        </Col>
        </Row>
    </div>
  );
}
