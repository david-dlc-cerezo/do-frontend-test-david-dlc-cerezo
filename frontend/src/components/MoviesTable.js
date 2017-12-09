import React from 'react';
import apiManager from '../utils/api';
import AddToFavouritesButton from '../components/AddToFavouritesButton';
import Loading from './Loading';
import Notification from './Notification';

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

  async loadMovies() {
    apiManager.getMovies()
      .then((response) => {
          this.setState({
              moviesLoaded: true,
              movies: response.data.movies
          });
      });
  }

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

  async addToFavourites(movieId){
    return apiManager.addToFavourites(movieId)
      .then((response) => {
        console.log(response);
      });
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
      <table className="Table">
        <thead>
          <tr>
            <th>Título original</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.movies.map((item) => {
              return (
                <tr key={item.id}>
                  <td data-th="Título original">
                    <a className="Link" href={'/movie/' + item.id}>{item.original_title}</a>
                  </td>
                  <td>
                    <AddToFavouritesButton movie={item} />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}
