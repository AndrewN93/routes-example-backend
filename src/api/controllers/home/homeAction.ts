import { Context } from 'koa';

export const getHome = (context: Context) => {
  context.response.body = 'Please use POST request method!';
};

export const postHome = (context: Context) => {
  const { username, password } = context.request.body;

  if (username === 'admin' && password === 1) {
    context.response.body = true;
  } else context.response.body = false;
};