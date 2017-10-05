import React, { Component } from 'react';
import { Card, Form, message } from 'antd';
import { Link } from 'react-router-dom';
import { FieldName, FieldNickname, FieldPhone, FieldEmail, FieldStudentId, FieldInstitute, FieldPassword, FieldConfirm, FieldAgreement, Submit } from '../blocks';

const after = <span>Or <Link to="/">Back to login!</Link></span>;
const text = 'Register';

class Register extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (!values.agreement) {
          message.warning('Yon haven\'t read the agreement.');
        } else {
          const { name, nickname, phone, email, studentId, institute, password } = values;
          this.props.handleRegister({
            name,
            nickname,
            phone,
            email,
            studentId,
            institute,
            password,
          })
            .then((res) => {
              if (res.err) {
                message.error(res.err);
              } else {
                res.success();
              }
            });
        }
      }
    });
  }

  handleInstituteChange = (value) => {
    const autoCompleteResult = (!value) ? [] : ['学院', '中心', '重点实验室'].map(suffix => `${value}${suffix}`);
    this.setState({ autoCompleteResult });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { onSubmit,
      handleInstituteChange,
      handleConfirmBlur,
      checkPassword,
      checkConfirm } = this;
    const { autoCompleteResult } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <Card title="星湖光IN" style={{ width: 350 }}>
        <Form {...{ onSubmit }}>
          <FieldName {...{ getFieldDecorator }} />
          <FieldNickname {...{ getFieldDecorator }} />
          <FieldEmail {...{ getFieldDecorator }} />
          <FieldStudentId {...{ getFieldDecorator }} />
          <FieldPhone {...{ getFieldDecorator }} />
          <FieldInstitute {...{ getFieldDecorator, autoCompleteResult, handleInstituteChange }} />
          <FieldPassword {...{ getFieldDecorator, checkConfirm }} />
          <FieldConfirm {...{ getFieldDecorator, checkPassword, handleConfirmBlur }} />
          <FieldAgreement {...{ getFieldDecorator }} />
          <Submit {...{ text, after }} />
        </Form>
      </Card>
    );
  }
}

export default Form.create()(Register);
