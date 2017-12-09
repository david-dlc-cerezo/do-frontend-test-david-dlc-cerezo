import React from 'react';
import apiManager from '../utils/api';

export default class addToFavouritesButton extends React.Component {

  /**
   * [addToFavourites description]
   * @param  {Movie}  movieId [description]
   * @return {Promise}         [description]
   */
  async addToFavourites(movie){
    return apiManager.addToFavourites(this.props.movie.id)
      .then((response) => {
        console.log(response);
      })
  }

  render(){
    return (
      <button className="Button Button--link" onClick={() => this.addToFavourites()}>
        <span className="fa-layers fa-fw" title="Añadir a favoritos">
          <i className="far fa-heart"></i>
          <i className="fas fa-circle" data-fa-transform="shrink-5 down-4 right-7"></i>
          <i className="fas fa-plus fa-inverse" data-fa-transform="shrink-7 down-4 right-7"></i>
        </span>
      </button>
    );
  }
}
