import React from 'react'
import ReactDOM from 'react-dom/client'
import Movie from './component/Movie.jsx'
import "./component/nav.css"
import './component/index.css'
import Navigation from './component/Navigation.jsx'
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Wishlist from './component/Wishlist.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

    <Navigation/>

  <Routes>
    <Route path='/' element={<Movie/>}/>
    <Route path='/Wishlist' element={<Wishlist/>}/>
    
    </Routes>

    </BrowserRouter>

  </React.StrictMode>,
)
