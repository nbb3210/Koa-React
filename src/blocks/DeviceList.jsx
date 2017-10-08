import React from 'react';
import { Tag } from 'antd';

const DeviceList = (props) => {
  const { devices, style, checkedDevices, checkDevice, uncheckDevice } = props;
  const items = [...new Set(devices.sort((a, b) => a.order - b.order).map(d => d.type))]
    .map((t) => {
      const tags = devices.filter(d => d.type === t)
        .map((tag) => {
          if (tag.status === 1) {
            // 设备外借中
            return (
              <Tag color="red" key={tag._id}>{tag.name}</Tag>
            );
          } else if (tag.status === 2) {
            // 设备维修中
            return (
              <Tag key={tag._id}>{tag.name}</Tag>
            );
          }
          // 设备可借
          if (props.admin) {
            return (
              <Tag color="green" key={tag._id}>{tag.name}</Tag>
            );
          }
          return (
            <Tag.CheckableTag
              key={tag._id}
              checked={checkedDevices.indexOf(tag) > -1}
              onChange={checked => (checked ? checkDevice(tag) : uncheckDevice(tag))}
            >
              {tag.name}
            </Tag.CheckableTag>
          );
        });

      return (
        <div style={{ marginBottom: 10 }} key={t}>
          <strong style={{ marginRight: 10 }}>{t}:</strong>
          {tags}
        </div>
      );
    });
  return (
    <div style={style}>{items}</div>
  );
};

export default DeviceList;
