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

const FieldConfirm = ({ getFieldDecorator, checkPassword, handleConfirmBlur }) => (
  <Form.Item
    {...formItemLayout}
    label="Confirm"
    extra="Confirm your password."
    hasFeedback
  >
    {getFieldDecorator('confirm', {
      rules: [{
        required: true, message: 'Please confirm your password!',
      }, {
        validator: checkPassword,
      }],
    })(<Input type="password" onBlur={handleConfirmBlur} />)}
  </Form.Item>
);

export default FieldConfirm;
