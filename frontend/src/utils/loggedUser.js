const tokenId = 'do-movies-token';

var loggedUser = {
  /**
   * Get logged user token from local storage
   * @return {String} Logged User token
   */
  getToken: () => localStorage.getItem(tokenId),

  /**
   * Set logged user token on local storage
   */
  setToken: (token) => localStorage.setItem(tokenId, token),

  /**
   * Clear logged user token from local storage = Logout
   */
  clearToken: () => localStorage.removeItem(tokenId)
}

export default loggedUser;
