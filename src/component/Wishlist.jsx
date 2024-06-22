import React, { useState } from 'react';
import "./watch.css";
import Watch from './Watch.jsx';
import Footer from "./Footer.jsx";

function Wishlist({ watchlist, handleRemove }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div id="maingrid">
        {watchlist.length === 0 ? (
          <div id="error">
            <h6>🎬 Ready for movie night? <br /> Add some flicks to your <br /> watchlist!! </h6>
          </div>
        ) : (
          <>
          <div style={{display:'block',width:'100%'}}>
            <input 
              type="search" 
              value={search} 
              onChange={handleSearch} 
              placeholder="Search your watchlist..." 
              style={{width:'20vw', height:`7vh` , margin:'2%',borderRadius:'15px',border:'0.2px solid black',outline:'none',padding:'1%',float:'right'}}
            /></div>
            {watchlist.filter((added) =>
              added.title.toLowerCase().includes(search.toLowerCase())
            ).map((added) => (
              <Watch key={added.id} movie={added} handleRemove={handleRemove} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Wishlist;
