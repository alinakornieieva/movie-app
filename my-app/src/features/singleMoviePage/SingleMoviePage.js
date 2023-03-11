import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import useHttp from "../../hooks/http.hook"
import { movieFetched } from "../../slices/SingleMovieSlice"
import { Rating } from "@mui/material"
///change
import '../randomMovie/RandomMovie.css'

const SingleMoviePage = () => {
    const {id} = useParams()
    const {movie} = useSelector((state) => state.singleMovie)
    const {request} = useHttp()
    const dispatch = useDispatch()
    useEffect(() => {
        request(`https://www.omdbapi.com/?i=${id}&apikey=a5d79ee3`)
            .then((data) => dispatch(movieFetched(data)))
    }, [])
    return <div className="Random-movie">
        <img src={movie.Poster} alt="random-movie-poster" />
        <div className="info">
            <div className="title">{movie.Title}</div>
            <div className="basic">{movie.Plot}</div>
            <div className="basic">Director: {movie.Director}</div>
            <div className="basic">Actors: {movie.Actors}</div>
            <div className="basic">Year: {movie.Year}</div>
            <div className="basic">Country: {movie.Country}</div>
            <div className="basic">Genre: {movie.Genre}</div>
            <Rating name="read-only" size="large" value={+(movie.imdbRating)/2} readOnly />
        </div>
    </div>
}

export default SingleMoviePage