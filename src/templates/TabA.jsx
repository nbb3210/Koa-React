import React from 'react';
import { Tabs, Icon, Tooltip } from 'antd';
import { TabApplication, TabMember, TabNotice, TabDevice, TabRecord } from '../templates';

const { TabPane } = Tabs;

const TabA = props => (
  <Tabs tabPosition="left" style={{ width: '100%', height: '100%', padding: '5px 10px' }} className="tabAdmin">
    <TabPane tab="申请" key="1"><TabApplication {...props} /></TabPane>
    <TabPane tab="设备" key="2"><TabDevice {...props} /></TabPane>
    <TabPane tab="通知" key="3"><TabNotice {...props} /></TabPane>
    <TabPane tab="用户" key="4"><TabMember {...props} /></TabPane>
    <TabPane tab="日志" key="5"><TabRecord {...props} /></TabPane>
    <TabPane
      tab={<Tooltip title="注销">
        <a href="/admin/logout">
          <Icon type="logout" style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.65)' }} />
        </a>
      </Tooltip>}
      key="6"
    />
  </Tabs>
);

export default TabA;
