import { Card, Col, Row , PageHeader} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

const App = () => (
<div className='background-style'>
<PageHeader className="site-page-header" > Projects </PageHeader>      
  <Row justify='center' className='contact-card'>
    <Col span={12}>
        <div className='site-card-wrapper'>
              <Card className='project-card-one' bordered={false}>
                <a className='link-text' href='https://note-taker-extravaganza.herokuapp.com/'>
                  Note Taker App
                </a>
              </Card>
              <Card className='project-card-two' bordered={false}>
                <a className='link-text' href='https://github.com/Protomancer/Spawn-A-README.md'>
                  README.md Generator
                </a>
              </Card>
              <Card className='project-card-three' bordered={false}>
                <a className='link-text' href='https://github.com/Protomancer/Team-Profile-Generator' >
                  In Terminal Team profile Generator
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