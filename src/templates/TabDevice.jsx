import React, { Component } from 'react';
import { Transfer } from 'antd';

class TabDevice extends Component {
  state = {
    targetKeys: this.props.devices.map((d) => {
      const s = Object.assign({}, d);
      s.key = d._id;
      return s;
    }).filter(s => s.status === 2).map(s => s.key),
    selectedKeys: [],
  }

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });
    this.props.fixDevices({
      moveKeys,
      direction,
    });
  }
  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
  }
  render() {
    const dataSource = this.props.devices.filter(s => s.status !== 1)
      .map((d) => {
        const s = Object.assign({}, d);
        s.key = d._id;
        return s;
      });
    return (
      <Transfer
        dataSource={dataSource}
        titles={['可借设备', '维修设备']}
        targetKeys={this.state.targetKeys}
        selectedKeys={this.state.selectedKeys}
        onChange={this.handleChange}
        onSelectChange={this.handleSelectChange}
        render={d => `${d.name}(${d.type})`}
        listStyle={{
          width: 400,
          height: 300,
        }}
      />
    );
  }
}

export default TabDevice;
