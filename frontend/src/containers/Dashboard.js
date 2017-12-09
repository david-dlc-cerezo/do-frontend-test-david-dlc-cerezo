import React from 'react';
import {Redirect} from 'react-router-dom';
import loggedUser from '../utils/loggedUser';

export default class Dashboard extends React.Component {
  /**
   * Navigate to favourites
   */
  goToFavourites() {
    this.props.history.push('/favourites');
  }

  /**
   * Navigate to Movie list
   */
  goToMovieList() {
    this.props.history.push('/movies');
  }

  render() {
    if (!loggedUser.getToken()) {
      return <Redirect to="/login"/>
    }

    return (
      <section className="Panel">
        <div className="Grid Grid--alignCenter">
          <div className="Grid-cell u-md-size1of1">
            <h2 className="Heading2">Dashboard</h2>
          </div>
        </div>
        <div className="sg-spacer"></div>
        <div className="Grid Grid--withGutter Grid--alignCenter">
          <div className="Grid-cell u-md-size1of2">
            <button className="Button Button--large Button--block" type="button" onClick={() => this.goToMovieList()} >
              <i className="fas fa-film"></i> <br/>
              Descubre películas
            </button>
          </div>
          <div className="Grid-cell u-md-size1of2">
            <button className="Button Button--large Button--block Button--primary" type="button" onClick={() => this.goToFavourites()}>
              <i className="far fa-heart"></i> <br/>
              Tus favoritos
            </button>
          </div>
        </div>
      </section>
    );
  }
}
