import constants from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case constants.GET_RECORDS:
      return action.records;

    case constants.ADD_RECORD:
      return [action.record, ...state];

    case constants.REMOVE_RECORD:
      return state.filter(r => r._id !== action.record._id);

    default:
      return state;
  }
};
