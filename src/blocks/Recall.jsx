import React from 'react';
import { Button, message } from 'antd';

const Recall = ({ applicationId, recallApplication }) => {
  const handleClick = (id) => {
    recallApplication(id).then((res) => {
      if (res.err) {
        message.error(res.err);
      } else {
        message.success('撤回成功！');
      }
    });
  };

  return (
    <div style={{ borderTop: '1px solid #e9e9e9', marginLeft: -15, marginRight: -15, marginTop: 5, paddingTop: 5, textAlign: 'center' }}>
      <Button size="small" onClick={() => handleClick(applicationId)}>撤销申请</Button>
    </div>
  );
};

export default Recall;
