import React from 'react';
import './App.css';
import Header from './features/header/Header';
import RandomMovie from './features/randomMovie/RandomMovie';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SearchMovie from './features/searchMovie/SearchMovie';
import FavouriteMovies from './features/favouriteMovies/FavouriteMovies';
import SingleMoviePage from './features/singleMoviePage/SingleMoviePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<RandomMovie/>}/>
          <Route path='/movie-search' element={<SearchMovie/>}/>
          <Route path='/movie-search/:id' element={<SingleMoviePage/>}/>
          <Route path='/favourite-movies' element={<FavouriteMovies/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
