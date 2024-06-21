import React, { useEffect, useState } from 'react';
import './nav.css';
import './index.css';
import Navigation from './Navigation.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wishlist from './Wishlist.jsx';
import Movie from "./Movie.jsx"

function App() {
    let [watchlist, setWatchlist] = useState([]);

    let handleAdd = (newob) => {
        let newList = [...watchlist, newob];
        setWatchlist(newList);
    };

    let handleRemove = (obj) => {
        let filtered = watchlist.filter((movie) => {
            return movie.id !== obj.id;
        });
        setWatchlist(filtered);
    };
    useEffect(()=>{
         console.log(watchlist)
    },[watchlist])

    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route
                        path='/'
                        element={<Movie handleAdd={handleAdd} handleRemove={handleRemove} watchlist={watchlist} />}
                    />
                    <Route path='/Wishlist' element={<Wishlist watchlist={watchlist} handleRemove={handleRemove} />} />
                </Routes>
            </BrowserRouter>
           
        </>
    );
}

export default App;
