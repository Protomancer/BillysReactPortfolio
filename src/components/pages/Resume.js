import { Card, Col, Row , PageHeader} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

const App = () => (
<div className='background-style'>
<PageHeader className="site-page-header" > Resume </PageHeader>      
  <Row justify='center' className='contact-card'>
    <Col span={12}>
        <div className='site-card-wrapper'>
              <Card className='resume-card' bordered={false}>
                <a className='link-text' href='https://docs.google.com/document/d/18wxkFEQLrOedUa6i3qGrtFuDcAycrJhvlW9P9jVsk88/edit?usp=sharing'>
                  My resume
                </a>
              </Card>
        </div>          
    </Col>
  </Row>
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