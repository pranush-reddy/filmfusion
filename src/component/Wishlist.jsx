import React from 'react';
import "./watch.css";
import Watch from './Watch.jsx';

function Wishlist({ watchlist }) {
  return (
    <div id="maingrid">
      
      {watchlist.length==0 ? <div id="error"><h6>🎬Ready for movie night? <br/>Add some flicks to your <br/>watchlist!! </h6></div> :watchlist.map((added) => (
        <Watch key={added.id} movie={added} />
      ))}
    </div>
  );
}

export default Wishlist;
