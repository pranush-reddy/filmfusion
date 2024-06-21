import React from 'react';
import './watch.css';

function Watch({ movie ,handleRemove}) {
  return (
   
    <div id="item">
      <div id="poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
      </div>
      <div id="title">
        
        <div id="unwish" onClick={() => handleRemove(movie)} style={{position:'absolute',color:'rgb(224, 60, 87)',scale:'2',margin:'1% -2%'}}>&#9829;</div>
        <div id="decon"><h2 id="detail">"{movie.original_title}"</h2>
        <h3 id="detail">Release : {movie.release_date}</h3><br/>
        <h3 id="detail"><span>⭐</span> {movie.vote_average}</h3></div>
      </div>
    </div>
   
  );
}

export default Watch;
