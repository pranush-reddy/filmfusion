import React from 'react';
import "./index.css";

function MovieCard({ original_title, poster_path }) {
  return (
    <div id="moviecard"  style={{ backgroundImage: `url(${poster_path})`}} className="movie-card">
      <h2>{original_title}</h2>
    </div>
  );
}

export default MovieCard;
