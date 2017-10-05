import constants from '../constants';
import { post, get, del } from '../utils';

export default {
  getMember: () => async (dispatch) => {
    const member = await get('/member');
    dispatch({
      type: constants.GET_MEMBER,
      member,
    });
  },
  getDevices: () => async (dispatch) => {
    const devices = await get('/device');
    dispatch({
      type: constants.GET_DEVICES,
      devices,
    });
  },
  getReocrds: () => async (dispatch) => {
    const records = await get('/record');
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
  removeRecord: record => (dispatch) => {
    dispatch({
      type: constants.REMOVE_RECORD,
      record,
    });
  },
  checkDevice: device => (dispatch) => {
    dispatch({
      type: constants.CHECK_DEVICE,
      device,
    });
  },
  uncheckDevice: device => (dispatch) => {
    dispatch({
      type: constants.UNCHECK_DEVICE,
      device,
    });
  },
  uncheckAllDevices: () => (dispatch) => {
    dispatch({
      type: constants.UNCHECK_ALL_DEVICES,
    });
  },
};
