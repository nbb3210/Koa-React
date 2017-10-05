import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { memberReducer, deviceReducer, recordReducer, checkedReducer } from '../reducers';

let store;

export default {
  configureStore: () => {
    const reducers = combineReducers({
      member: memberReducer,
      devices: deviceReducer,
      records: recordReducer,
      checkedDevices: checkedReducer,
    });

    store = createStore(
      reducers,
      applyMiddleware(thunk),
    );

    return store;
  },

  currentStore: () => store,
};
