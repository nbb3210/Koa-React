import React from 'react';
import { Form, Icon, Input } from 'antd';

const Password = ({ getFieldDecorator }) => (
  <Form.Item>
    {getFieldDecorator('password', {
      rules: [{
        min: 6, message: 'More than six!',
      }, {
        required: true, message: 'Please input your Password!',
      }],
    })(<Input
      prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
      type="password"
      placeholder="Password"
    />)}
  </Form.Item>
);

export default Password;
