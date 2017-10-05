import React from 'react';
import { Form, Checkbox, Popover } from 'antd';

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 18,
      offset: 6,
    },
  },
};
const content = (
  <div>
    <p>若信息核查不实，账号将被管理员删除</p>
    <p>Content</p>
  </div>
);

const FieldAgreement = ({ getFieldDecorator }) => (
  <Form.Item {...tailFormItemLayout} style={{ marginBottom: 8 }}>
    {getFieldDecorator('agreement', {
      valuePropName: 'checked',
    })(<Checkbox>I have read the&nbsp;
      <Popover content={content} title="光IN" trigger="click">
        <a>agreement</a>
      </Popover>.
    </Checkbox>)}
  </Form.Item>
);

export default FieldAgreement;
