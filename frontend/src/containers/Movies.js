import React from 'react';
import MoviesTable from '../components/MoviesTable';
import loggedUser from '../utils/loggedUser';
import {Redirect} from 'react-router-dom';

export default class Movies extends React.Component {
  render() {
    if (!loggedUser.getToken()) {
      return <Redirect to="/login"/>
    }

    return(
      <article className="Panel">
        <h2 className="Heading2">Lista de peliculas</h2>
        <MoviesTable />
      </article>
    );
  }
}
