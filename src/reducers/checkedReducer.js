import constants from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case constants.CHECK_DEVICE:
      return [...state, action.device];

    case constants.UNCHECK_DEVICE:
      return state.filter(d => d !== action.device);

    case constants.UNCHECK_ALL_DEVICES:
      return [];

    default:
      return state;
  }
};
