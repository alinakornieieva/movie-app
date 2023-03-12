import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './RandomMovie.css'
import { randomMovieErrorFetching, randomMovieFetched, randomMovieFetching } from "../../slices/RandomMovieSlice"
import {Rating} from '@mui/material'
import Preloader from "../preloader/Preloader"
import useMovieService from "../../services/MovieService"

const RandomMovie = () => {
    const dispatch = useDispatch()
    const {getMovie} = useMovieService()
    const {randomMovieItem, loadingStatus, randomId} = useSelector(state => state.randomMovie)
    useEffect(() => {
        updateMovie()
    }, [])
    const updateMovie = () => {
        const id = Math.floor((Math.random() * randomId.length))
        dispatch(randomMovieFetching())
        getMovie(randomId[id])
        .then((data) => {
            if (data === 'error') {
                dispatch(randomMovieFetched('error'))
            } else {
                dispatch(randomMovieFetched(data))
            }
        })
        .catch(() => dispatch(randomMovieErrorFetching()))
    }
    const loader = loadingStatus === 'fetching' ? <Preloader/> : null
    const errorMessage = loadingStatus === 'error' || randomMovieItem === 'error' ? <h5>Error...</h5> : null
    const content = !(loader || errorMessage) ? <View randomMovieItem={randomMovieItem} updateMovie={updateMovie}/> : null
    return  <div>
        {loader}
        {errorMessage}
        {content}
    </div>
}

const View = ({randomMovieItem, updateMovie}) => {
    return <div className="Random-movie">
     <img src={randomMovieItem.poster} alt="random-movie-poster" />
    <div className="info">
        <div className="title">{randomMovieItem.title}</div>
        <div className="basic">{randomMovieItem.plot}</div>
        <div className="basic">Director: {randomMovieItem.director}</div>
        <div className="basic">Actors: {randomMovieItem.actors}</div>
        <div className="basic">Year: {randomMovieItem.year}</div>
        <div className="basic">Country: {randomMovieItem.country}</div>
        <div className="basic">Genre: {randomMovieItem.genre}</div>
        {randomMovieItem.rating ? 
        <Rating name="read-only" size="large" value={randomMovieItem.rating} readOnly /> : null}
        <div>
            <button onClick={updateMovie}>Show another</button>
        </div>
    </div>
</div>
} 

export default RandomMovie