import constants from '../constants';
import {
  get,
  put,
  post,
} from '../utils';

export default {
  getMembers: () => async (dispatch) => {
    const members = await get('/admin/member');
    dispatch({
      type: constants.GET_MEMBERS,
      members,
    });
  },
  getDevices: () => async (dispatch) => {
    const devices = await get('/admin/device');
    dispatch({
      type: constants.GET_DEVICES,
      devices,
    });
  },
  updateDevices: devices => (dispatch) => {
    dispatch({
      type: constants.UPDATE_DEVICES,
      devices,
    });
  },
  getApplications: () => async (dispatch) => {
    const applications = await get('/admin/application');
    dispatch({
      type: constants.GET_APPLICATIONS,
      applications,
    });
  },
  updateApplication: body => async (dispatch) => {
    const url = '/admin/application';
    const application = await put({
      url,
      body,
    });
    dispatch({
      type: constants.UPDATE_APPLICATION,
      application,
    });
  },
  pushApplication: application => (dispatch) => {
    dispatch({
      type: constants.PUSH_APPLICATION,
      application,
    });
  },
  getReocrds: () => async (dispatch) => {
    const records = await get('/admin/record');
    dispatch({
      type: constants.GET_RECORDS,
      records,
    });
  },
  addRecord: record => (dispatch) => {
    dispatch({
      type: constants.ADD_RECORD,
      record,
    });
  },
  addNotice: body => async (dispatch) => {
    const url = '/admin/record';
    const record = await post({ url, body });
    dispatch({
      type: constants.ADD_RECORD,
      record,
    });
  },
  fixDevices: body => async (dispatch) => {
    const url = '/admin/device';
    const record = await put({ url, body });
    dispatch({
      type: constants.ADD_RECORD,
      record,
    });
  },
  removeRecord: record => (dispatch) => {
    dispatch({
      type: constants.REMOVE_RECORD,
      record,
    });
  },
};
