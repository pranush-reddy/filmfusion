import React from 'react';
import './index.css';

function MovieCard({ movie, watchlist, handleRemove, handleAdd }) {
  function isInWatchlist() {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      id="moviecard"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})` }}
      className="movie-card"
    >
      {isInWatchlist() ? (
         <div id="heart" onClick={() => handleRemove(movie)}>&#9829;</div>
      ) : (
        <div id="heart" onClick={() => handleAdd(movie)}>&#9825;</div>
      )}
      <h2>{movie.original_title}</h2>
    </div>
  );
}

export default MovieCard;
