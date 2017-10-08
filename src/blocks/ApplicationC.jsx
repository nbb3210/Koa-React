import React from 'react';
import { Col, Row } from 'antd';
import { ApplicationCard } from '../blocks';

const ApplicationC = (props) => {
  const applications = props.applications.filter(r => r.status === -1)
    .map((r) => {
      const after = (
        <div>
          <p>回复:</p>
          <p style={{ marginLeft: '2em' }}>{r.feedback}</p>
        </div>
      );
      return (<Col key={r._id} span={6}>
        <ApplicationCard application={r} {...{ after }} /></Col>);
    });
  return (
    <div style={props.style}>
      <Row gutter={10}>
        {applications}
      </Row>
    </div>
  );
};
export default ApplicationC;
