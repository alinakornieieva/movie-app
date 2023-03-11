import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    term: '',
    moviesList: null
}

const SearchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState,
    reducers: {
        moviesFetched: (state, action) => {
            state.moviesList = action.payload
        },
        termRecieve: (state, action) => {
            state.term = action.payload
        }
    }
})

const {reducer, actions} = SearchMovieSlice
export default reducer
export const {moviesFetched, termRecieve} = actions