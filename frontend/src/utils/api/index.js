import request from './request';
import buildUrl, { types } from './endpoints';

/**
 * Utils function to generate the secure headers given the authorization token
 * @param  {string} token             - Token that authorize the petitions
 * @return {Object}                   - Object that contain the secure headers information
 * @property {?string} Authorization  - Header authorization
 */
export function generateSecureHeader(token) {
  if (!token) {
    return {};
  }

  return {
    Authorization: `Bearer ${token}`,
  };
}

/**
 * Try to login into the application
 * @param username    - Username from the user
 * @param password    - Password from the user
 * @returns {Promise<Object>}
 * @property {string} data.message   - status of response
 * @property {?string} data.token    - jwt token of request
 */
export function postLogin(username, password) {
  const url = buildUrl(types.LOGIN);
  return request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ username, password }),
  });
}