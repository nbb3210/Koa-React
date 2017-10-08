import React from 'react';
import { Tabs } from 'antd';
import { DeviceList, ApplicationA, ApplicationB, ApplicationC } from '../blocks';

const { TabPane } = Tabs;

const TabApplication = props => (
  <div style={{ paddingTop: 10, height: '100%' }}>
    <div>
      <Tabs>
        <TabPane tab="设备状态" key="9">
          <DeviceList {...props} admin="true" style={{ marginLeft: 5 }} />
        </TabPane>
      </Tabs>
    </div>
    <div style={{ height: 'calc(100% - 280px)' }}>
      <Tabs style={{ height: '100%' }} className="tabApplication">
        <TabPane tab="待处理申请" key="6">
          <ApplicationA style={{ height: '100%', overflowY: 'auto' }} {...props} />
        </TabPane>
        <TabPane tab="已同意申请" key="7">
          <ApplicationB style={{ height: '100%', overflowY: 'auto' }} {...props} />
        </TabPane>
        <TabPane tab="已拒绝申请" key="8">
          <ApplicationC style={{ height: '100%', overflowY: 'auto' }} {...props} />
        </TabPane>
      </Tabs>
    </div>
  </div>
);

export default TabApplication;
