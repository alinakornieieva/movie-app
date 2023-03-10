import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    randomMovieItem: {}
}

const RandomMovieSlice = createSlice({
    name: 'randomMovie',
    initialState,
    reducers: {
        randomMovieFetched: (state, action) => {
            state.randomMovieItem = action.payload
        }
    }
})

const {reducer, actions} = RandomMovieSlice
export default reducer
export const {randomMovieFetched} = actions