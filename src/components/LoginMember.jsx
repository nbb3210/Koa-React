import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { LoginWithLink, Register } from '../templates';
import { post } from '../utils';

const handleLogin = async (body) => {
  const url = '/login';
  const res = await post({ body, url });
  if (!res.err) {
    res.success = () => {
      window.location.reload();
    };
  }
  return res;
};

const handleRegister = async (body) => {
  const url = '/register';
  const res = await post({ body, url });
  if (!res.err) {
    res.success = () => {
      window.location.reload();
    };
  }
  return res;
};

const RouteLogin = () => (
  <LoginWithLink {...{ handleLogin }} />
);

const RouteRegister = () => (
  <Register {...{ handleRegister }} />
);

const LoginAdmin = () => (
  <Router>
    <div>
      <Route exact path="/" component={RouteLogin} />
      <Route path="/register" component={RouteRegister} />
    </div>
  </Router>
);

export default LoginAdmin;

