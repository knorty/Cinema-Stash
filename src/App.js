import React from 'react';
import axios from 'axios';
import './scss/app.scss';
import SearchResults from './components/SearchResults';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';


class App extends React.Component {
  state = {
    myMovies: [],
    movies: []
  }

  requestMovie = async (movie) => {
    console.log(movie)
    const response = await axios.post('http://localhost:8000/search', { movie });
    console.log(response);
    this.setState({
      movies: response.data.results
    })
  }

  render() {
    const searchResults = this.state.movies.map((movie) => {
      const movieImage = "http://image.tmdb.org/t/p/w185/" + movie.poster_path
      return (
        <SearchResults
          id={movie.id}
          title={movie.title}
          movieImage={movieImage}
          release_date={movie.release_date}
          overview={movie.overview}
        />
      )
    })

    return (
      <div className="app">
        <Header requestMovie={this.requestMovie} />
        <Intro />
        <div className="body">
          {searchResults}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
