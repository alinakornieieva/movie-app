import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { movieErrorFetching, movieFetched, movieFetching } from "../../slices/SingleMovieSlice"
import { Rating } from "@mui/material"
import Preloader from "../preloader/Preloader"
///change
import '../randomMovie/RandomMovie.css'
///
import './SingleMovie.css'
import useMovieService from "../../services/MovieService"

const SingleMoviePage = () => {
    const {id} = useParams()
    const {movie, loadingStatus} = useSelector((state) => state.singleMovie)
    const dispatch = useDispatch()
    const {getMovie} = useMovieService()
    useEffect(() => {
        dispatch(movieFetching())
        getMovie(id)
        .then((data) => dispatch(movieFetched(data)))
        .catch(() => dispatch(movieErrorFetching()))
    }, [])
    const loader = loadingStatus === 'fetching' ? <Preloader/> : null
    const errorMessage = loadingStatus === 'error' ? <h5>Error...</h5> : null
    const content = !(loader || errorMessage) ? <View movie={movie}/> : null
    return <>
        {loader}
        {errorMessage}
        {content}
    </>
}

const View = ({movie}) => {
    return <div className="Random-movie Single-movie">
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
        <div>
            <NavLink to='/movie-search'><button>Back to search page</button></NavLink> 
        </div>
    </div>
</div>
}

export default SingleMoviePage