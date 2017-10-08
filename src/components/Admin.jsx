import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from '../actions/adminAction';
import { TabA } from '../templates';

function notifyMe() {
  // 先检查浏览器是否支持
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  }

  // 检查用户是否同意接受通知
  else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    const notification = new Notification('您有新的申请待处理！');
  }

  // 否则我们需要向用户获取权限
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission((permission) => {
      // 如果用户同意，就可以向他们发送通知
      if (permission === 'granted') {
        const notification = new Notification('您有新的申请待处理！');
      }
    });
  }
}

class Admin extends Component {
  componentDidMount() {
    this.props.getDevices();
    this.props.getApplications();
    // 按需加载
    this.props.getMembers();
    this.props.getRecords();

    window.socket.emit('adminOnline');
    // 设备变化
    window.socket.on('UPDATE_DEVICES', (devices) => {
      this.props.updateDevices(devices);
    });
    // 成员提出申请
    window.socket.on('PUSH_APPLICATION', (application) => {
      this.props.pushApplication(application);
      notifyMe();
    });
    // 成员撤回申请
    window.socket.on('POP_APPLICATION', (application) => {
      this.props.popApplication(application);
    });
    window.socket.on('REMOVE_RECORD', (record) => {
      this.props.removeRecord(record);
    });
    // 日志变化
    window.socket.on('ADD_RECORD', (record) => {
      this.props.addRecord(record);
    });
  }

  render() {
    return (
      <TabA {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  getMembers: () =>
    dispatch(action.getMembers()),
  getDevices: () =>
    dispatch(action.getDevices()),
  updateDevices: devices =>
    dispatch(action.updateDevices(devices)),
  getApplications: () =>
    dispatch(action.getApplications()),
  updateApplication: body =>
    dispatch(action.updateApplication(body)),
  pushApplication: application =>
    dispatch(action.pushApplication(application)),
  popApplication: application =>
    dispatch(action.popApplication(application)),
  getRecords: () =>
    dispatch(action.getReocrds()),
  addRecord: r =>
    dispatch(action.addRecord(r)),
  removeRecord: r =>
    dispatch(action.removeRecord(r)),
  addNotice: n =>
    dispatch(action.addNotice(n)),
  fixDevices: ds =>
    dispatch(action.fixDevices(ds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
