import constants from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case constants.GET_MEMBER:
      return action.member;

    case constants.GET_MEMBERS:
      return action.members;

    default:
      return state;
  }
};
