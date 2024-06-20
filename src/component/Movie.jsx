import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Maincard from "./Maincard";

function Movie({ watchlist, handleAdd, handleRemove }) {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(1);

  function handleBack() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function handleFront() {
    setCount(count + 1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=056e78fbbf564f6b3a39aa00c202b0dd&language=en-US&page=${count}`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [count]);

  return (
    <>
      <Maincard />
      <h1 id="trend">Trending Movies</h1>
      <div id="card">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie} 
            watchlist={watchlist}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
        ))}
      </div>
      <div id="pagin">
        <i
          id="bckwd"
          className="fa-solid fa-arrow-left fa-xl"
          onClick={handleBack}
        ></i>
        <h3 id="pagecount">{count}</h3>
        <i
          id="frwd"
          className="fa-solid fa-arrow-left fa-flip-horizontal fa-xl"
          onClick={handleFront}
        ></i>
      </div>
    </>
  );
}

export default Movie;
