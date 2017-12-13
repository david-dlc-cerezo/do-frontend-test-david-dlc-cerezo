import React from 'react';
import './MovieTile.css';
import AddToFavouritesButton from './AddToFavouritesButton';

export default class MovieTile extends React.Component {
  render() {
    let movie = this.props.movie;
    return(
      <div className="Grid-cell u-md-size1of2 u-lg-size1of3">
        <div className="Movie">
          <h3 className="Heading3 Movie-title">{movie.original_title}</h3>
          <img className="Movie-image u-imgResponsive" src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} alt={movie.original_title} />
          <div className="ButtonSet ButtonSet--right">
            {
              this.props.favourite ?
                <AddToFavouritesButton movie={movie} /> :
                <i className="fas fa-heart" title="En tus favoritos"></i>    
            }
          </div>
          <div className="Movie-text">
            <p className="Movie-overview Text Text--small">{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}
