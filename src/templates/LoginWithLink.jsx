import React from 'react';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';
import { Login } from '../templates';

const content = <a style={{ color: 'rgba(0, 0, 0, 0.85)' }} href="Mailto:nbb3210@gmail.com">给我发邮件</a>;
const before = <Popover content={content} trigger="click"><a>Forgot password</a></Popover>;
const after = <span>Or <Link to="/register">Register now!</Link></span>;

const LoginWithLink = ({ handleLogin }) => (
  <Login {...{ before, after, handleLogin }} />
);

export default LoginWithLink;
