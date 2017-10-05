import React from 'react';
import { Card, Form, message } from 'antd';
import { StudentId, Password, Submit } from '../blocks';

const Login = ({ form, before, after, handleLogin }) => {
  const { getFieldDecorator, validateFields } = form;
  const onSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        handleLogin(values).then((res) => {
          if (res.err) {
            message.error(res.err);
          } else {
            res.success();
          }
        });
      }
    });
  };

  return (
    <Card title="星湖光IN" style={{ width: 300 }}>
      <Form {...{ onSubmit }}>
        <StudentId {...{ getFieldDecorator }} />
        <Password {...{ getFieldDecorator }} />
        <Submit {...{ before, after }} />
      </Form>
    </Card>
  );
};

export default Form.create()(Login);
