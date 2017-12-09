import React from 'react';
import loggedUser from '../utils/loggedUser';
import {Redirect} from 'react-router-dom';

export default class MovieList extends React.Component {
  render() {
    if (!loggedUser.getToken()) {
      return <Redirect to="/login"/>
    }
    
    return(
      <article className="Panel">
        <h2 className="Heading2">Favoritos del usuario</h2>
      </article>
    );
  }
}
