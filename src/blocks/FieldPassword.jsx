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

const FieldPassword = ({ getFieldDecorator, checkConfirm }) => (
  <Form.Item
    {...formItemLayout}
    label="Password"
    hasFeedback
  >
    {getFieldDecorator('password', {
      rules: [{
        required: true, message: 'Please input your password!',
      }, {
        min: 6, message: 'More than six',
      }, {
        validator: checkConfirm,
      }],
    })(<Input type="password" />)}
  </Form.Item>
);

export default FieldPassword;
