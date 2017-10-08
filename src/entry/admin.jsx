import React from 'react';
import ReactDOM from 'react-dom';
import openSocket from 'socket.io-client';
import { Provider } from 'react-redux';
import store from '../stores/adminStore';
import Admin from '../components/Admin';

window.socket = openSocket(`http://${HOST}`);

ReactDOM.render(
  <Provider store={store.configureStore()}>
    <Admin />
  </Provider>,
  document.getElementById('app'),
);
