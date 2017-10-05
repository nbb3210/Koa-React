import React from 'react';
import { Form, Input } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const FieldStudentId = ({ getFieldDecorator }) => (
  <Form.Item
    {...formItemLayout}
    label="StudentID"
    hasFeedback
  >
    {getFieldDecorator('studentId', {
      rules: [{
        pattern: /^20[0|1|]{1}[0-9]{10}$/, message: 'The input is not valid StudentID!',
      }, {
        required: true, message: 'Please input your studentID',
      }],
    })(<Input />)}
  </Form.Item>
);

export default FieldStudentId;
