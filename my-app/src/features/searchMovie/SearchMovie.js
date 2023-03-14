import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './SearchMovie.css'
import { moviesFetched, termRecieve } from "../../slices/SearchMovieSlice"
import { NavLink } from "react-router-dom"
import useMovieService from "../../services/MovieService"
import { addMovie } from "../../slices/FavouriteMoviesSlice"

const SearchMovie = () => {
    const dispatch = useDispatch()
    const {term, moviesList} = useSelector(state => state.searchMovie)
    const {favouriteMovies} = useSelector(state => state.favouriteMovies)
    const {getMoviesBySearch} = useMovieService()
    useEffect(() => {
        getMoviesBySearch(term)
        .then((data) => {
            dispatch(moviesFetched(data))
        })
    }, [term])
    const addMovieItem = (movie) => {
        dispatch(addMovie(movie))
        localStorage.setItem('favourite-movies', JSON.stringify([...favouriteMovies, movie]))
    }
    const start = moviesList === 'Incorrect IMDb ID.' ? <h5>Start to search...</h5> : null
    const tooManyResults = moviesList === 'Too many results.' ? <h5>Need more info...</h5> : null
    const notFound = moviesList === 'Movie not found!' ? <h5>Movie not found!</h5> : null
    const content = start || tooManyResults || notFound || !moviesList ? null : <View addMovieItem={addMovieItem} moviesList={moviesList}/>
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
                <div className="movies-list-search-card-top">
                    <div className="overlay" onClick={() => props.addMovieItem(item)}>
                        <span>Add to Favourites</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                        </svg>
                    </div>
                    <img src={item.poster} alt={item.title} />
                </div>
            <NavLink to={`/movie-search/${item.id}`}>
                <div className="movies-list-search-title">{item.title}</div>
            </NavLink>
            </div>)}
    </div>
}

export default SearchMovie