import { Card, Col, Row , PageHeader} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

const App = () => (
<div>
<PageHeader
    className="site-page-header"
    title="Projects"
    subTitle="Here are some of my current best projects."
  />
  <div className="site-card-wrapper">
    <Row gutter={4}>
      <Col span={8}>
        <Card title="Card title" bordered={true}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={true}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={true}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
</div>
);
export default App;