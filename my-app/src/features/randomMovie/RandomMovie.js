import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './RandomMovie.css'
import useHttp from "../../hooks/http.hook"
import { randomMovieErrorFetching, randomMovieFetched, randomMovieFetching } from "../../slices/RandomMovieSlice"
import {Rating} from '@mui/material'
import ImgNotFound from './img-not-found.jpg'
import Preloader from "../preloader/Preloader"

const RandomMovie = () => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const {randomMovieItem, loadingStatus, randomId} = useSelector(state => state.randomMovie)
    useEffect(() => {
        updateMovie()
    }, [])
    const updateMovie = () => {
        // const id = String(Math.floor(Math.random() * (8999999 - 1000000) + 1000000))
        const id = Math.floor((Math.random() * randomId.length))
        console.log(randomId[id])
        // const id = String(Math.floor(Math.random() * (1000000 - 0o000000) + 0o000000))

        // console.log(id)
        dispatch(randomMovieFetching())
        request(`https://www.omdbapi.com/?i=tt${randomId[id]}&plot=full&apikey=a5d79ee3`)
        .then((data) => {
            if (data.Error) {
                dispatch(randomMovieFetched('error'))
            } else {
                dispatch(randomMovieFetched(data))
            }
        })
        .catch(() => dispatch(randomMovieErrorFetching()))
    }
    const loader = loadingStatus === 'fetching' ? <Preloader/> : null
    const errorMessage = loadingStatus === 'error' ? <h5>Error...</h5> : null
    const content = loadingStatus === 'idle' ? <View randomMovieItem={randomMovieItem} updateMovie={updateMovie}/> : null
    return  <div>
        {loader}
        {errorMessage}
        {content}
    </div>
}

const View = ({randomMovieItem, updateMovie}) => {
    return <div className="Random-movie">
    {randomMovieItem !== 'error' ? <>
     <img src={randomMovieItem.Poster !== "N/A" ? randomMovieItem.Poster : ImgNotFound} alt="random-movie-poster" />
    <div className="info">
        <div className="title">{randomMovieItem.Title}</div>
        <div className="basic">{randomMovieItem.Plot}</div>
        <div className="basic">Director: {randomMovieItem.Director}</div>
        <div className="basic">Actors: {randomMovieItem.Actors}</div>
        <div className="basic">Year: {randomMovieItem.Year}</div>
        <div className="basic">Country: {randomMovieItem.Country}</div>
        <div className="basic">Genre: {randomMovieItem.Genre}</div>
        {randomMovieItem.imdbRating === "N/A" ? null : 
        <Rating name="read-only" size="large" value={+(randomMovieItem.imdbRating)/2} readOnly />}
        <div>
            <button onClick={updateMovie}>Show another</button>
        </div>
    </div></> : <><h5>Error...</h5><div>
            <button onClick={updateMovie}>Show another</button>
        </div></>}
</div>
} 

export default RandomMovie