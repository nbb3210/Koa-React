import React from 'react';
import ReactDOM from 'react-dom';
import openSocket from 'socket.io-client';
import { Provider } from 'react-redux';
import store from '../stores/memberStore';
import Member from '../components/Member';

window.socket = openSocket(`http://${HOST}`);

ReactDOM.render(
  <Provider store={store.configureStore()}>
    <Member />
  </Provider>,
  document.getElementById('app'),
);
