import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: {}
}

const SingleMovieSlice = createSlice({
    name: 'singleMovie',
    initialState,
    reducers: {
        movieFetched: (state, action) => {
            state.movie = action.payload
        }
    }
})

const {reducer, actions} = SingleMovieSlice
export default reducer
export const {movieFetched} = actions