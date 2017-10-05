import React from 'react';
import { Form, Icon, Input } from 'antd';

const StudentId = ({ getFieldDecorator }) => (
  <Form.Item>
    {getFieldDecorator('studentId', {
      rules: [{
        pattern: /^20[0|1|]{1}[0-9]{10}$/, message: 'The input is not valid StudentID!',
      },
      {
        required: true, message: 'Please input your StudentId!',
      }],
    })(<Input
      prefix={<Icon type="user" style={{ fontSize: 13 }} />}
      placeholder="StudentId"
    />)}
  </Form.Item>
);

export default StudentId;
