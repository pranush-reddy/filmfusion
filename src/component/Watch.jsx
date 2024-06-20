import React from 'react';
import './watch.css';

function Watch({ movie }) {
  return (
   
    <div id="item">
      <div id="poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
      </div>
      <div id="title">
        <h2 id="detail">{movie.original_title}</h2>
        <h3 id="detail">Release : {movie.release_date}</h3><br/>
        <h3 id="detail"><span>⭐</span> {movie.vote_average}</h3>
      </div>
    </div>
   
  );
}

export default Watch;
