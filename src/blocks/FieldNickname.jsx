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

const FieldNickname = ({ getFieldDecorator }) => (
  <Form.Item
    {...formItemLayout}
    label="Nickname"
    hasFeedback
  >
    {getFieldDecorator('nickname', {
      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
    })(<Input />)}
  </Form.Item>
);

export default FieldNickname;
