import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from '../actions/memberAction';
import { CardM } from '../templates';
import { post, del } from '../utils';

class Member extends Component {
  componentDidMount() {
    this.props.getMember();
    this.props.getDevices();
    this.props.getRecords();

    // 设备变化
    window.socket.on('UPDATE_DEVICES', (devices) => {
      this.props.updateDevices(devices);
    });
    // 接受处理结果
    window.socket.on('ADD_RECORD', (record) => {
      this.props.addRecord(record);
    });
  }

  handleApplication = async (member, devices, days, reason) => {
    const url = '/record';
    const body = {
      member,
      devices,
      days,
      reason,
    };
    const record = await post({ body, url });
    this.props.addRecord(record);
    this.props.uncheckAllDevices();
  }

  recallApplication = async (applicationId) => {
    const url = `/record/${applicationId}`;
    const res = await del(url);
    if (!res.err) {
      this.props.removeRecord(res);
    }
    return res;
  }

  render() {
    const { handleApplication, recallApplication } = this;
    return (
      <CardM {...this.props} {...{ handleApplication, recallApplication }} />
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  getMember: () =>
    dispatch(action.getMember()),
  getDevices: () =>
    dispatch(action.getDevices()),
  updateDevices: devices =>
    dispatch(action.updateDevices(devices)),
  getRecords: () =>
    dispatch(action.getReocrds()),
  addRecord: r =>
    dispatch(action.addRecord(r)),
  removeRecord: r =>
    dispatch(action.removeRecord(r)),
  checkDevice: d =>
    dispatch(action.checkDevice(d)),
  uncheckDevice: d =>
    dispatch(action.uncheckDevice(d)),
  uncheckAllDevices: () =>
    dispatch(action.uncheckAllDevices()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Member);
