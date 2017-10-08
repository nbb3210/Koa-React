import React from 'react';
import { Dropdown, Icon, Card } from 'antd';
import { ApplicationContent } from '../blocks';

const ApplicationCard = ({ application, menu = null, after = null }) => {
  const createdAt = new Date(application.createdAt);
  const date = createdAt.toLocaleString();
  return (
    <Card
      noHovering="true"
      bodyStyle={{ height: 400 }}
      title={`申请时间:${date}`}
      style={{ marginBottom: 5 }}
      extra={menu ? <Dropdown overlay={menu}>
        <a>操作<Icon type="down" /></a>
      </Dropdown> : null}
    >
      <ApplicationContent {...{ application }} />
      {after}
    </Card>
  );
};

export default ApplicationCard;
