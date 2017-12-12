import React from 'react';
import apiManager from '../utils/api';
import Loading from './Loading';
import Notification from './Notification';
import MovieTile from './MovieTile';

/**
 * Suffle the items in the input array
 * @param  {Array} array Original array
 * @return {Array}       Shuffled array
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export default class MoviesTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favouritesLoaded: false,
      favourites: [],
      moviesLoaded: false,
      movies: []
    };
  }

  /**
   * Load a movie list with all the available movies
   * @return {Promise}
   */
  async loadMovies() {
    apiManager.getMovies()
      .then((response) => {
        this.setState({
            moviesLoaded: true,
            movies: shuffleArray(response.data.movies)
        });
      });
  }

  /**
   * Load the user favourite movie list
   * @return {Promise}
   */
  async loadFavourites() {
    return apiManager.getFavourites()
      .then((response) => {
        this.setState({
          favouritesLoaded: true,
          favourites: response.data.movies,
          movies: this.props.favouritesOnly ? response.data.movies : this.state.movies
        });
      });
  }

  /**
   * Is the movie one of the user favourites?
   * @param  {Movie}  movie Movie to search
   * @return {Boolean}      TRUE = yes, FALSE = no
   */
  isInFavourites(movie){
    this.state.favourites.find( (item) => (movie === item) );
  }

  render(){
    // Lo
    if (!this.state.favouritesLoaded){
      this.loadFavourites();
    }
    // Load the available movies
    if (!this.state.moviesLoaded && !this.props.favouritesOnly){
      this.loadMovies();
    }

    // Show loading data animation
    if (!this.state.favouritesLoaded || (!this.state.moviesLoaded && !this.props.favouritesOnly)) {
      return (
        <Loading />
      );
    }

    // Show no favorites notification
    if (this.state.favouritesLoaded && !this.state.lenght && this.props.favouritesOnly){
      let htmlText = {
        __html: "Descubre peliculas <a class='Link' href='/movies'>aquí</a>"
      };

      return (
        <Notification type="warning" heading="No tienes favoritos" text={htmlText} icon="true" />
      )
    }

    return (
      <section className="Panel">
        <div className="Grid Grid--equalHeight Grid--withGutter">
          {
            this.state.movies.map((item) => {
              if(!this.isInFavourites(item)){
                return (
                  <MovieTile movie={item} key={item.id} />
                );
              } else {
                return '';
              }
            })
          }
        </div>
      </section>
    );
  }
}
