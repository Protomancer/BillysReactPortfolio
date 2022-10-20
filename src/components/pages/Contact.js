import { Card, Col, Row , PageHeader} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

const App = () => (
<div className='background-style'>
<PageHeader className="site-page-header" > Contact Protomancer </PageHeader>      
  <Row justify='center' className='contact-card'>
    <Col span={12}>
        <div className='site-card-wrapper'>
              <Card className='contact-card-one' bordered={false}>
                <a className='link-text' href='https://github.com/Protomancer'>
                  On Github
                </a>
              </Card>
              <Card className='contact-card-two' bordered={false}>
                <a className='link-text' href='https://www.linkedin.com/in/scott-billy-pinkerton/'>
                  On linkedIn
                </a>
              </Card>
              <Card className='contact-card-three' bordered={false}>
                <a className='link-text' href='https://www.instagram.com/cultofstoneandbone/' >
                  My art page on Instagram
                </a>
              </Card>
        </div>          
    </Col>
  </Row>
  <Row justify='center' className='footer'>
    <Card justify='center'
      className='card-holder'
      title="Made By Protomancer"
      bordered={false}
      style={{width: 600,height: 300}}>
        <p>
          Email @ billybattlebones@gmail.com
        </p>
    </Card>
  </Row>
</div>
);
export default App;