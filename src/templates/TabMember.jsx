import React from 'react';
import { Col, Row } from 'antd';
import { MemberCard } from '../blocks';

const TabMember = props => (
  <div style={{ marginTop: 10 }}>
    <Row gutter={10}>
      {props.members.map(m => <Col key={`member_${m._id}`} span={6}><MemberCard member={m} /></Col>)}
    </Row>
  </div>
);

export default TabMember
;
