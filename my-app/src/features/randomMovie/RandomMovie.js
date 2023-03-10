import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './RandomMovie.css'
import useHttp from "../../hooks/http.hook"
import { randomMovieFetched } from "../../slices/RandomMovieSlice"
import {Rating} from '@mui/material'


const RandomMovie = () => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const {randomMovieItem} = useSelector(state => state.randomMovie)
    useEffect(() => {
        request('https://www.omdbapi.com/?i=tt3896198&apikey=a5d79ee3')
        .then(data => dispatch(randomMovieFetched(data)))
    })
    return <div className="Random-movie">
        <img src={randomMovieItem.Poster} alt="random-movie-poster" />
        <div>
            <div>{randomMovieItem.Title}</div>
            <div>{randomMovieItem.Plot}</div>
            <div>Director: {randomMovieItem.Director}</div>
            <div>Actors: {randomMovieItem.Actors}</div>
            <div>Year: {randomMovieItem.Year}</div>
            <div>Country: {randomMovieItem.Country}</div>
            <div>Genre: {randomMovieItem.Genre}</div>
            <Rating name="read-only" value={+(randomMovieItem.imdbRating)/2} readOnly />
        </div>
    </div>
}

export default RandomMovie