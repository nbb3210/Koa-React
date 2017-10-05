import React from 'react';
import { Breadcrumb, Icon } from 'antd';

const Title = ({ icon, text }) => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <Icon type={icon} />
      <span>{text}</span>
    </Breadcrumb.Item>
  </Breadcrumb>
);

export default Title;
