import React from 'react';
import { Timeline, Icon, Popover } from 'antd';
import { ApplicationContent, Recall } from '../blocks';

const RecordList = (props) => {
  const { records, recallApplication } = props;
  const items = records.map((r) => {
    const createdAt = new Date(r.createdAt);
    const date = createdAt.toLocaleString();
    if (r.status === 0) {
      // 提交申请
      const after = <Recall applicationId={r.application._id} {...{ recallApplication }} />;
      const content = <ApplicationContent application={r.application} {...{ after }} />;
      return (
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} key={r._id} >
          您于&nbsp;{date}&nbsp;提交了
          <Popover placement="rightTop" content={content} title="申请清单">
            <span style={{ cursor: 'pointer', textDecorationLine: 'underline', color: '#108ee9' }}>申请{r.application._id}</span>
          </Popover>
        </Timeline.Item>
      );
    } else if (r.status === 1) {
      // 申请被通过
      return (
        <Timeline.Item dot={<Icon type="minus-circle-o" style={{ fontSize: '16px' }} />} color="green" key={r._id} >
          您的<strong>申请{r.application._id}</strong>于&nbsp;{date}&nbsp;被通过了
        </Timeline.Item>
      );
    } else if (r.status === 2) {
      // 申请结束，设备归还
      return (
        <Timeline.Item dot={<Icon type="check-circle-o" style={{ fontSize: '16px' }} />} color="green" key={r._id} >
          您的<strong>申请{r.application._id}</strong>于&nbsp;{date}&nbsp;已结束(设备确认归还)
        </Timeline.Item>
      );
    }
    // 申请未通过
    return (
      <Timeline.Item dot={<Icon type="close-circle-o" style={{ fontSize: '16px' }} />} color="red" key={r._id} >
        您的<strong>申请{r.application._id}</strong>于&nbsp;{date}&nbsp;被拒绝了
      </Timeline.Item>
    );
  });

  return (
    <Timeline style={{ marginTop: 25, height: 'calc(100% - 45px)', overflow: 'auto', paddingLeft: 5, paddingTop: 5 }}>
      {items}
    </Timeline>
  );
};

export default RecordList;
