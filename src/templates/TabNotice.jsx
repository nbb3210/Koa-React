import React from 'react';
import { Tabs, Input, message } from 'antd';

const { TextArea } = Input;
const { TabPane } = Tabs;

const TabNotice = (props) => {
  const { addNotice } = props;
  const onPressEnter = () => {
    const notice = document.getElementById('notice').value;
    if (!notice) {
      message.warning('请填写通知内容！');
    } else {
      addNotice({
        notice,
        status: 5,
      });
      document.getElementById('notice').value = null;
      message.success('通知发送成功！');
    }
  };
  return (
    <Tabs>
      <TabPane tab="通知" key="10">
        <TextArea
          id="notice"
          placeholder="通知所有人，回车确认发送"
          autosize={{ minRows: 2, maxRows: 6 }}
          onPressEnter={() => onPressEnter()}
        />
      </TabPane>
    </Tabs>
  );
};

export default TabNotice;
