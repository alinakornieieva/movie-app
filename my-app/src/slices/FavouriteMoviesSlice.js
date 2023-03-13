import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteMovies: []
}

const FavouriteMoviesSlice = createSlice({
    name: 'favouriteMovies',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.favouriteMovies.push(action.payload)
        },
        deleteMovie: (state, action) => {
            state.favouriteMovies = state.favouriteMovies.filter((item) => item.id !== action.payload)}
    }
})

const {reducer, actions} = FavouriteMoviesSlice
export default reducer
export const {addMovie, deleteMovie} = actions