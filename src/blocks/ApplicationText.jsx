import React from 'react';
import { DatePicker, Input, Button, Tag, message } from 'antd';

let days = [];
const ApplicationText = (props) => {
  const { member, checkedDevices, uncheckDevice, handleApplication } = props;
  const list = checkedDevices.map(t => <Tag style={{ marginBottom: 5 }} key={`${t.order}_tag`} closable onClose={() => uncheckDevice(t)}>{`${t.name}(${t.type})`}</Tag>);
  const onClick = () => {
    if (days.length === 0) {
      message.error('请选择日期!');
    }
    const reason = document.getElementById('reason').value;
    if (!reason) {
      message.error('请填写申请理由!');
    }
    if (days.length === 2 && reason) {
      handleApplication(member, checkedDevices, days, reason);
    }
  };

  return (
    <div style={{ marginTop: 15 }}>
      <strong>{member.name}</strong>申请在&nbsp;&nbsp;<DatePicker.RangePicker
        size={'small'}
        onChange={(date, dateString) => {
          days = dateString;
        }}
      />&nbsp;&nbsp;期间，<br />
      <div style={{ marginTop: 5 }}>借用协会设备&nbsp;&nbsp;{list}</div>
      <strong style={{ verticalAlign: 'middle' }}>用于</strong>&nbsp;&nbsp;<Input.TextArea id="reason" style={{ width: '50%', height: 22, padding: '2px 6px', verticalAlign: 'middle' }} size={'small'} placeholder="申请原因" autosize />
      <p style={{ marginTop: 5 }}><strong>承诺爱护设备并&nbsp;&nbsp;</strong><Button onClick={onClick} size={'small'} type="primary">提交申请</Button></p>
    </div>
  );
};

export default ApplicationText;
