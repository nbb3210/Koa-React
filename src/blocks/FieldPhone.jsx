import React from 'react';
import { Form, Tooltip, Input, Icon } from 'antd';

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

const FieldPhone = ({ getFieldDecorator }) => (
  <Form.Item
    {...formItemLayout}
    label={(
      <span>Phone&nbsp;
        <Tooltip title="We won't bother you.">
          <Icon type="question-circle-o" />
        </Tooltip>
      </span>
    )}
    hasFeedback
  >
    {getFieldDecorator('phone', {
      rules: [{
        pattern: /^1[3|4|5|8][0-9]\d{8}$/, message: 'The input is not valid Phone!',
      }, {
        required: true, message: 'Please input your phone number!',
      }],
    })(<Input style={{ width: '100%' }} />)}
  </Form.Item>
);

export default FieldPhone;
