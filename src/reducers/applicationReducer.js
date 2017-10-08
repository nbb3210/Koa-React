/* eslint no-case-declarations: 0 */
import constants from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case constants.GET_APPLICATIONS:
      return action.applications;

    case constants.UPDATE_APPLICATION:
      const index = state.findIndex(a => a._id === action.application._id);
      return [...state.slice(0, index), action.application, ...state.slice(index + 1)];

    case constants.PUSH_APPLICATION:
      return [...state, action.applications];

    case constants.POP_APPLICATION:
      return state.filter(a => a._id !== action.application._id);

    default:
      return state;
  }
};
