import { configureStore } from '@reduxjs/toolkit';
import randomMovie from '../slices/RandomMovieSlice'
import searchMovie from '../slices/SearchMovieSlice'
import singleMovie from '../slices/SingleMovieSlice'
import favouriteMovies from '../slices/FavouriteMoviesSlice'

export const store = configureStore({
  reducer: {randomMovie, searchMovie, singleMovie, favouriteMovies}
});
