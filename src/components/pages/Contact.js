import { Card, Col, Row , PageHeader} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import '../../App.css';

const App = () => (
      <Col span={100}>
        <div>
        <PageHeader
            className="site-page-header"
            title="Contact Info"
          />
          <div className="site-card-wrapper">
            <Row gutter={4}>
              <Col span={50}>
                <Card title="Card title" bordered={true}>
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
);
export default App;