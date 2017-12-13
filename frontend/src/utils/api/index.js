import request from './request';
import buildUrl, { types } from './endpoints';
import loggedUser from '../loggedUser';

/**
 * Add a movie to user favourites
 */
function addToFavourites(movieId){
  const url = buildUrl(types.ADD_FAVORITES);
  return request(url, {
    method: 'POST',
    headers: generateSecureHeader(),
    body: JSON.stringify({ movieDBId: movieId })
  });
}

/**
 * Utils function to generate the secure headers given the authorization token
 * @param  {string} token             - Token that authorize the petitions
 * @return {Object}                   - Object that contain the secure headers information
 * @property {?string} Authorization  - Header authorization
 */
export function generateSecureHeader() {

  /**
   * Token that authorize the petitions
   * @type {string}
   */
  const token = loggedUser.getToken();

  if (!token) {
    return {};
  }

  return {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer ${token}`,
  };
}

/**
 * Create a user into the application
 * @param username    - Username from the user
 * @param password    - Password from the user
 * @returns {Promise<Object>}
 * @property {string} data.message   - status of response
 * @property {?string} data.token    - jwt token of request
 */
function createUser(username, password){
  const url = buildUrl(types.CREATE_USER);
  return request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ username, password }),
  });
}

/**
 * Get users favourites movie list from the server
 * @return {Promise<Object>}
 */
function getFavourites(){
  const url = buildUrl(types.FAVORITES);
  return request(url, {
    method: 'GET',
    headers: generateSecureHeader()
  });
}

/**
 * Get movie list from the server
 * @return {Promise<Object>}
 */
function getMovies(){
  const url = buildUrl(types.MOVIES);
  return request(url, {
    method: 'GET',
    headers: generateSecureHeader()
  });
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


/**
 * Object that groups API operations
 * @type {Object}
 */
var apiManager = {
  addToFavourites: addToFavourites,

  createUser: createUser,

  generateSecureHeader: generateSecureHeader,

  getFavourites: getFavourites,

  getMovies: getMovies,

  postLogin: postLogin,
}

export default apiManager;
