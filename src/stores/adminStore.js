import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { memberReducer, deviceReducer, recordReducer, applicationReducer } from '../reducers';

let store;

export default {
  configureStore: () => {
    const reducers = combineReducers({
      devices: deviceReducer,
      applications: applicationReducer,
      members: memberReducer,
      records: recordReducer,
    });

    store = createStore(
      reducers,
      applyMiddleware(thunk),
    );

    return store;
  },

  currentStore: () => store,
};
