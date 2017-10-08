import React from 'react';
import { Col, Row, Menu, Input } from 'antd';
import { ApplicationCard } from '../blocks';

const { TextArea } = Input;

const ApplicationA = (props) => {
  const applications = props.applications.filter(r => r.status === 0)
    .map((r) => {
      const hanldeAgree = (newApplication) => {
        const updatedApplicaiton = Object.assign({}, newApplication);
        updatedApplicaiton.status = 1;
        updatedApplicaiton.feedback = document.getElementById(`${newApplication._id}_feedback`).value;
        props.updateApplication(updatedApplicaiton);
      };
      const hanldeDisagree = (newApplication) => {
        const updatedApplicaiton = Object.assign({}, newApplication);
        updatedApplicaiton.status = -1;
        updatedApplicaiton.feedback = document.getElementById(`${newApplication._id}_feedback`).value;
        props.updateApplication(updatedApplicaiton);
      };
      const menu = (
        <Menu>
          <Menu.Item>
            <a onClick={() => hanldeAgree(r)}>同意</a>
          </Menu.Item>
          <Menu.Item>
            <a onClick={() => hanldeDisagree(r)}>拒绝</a>
          </Menu.Item>
        </Menu>
      );
      const after = (
        <div>
          <br />
          <p>添加回复:</p>
          <TextArea id={`${r._id}_feedback`} placeholder="添加回复后再进行操作" autosize />
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
export default ApplicationA;
