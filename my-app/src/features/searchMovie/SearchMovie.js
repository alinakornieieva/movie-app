import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './SearchMovie.css'
import { moviesFetched, termRecieve } from "../../slices/SearchMovieSlice"
import { NavLink } from "react-router-dom"
import useMovieService from "../../services/MovieService"

const SearchMovie = () => {
    const dispatch = useDispatch()
    const {term, moviesList} = useSelector(state => state.searchMovie)
    const {getMoviesBySearch} = useMovieService()
    useEffect(() => {
        getMoviesBySearch(term)
            .then((data) => {
                dispatch(moviesFetched(data))
            })
    }, [term])
    const start = moviesList === 'Incorrect IMDb ID.' ? <h5>Start to search...</h5> : null
    const tooManyResults = moviesList === 'Too many results.' ? <h5>Need more info...</h5> : null
    const notFound = moviesList === 'Movie not found!' ? <h5>Movie not found!</h5> : null
    const content = start || tooManyResults || notFound || !moviesList ? null : <View moviesList={moviesList}/>
    return <div className="Search-movie">
        <form>
            <input onChange={(e) => dispatch(termRecieve(e.target.value))} type="text" placeholder="Search a movie..." />
        </form>
        <div>
            {start}
            {tooManyResults}
            {notFound}
            {content}
        </div>
    </div>
}

const View = (props) => {
    return <div className="movies-list-search">
        {props.moviesList.map((item) => <div className="movies-list-card" key={item.id}>
            <NavLink to={`/movie-search/${item.id}`}>
                <img src={item.poster} alt={item.title} />
            </NavLink>
            <div className="movies-list-search-title">{item.title}</div>
            </div>)}
    </div>
}

export default SearchMovie