import React from 'react';

function Maincard({ transition }) {
 
  return (
    <>
    <div id="maintrans">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {transition.slice(0, 4).map((item, index) => (
            <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="4000">
              <img id="cr" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} style={{ width: '20vw', height: '70vh' }} className="d-block w-100" alt={`Slide ${index + 1}`} 
              />
              <h2 id="nocur" style={{marginBottom:'0px',fontSize:'160%',position:'absolute',bottom:'10px',fontFamily:'sans-serif'}} >" {item.original_title} " -  vote {item.vote_average} <span style={{scale:'0'}}>⭐</span> </h2>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </>
  );
}

export default Maincard;
