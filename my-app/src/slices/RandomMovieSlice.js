import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    randomMovieItem: {},
    loadingStatus: 'idle',
    randomId: ['tt2455388',
        'tt3305678',
        'tt7310108',
        'tt7310110',
        'tt6330122',
        'tt5699182',
        'tt5699782',
        'tt5436782',
        'tt5436702',
        'tt5445702',
        'tt3185792',
        'tt3185756',
        'tt0085756',
        'tt0085716',
        'tt0085016',
        'tt0005016',
        'tt0005026',
        'tt6283728',
        'tt1400554',
        'tt1318406',
        'tt0104431'
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