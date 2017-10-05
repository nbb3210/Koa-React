import React from 'react';
import { Title, DeviceList, ApplicationText } from '../blocks';

const ApplicationM = props => (
  <div style={{ height: '100%' }}>
    <Title icon="edit" text="申请设备" />
    <DeviceList {...props} style={{ marginTop: 15, marginLeft: 3 }} />
    {props.checkedDevices.length > 0 ? <ApplicationText {...props} /> : null}
  </div>
);

export default ApplicationM;
