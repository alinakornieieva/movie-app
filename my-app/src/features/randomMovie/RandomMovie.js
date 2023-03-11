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
    }, [])
    return <div className="Random-movie">
        <img src={randomMovieItem.Poster} alt="random-movie-poster" />
        <div className="info">
            <div className="title">{randomMovieItem.Title}</div>
            <div className="basic">{randomMovieItem.Plot}</div>
            <div className="basic">Director: {randomMovieItem.Director}</div>
            <div className="basic">Actors: {randomMovieItem.Actors}</div>
            <div className="basic">Year: {randomMovieItem.Year}</div>
            <div className="basic">Country: {randomMovieItem.Country}</div>
            <div className="basic">Genre: {randomMovieItem.Genre}</div>
            <Rating name="read-only" size="large" value={+(randomMovieItem.imdbRating)/2} readOnly />
            <div>
                <button>Show another</button>
            </div>
        </div>
    </div>
}

export default RandomMovie