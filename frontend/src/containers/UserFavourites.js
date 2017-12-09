import React from 'react';
import loggedUser from '../utils/loggedUser';
import {Redirect} from 'react-router-dom';
import MoviesTable from '../components/MoviesTable';

export default class Favourites extends React.Component {
  render() {
    if (!loggedUser.getToken()) {
      return <Redirect to="/login"/>
    }

    return(
      <article className="Panel">
        <h2 className="Heading2">Favoritos del usuario</h2>
        <MoviesTable favouritesOnly="true" />
      </article>
    );
  }
}
