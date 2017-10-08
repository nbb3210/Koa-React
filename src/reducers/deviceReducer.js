/* eslint no-case-declarations: 0 */
import constants from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case constants.GET_DEVICES:
      return action.devices;

    case constants.UPDATE_DEVICES:
      let newState = [...state];
      const { devices } = action;
      for (const d of devices) {
        const index = state.findIndex(a => a._id === d._id);
        newState = [...newState.slice(0, index), d, ...newState.slice(index + 1)];
      }
      return newState;

    default:
      return state;
  }
};
