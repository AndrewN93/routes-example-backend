import { getHome, postHome } from './homeAction';

export const homeActions = [
  {
    path: '/api/home',
    method: 'get',
    action: getHome,
  },
  {
    path: '/api/home',
    method: 'post',
    action: postHome,
  },
];