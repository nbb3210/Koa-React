import React from 'react';
import { Card } from 'antd';
import { RecordM, ApplicationM } from '../templates';

const CardM = props => (
  <Card
    style={{ width: '95%', height: '90%' }}
    bodyStyle={{ height: 'calc(100% - 48px)' }}
    title="光IN协会设备中心"
    extra={<a href="/logout">注销</a>}
  >
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ width: '25%', borderRight: '1px solid #e9e9e9', paddingRight: 24, height: '100%' }}>
        <RecordM {...props} />
      </div>
      <div style={{ width: '75%', paddingLeft: 24, height: '100%' }}>
        <ApplicationM {...props} />
      </div>
    </div>
  </Card>
);

export default CardM;
