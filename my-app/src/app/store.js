import { configureStore } from '@reduxjs/toolkit';
import randomMovie from '../slices/RandomMovieSlice'

export const store = configureStore({
  reducer: {randomMovie},
});
