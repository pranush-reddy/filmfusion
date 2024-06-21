import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Maincard from "./Maincard";
import Footer from "./Footer";

function Movie({ watchlist, handleAdd, handleRemove }) {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(1);
  const [transition,setTransition]=useState([])
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
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=056e78fbbf564f6b3a39aa00c202b0dd&include_adult=false&include_video=false&language=en-US&page=${count}&sort_by=popularity.desc`
      )
      .then((res) => {
        const results = res.data.results;
        const randomMovies = [];
        while (randomMovies.length < 6) {
          const randomIndex = Math.floor(Math.random() * results.length);
          const randomMovie = results[randomIndex];
          if (!randomMovies.some(movie => movie.id === randomMovie.id)) {
            randomMovies.push(randomMovie);
          }
        }
  
        setTransition(randomMovies);
      })
      .catch((error) => {
        console.error("Error fetching random movies:", error);
      });
  }, [count]);
  
  
  

  

  return (
    <>
      <Maincard transition={transition}/>
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
