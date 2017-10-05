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

const FieldName = ({ getFieldDecorator }) => (
  <Form.Item
    {...formItemLayout}
    label="Name"
    hasFeedback
  >
    {getFieldDecorator('name', {
      rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
    })(<Input />)}
  </Form.Item>
);

export default FieldName;
