import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useHttp from "../../hooks/http.hook"
import { randomMovieFetched } from "../../slices/RandomMovieSlice"

const RandomMovie = () => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    const {randomMovieItem} = useSelector(state => state.randomMovie)
    useEffect(() => {
        request('https://www.omdbapi.com/?i=tt3896198&apikey=a5d79ee3')
        .then(data => dispatch(randomMovieFetched(data)))
    })
    return <div>
        <img src={randomMovieItem.Poster} alt="" />
        <h1>{randomMovieItem.Title}</h1>
    </div>
}

export default RandomMovie