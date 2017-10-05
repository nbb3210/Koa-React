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

const FieldEmail = ({ getFieldDecorator }) => (
  <Form.Item
    {...formItemLayout}
    label="E-mail"
    hasFeedback
  >
    {getFieldDecorator('email', {
      rules: [{
        type: 'email', message: 'The input is not valid E-mail!',
      }, {
        required: true, message: 'Please input your E-mail!',
      }],
    })(<Input />)}
  </Form.Item>
);

export default FieldEmail;
