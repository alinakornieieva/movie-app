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
        updateMovie()
    }, [])
    const updateMovie = () => {
        const id = String(Math.floor(Math.random() * (9999999 - 0o000000) + 0o000000))
        console.log(id)
        request(`https://www.omdbapi.com/?i=tt${id}&apikey=a5d79ee3`)
        .then((data) => {
            if (data.Error) {
                console.log(data)
            } else {
                dispatch(randomMovieFetched(data))
            }
        })
    }
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
                <button onClick={updateMovie}>Show another</button>
            </div>
        </div>
    </div>
}

export default RandomMovie