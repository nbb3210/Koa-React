import React from 'react';
import { Form, Button } from 'antd';

const Submit = ({ before = null, text = 'Login', after = null }) => (
  <Form.Item>
    {before}
    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
      {text}
    </Button>
    {after}
  </Form.Item>
);

export default Submit;
