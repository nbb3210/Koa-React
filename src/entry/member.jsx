import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../stores/memberStore';
import Member from '../components/Member';

ReactDOM.render(
  <Provider store={store.configureStore()}>
    <Member />
  </Provider>,
  document.getElementById('app'),
);
