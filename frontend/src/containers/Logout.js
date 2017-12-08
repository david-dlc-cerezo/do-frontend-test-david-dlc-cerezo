import React from 'react';
import { Redirect } from 'react-router-dom';
import LoggedUser from '../utils/loggedUser';

export default class Logout extends React.Component {
  render() {
    // Clear token and redirect to login
    LoggedUser.clearToken();
    return <Redirect to="/login" />
  }
}
