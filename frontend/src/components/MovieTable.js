import React from 'react';
import apiManager from '../utils/api';
import AddToFavouritesButton from '../components/AddToFavouritesButton'

export default class MovieTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

  async addToFavourites(movieId){
    apiManager.addToFavourites(movieId)
      .then((response) => {
        console.log(response);
      })
  }

  render(){
    // Load the available movies
    if (!this.state.moviesLoaded){
      this.loadMovies();
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
