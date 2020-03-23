import React, { useState, useEffect } from 'react';

import MovieCard from './MovieCard';

import axios from 'axios';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

  const handleClick = id => {
    props.history.push(`/movies/${id}`);
  }
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard handleClick={handleClick} key={movie.id} movie={movie} addToSavedList={props.addToSavedList} />
      ))}
    </div>
  );
}

export default MovieList;
