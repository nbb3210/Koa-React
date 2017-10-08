import React from 'react';
import { Col, Row, Menu, Input } from 'antd';
import { ApplicationCard } from '../blocks';

const { TextArea } = Input;

const ApplicationB = (props) => {
  const applications = props.applications.filter(r => r.status === 1)
    .map((r) => {
      const finishApplication = (newApplication) => {
        const updatedApplicaiton = Object.assign({}, newApplication);
        updatedApplicaiton.status = 2;
        updatedApplicaiton.feedback = document.getElementById(`${newApplication._id}_feedback`).value;
        props.updateApplication(updatedApplicaiton);
      };
      const menu = (
        <Menu>
          <Menu.Item>
            <a onClick={() => finishApplication(r)}>结束申请(确认设备归还)</a>
          </Menu.Item>
        </Menu>
      );
      const after = (
        <div>
          <p>回复:</p>
          <p style={{ marginLeft: '2em' }}>{r.feedback}</p>
          <br />
          <p>添加备注:</p>
          <TextArea id={`${r._id}_feedback`} placeholder="添加备注后再进行操作" autosize />
        </div>
      );
      return (<Col key={r._id} span={6}>
        <ApplicationCard application={r} {...{ menu, after }} /></Col>);
    });
  return (
    <div style={props.style}>
      <Row gutter={10}>
        {applications}
      </Row>
    </div>
  );
};
export default ApplicationB;
