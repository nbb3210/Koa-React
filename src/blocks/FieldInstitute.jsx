import React from 'react';
import { Form, AutoComplete, Input } from 'antd';

const AutoCompleteOption = AutoComplete.Option;
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

const FieldInstitute = ({ getFieldDecorator, autoCompleteResult, handleInstituteChange }) => {
  const instituteOptions = autoCompleteResult.map(institute => (
    <AutoCompleteOption key={institute}>{institute}</AutoCompleteOption>
  ));

  return (
    <Form.Item
      {...formItemLayout}
      label="Institute"
      hasFeedback
    >
      {getFieldDecorator('institute', {
        rules: [{
          required: true, message: 'Please input your institute',
        }],
      })(<AutoComplete
        dataSource={instituteOptions}
        onChange={handleInstituteChange}
      >
        <Input />
      </AutoComplete>)}
    </Form.Item>
  );
};

export default FieldInstitute;
