import React from 'react';
import { Card } from 'antd';

const MemberCard = ({ member }) => {
  const { name, phone, email, studentId, institute } = member;
  return (
    <Card
      noHovering="true"
      title={name}
    >
      <div>
        <p>手机:{phone}</p>
        <p>邮箱:{email}</p>
        <p>学号:{studentId}</p>
        <p>学院:{institute}</p>
      </div>
    </Card>
  );
};

export default MemberCard;
