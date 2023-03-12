import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: {},
    loadingStatus: 'idle'
}

const SingleMovieSlice = createSlice({
    name: 'singleMovie',
    initialState,
    reducers: {
        movieFetching: (state) => {state.loadingStatus = 'fetching'},
        movieFetched: (state, action) => {
            state.movie = action.payload
            state.loadingStatus = 'idle'
        },
        movieErrorFetching: (state) => {state.loadingStatus = 'error'}
    }
})

const {reducer, actions} = SingleMovieSlice
export default reducer
export const {movieFetching, movieFetched, movieErrorFetching} = actions