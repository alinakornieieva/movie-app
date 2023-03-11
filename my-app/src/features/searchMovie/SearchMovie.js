import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './SearchMovie.css'
import useHttp from "../../hooks/http.hook"
import { moviesFetched, termRecieve } from "../../slices/SearchMovieSlice"
import { NavLink } from "react-router-dom"

const SearchMovie = () => {
    const dispatch = useDispatch()
    const {term, moviesList} = useSelector(state => state.searchMovie)
    const {request} = useHttp()
    useEffect(() => {
        request(`https://www.omdbapi.com/?s=${term}&apikey=a5d79ee3`)
            .then((data) => {
                if (data.Error) {
                    dispatch(moviesFetched(data.Error))
                } else {
                    dispatch(moviesFetched(data.Search))
                } 
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
        {props.moviesList.map((item) => <div className="movies-list-card" key={item.imdbID}>
            <NavLink to={`/movie-search/${item.imdbID}`}>
                <img src={item.Poster} alt={item.Title} />
            </NavLink>
            <div className="movies-list-search-title">{item.Title}</div>
            </div>)}
    </div>
}

export default SearchMovie