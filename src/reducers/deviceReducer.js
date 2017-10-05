import constants from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case constants.GET_DEVICES:
      return action.devices;

    default:
      return state;
  }
};
