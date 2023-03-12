import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { movieFetched } from "../../slices/SingleMovieSlice"
import { Rating } from "@mui/material"
///change
import '../randomMovie/RandomMovie.css'
import useMovieService from "../../services/MovieService"

const SingleMoviePage = () => {
    const {id} = useParams()
    const {movie} = useSelector((state) => state.singleMovie)
    const dispatch = useDispatch()
    const {getMovie} = useMovieService()
    useEffect(() => {
        getMovie(id)
        .then((data) => {
            dispatch(movieFetched(data))})
    }, [])
    return <div className="Random-movie">
        <img src={movie.poster} alt={movie.title} />
        <div className="info">
            <div className="title">{movie.title}</div>
            <div className="basic">{movie.plot}</div>
            <div className="basic">Director: {movie.director}</div>
            <div className="basic">Actors: {movie.actors}</div>
            <div className="basic">Year: {movie.year}</div>
            <div className="basic">Country: {movie.country}</div>
            <div className="basic">Genre: {movie.genre}</div>
            {movie.rating ? 
            <Rating name="read-only" size="large" value={movie.rating} readOnly /> : null}
        </div>
    </div>
}

export default SingleMoviePage