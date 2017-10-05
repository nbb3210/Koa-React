import React from 'react';
import { Login } from '../templates';
import { post } from '../utils';

const handleLogin = async (body) => {
  const url = '/admin/login';
  const res = await post({ body, url });
  if (!res.err) {
    res.success = () => {
      window.location.reload();
    };
  }
  return res;
};

const LoginAdmin = () => (
  <Login {...{ handleLogin }} />
);

export default LoginAdmin;

