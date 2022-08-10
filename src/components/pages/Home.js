import { Card, Col, Row , PageHeader} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

const App = () => (
<div className='background-style'>
<PageHeader className="site-page-header" > Home </PageHeader>
<div>      
  <Row justify='center'>
    <Col>
        <div className='site-card-wrapper'>
              <Card style={{height:400,width:800}} className='gallery-card-1' bordered={false}>
              </Card>
        </div>          
    </Col>
  </Row>
  <Row justify='center'>
    <Col>
        <div className='site-card-wrapper'>
              <Card style={{height:400,width:800}} className='gallery-card-2' bordered={false}>
              </Card>
        </div>          
    </Col>
  </Row>
  <Row justify='center'>
    <Col>
        <div className='site-card-wrapper'>
              <Card style={{height:400,width:800}} className='gallery-card-3' bordered={false}>
              </Card>
        </div>          
    </Col>
  </Row>
  <Row justify='center'>
    <Col>
        <div className='site-card-wrapper'>
              <Card style={{height:400,width:800}} className='gallery-card-4' bordered={false}>
              </Card>
        </div>          
    </Col>
  </Row>
  <Row justify='center'>
    <Col>
        <div className='site-card-wrapper'>
              <Card style={{height:400,width:800}} className='gallery-card-5' bordered={false}>
              </Card>
        </div>          
    </Col>
  </Row>
</div>
  <Row justify='center' className='footer'>
    <Card
      className='card-holder'
      title="Made By Protomancer"
      bordered={false}
      style={{width: 300,height: 300}}>
    </Card>
  </Row>
</div>
);
export default App;