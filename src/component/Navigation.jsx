import React from "react";
import "./nav.css";
import {Link} from "react-router-dom"
function Navigation() {
  return (
    <nav>
        <div id="start"> 
      <i id="clip" className="fa-solid fa-clapperboard fa-rotate-by fa-2xl" style={{ color: '#ffffff', '--fa-rotate-angle': '-10deg' }}></i>

      <h1 id="ff">filmfusion</h1>
        </div>
      <div id="links"><Link to="/">Movies</Link>
      <Link to="/wishlist">Watchlist</Link></div>
    </nav>
  );
}

export default Navigation;
