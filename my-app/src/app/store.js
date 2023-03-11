import { configureStore } from '@reduxjs/toolkit';
import randomMovie from '../slices/RandomMovieSlice'
import searchMovie from '../slices/SearchMovieSlice'

export const store = configureStore({
  reducer: {randomMovie, searchMovie}

});
