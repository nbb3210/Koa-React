import React from 'react';
import { Timeline, Icon, Popover } from 'antd';
import { ApplicationContent } from '../blocks';

const TabRecord = (props) => {
  const { records } = props;
  const items = records.map((r) => {
    const createdAt = new Date(r.createdAt);
    const date = createdAt.toLocaleString();
    if (r.status === 0) {
      // 提交申请
      const content = <ApplicationContent application={r.application} />;
      return (
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} key={r._id} >
          {r.application.member.name}于&nbsp;{date}&nbsp;提交了
          <Popover placement="rightTop" content={content} title="申请清单">
            <span style={{ cursor: 'pointer', textDecorationLine: 'underline', color: '#108ee9' }}>申请{r.application._id}</span>
          </Popover>
        </Timeline.Item>
      );
    } else if (r.status === 1) {
      // 申请被通过
      return (
        <Timeline.Item dot={<Icon type="minus-circle-o" style={{ fontSize: '16px' }} />} color="green" key={r._id} >
          {r.application.member.name}的<strong>申请{r.application._id}</strong>于&nbsp;{date}&nbsp;被
          {r.application.feedback ? <Popover placement="rightTop" content={r.application.feedback} title="管理员回复">
            <span style={{ cursor: 'pointer', textDecorationLine: 'underline', color: '#108ee9' }}> 通过了</span>
          </Popover> : '通过了'}
        </Timeline.Item>
      );
    } else if (r.status === 2) {
      // 申请结束，设备归还
      return (
        <Timeline.Item dot={<Icon type="check-circle-o" style={{ fontSize: '16px' }} />} color="green" key={r._id} >
          {r.application.member.name}的<strong>申请{r.application._id}</strong>于&nbsp;{date}&nbsp;已结束(设备确认归还)
        </Timeline.Item>
      );
    } else if (r.status === 5) {
      // 通知
      return (
        <Timeline.Item key={r._id} >
          {date}&nbsp;发出通知{r.notice}
        </Timeline.Item>
      );
    } else if (r.status === 6) {
      // 进入维修状态
      return (
        <Timeline.Item key={r._id} >
          {date}&nbsp;{r.devices.map(d => <span key={d.createdAt} style={{ marginRight: '1em' }}>{d.type}/{d.name}</span>)}进入维修状态
        </Timeline.Item>
      );
    } else if (r.status === 7) {
      // 解除维修状态
      return (
        <Timeline.Item key={r._id} >
          {date}&nbsp;{r.devices.map(d => <span key={d.createdAt} style={{ marginRight: '1em' }}>{d.type}/{d.name}</span>)}解除维修状态
        </Timeline.Item>
      );
    }
    // 申请未通过
    return (
      <Timeline.Item dot={<Icon type="close-circle-o" style={{ fontSize: '16px' }} />} color="red" key={r._id} >
        {r.application.member.name}的<strong>申请{r.application._id}</strong>于&nbsp;{date}&nbsp;被
        {r.application.feedback ? <Popover placement="rightTop" content={r.application.feedback} title="管理员回复">
          <span style={{ cursor: 'pointer', textDecorationLine: 'underline', color: '#108ee9' }}> 拒绝了</span>
        </Popover> : '通过了'}
      </Timeline.Item>
    );
  });
  return (
    <Timeline style={{ marginTop: 25, height: 'calc(100% - 45px)', overflow: 'auto', paddingLeft: 5, paddingTop: 5 }}>
      {items}
    </Timeline>
  );
};

export default TabRecord;
