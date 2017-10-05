import React from 'react';
import { Title, RecordList } from '../blocks';

const RecordM = props => (
  <div style={{ height: '100%' }}>
    <Title icon="notification" text="消息中心" />
    <RecordList {...props} />
  </div>
);

export default RecordM;
