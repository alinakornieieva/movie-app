import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    randomMovieItem: {},
    loadingStatus: 'idle',
    randomId: ['tt2455388', 'tt2392326', 'tt2203939', 'tt2171867', 'tt10648342', 'tt0272338',
        'tt5699182', 'tt0110989', 'tt1414382',
        'tt5436782',
        'tt5436702',
        'tt3185792',
        'tt0085756',
        'tt0085716',
        'tt0085016',
        'tt0005016',
        'tt0005026',
        'tt1400554',
        'tt1318406',
        'tt0104431',
        'tt0099785',
        "tt10872600",
        "tt6320628",
        "tt6821012",
        'tt2372162',
        'tt5791098'
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