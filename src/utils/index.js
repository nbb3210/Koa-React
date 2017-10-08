/* eslint no-return-await: 0 */
const post = async ({
  body,
  url,
}) => await (await fetch(url, {
  method: 'post',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
  credentials: 'include',
})).json();

const get = async url => await (await fetch(url, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
  credentials: 'include',
})).json();

const del = async url => await (await fetch(url, {
  method: 'delete',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
  credentials: 'include',
})).json();

const put = async ({
  body,
  url,
}) => await (await fetch(url, {
  method: 'put',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
  credentials: 'include',
})).json();


export {
  post,
  get,
  del,
  put,
};
