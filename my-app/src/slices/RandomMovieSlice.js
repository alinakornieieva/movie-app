import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    randomMovieItem: {},
    loadingStatus: 'idle',
    randomId: ['2455388',
        '3305678',
        '7310108',
        '7310110',
        '6330122',
        '5699182',
        '5699782',
        '5436782',
        '5436702',
        '5445702',
        '3185792',
        '3185756',
        '0085756',
        '0085716',
        '0085016',
        '0005016',
        '0005026',
        '6283728',
        '1400554',
        '1318406',
        '0104431'
        ]
}

const RandomMovieSlice = createSlice({
    name: 'randomMovie',
    initialState,
    reducers: {
        randomMovieFetching: (state) => {state.loadingStatus = 'fetching'},
        randomMovieFetched: (state, action) => {
            state.randomMovieItem = action.payload
            state.loadingStatus = 'idle'
        },
        randomMovieErrorFetching: (state) => {state.loadingStatus = 'error'}
    }
})

const {reducer, actions} = RandomMovieSlice
export default reducer
export const {randomMovieFetching, randomMovieFetched, randomMovieErrorFetching} = actions