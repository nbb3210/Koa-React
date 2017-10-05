import React from 'react';

const ApplicationContent = ({ application, after = null }) => {
  const { member, devices, days, reason } = application;

  return (
    <div>
      <p>申请人:</p>
      <p style={{ textIndent: '2em' }}>{member.name}</p>
      <p>时间:</p>
      <p style={{ textIndent: '2em' }}>{days[0]}至{days[1]}</p>
      <p>设备:</p>
      {devices.map(d => <p key={d.createdAt} style={{ textIndent: '2em' }}>{d.type}-{d.name}</p>)}
      <p>备注:</p>
      <p style={{ textIndent: '2em' }}>{reason}</p>
      {after}
    </div>
  );
};

export default ApplicationContent;
