import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { addMovieFromLS, deleteMovie } from "../../slices/FavouriteMoviesSlice"
import '../searchMovie/SearchMovie.css'
import './FavouriteMovies.css'

const FavouriteMovies = () => {
    const dispatch = useDispatch()
    const {favouriteMovies} = useSelector(state => state.favouriteMovies)
    let favouriteMoviesLS = JSON.parse(localStorage.getItem('favourite-movies'))
    useEffect(() => {
        if (localStorage.getItem('favourite-movies')) {
            dispatch(addMovieFromLS(favouriteMoviesLS))
        }
    }, [])
    const deleteMovieItem = (movieId) => {
        dispatch(deleteMovie(movieId))
        favouriteMoviesLS = favouriteMoviesLS.filter((item) => item.id !== movieId)
        localStorage.setItem('favourite-movies', JSON.stringify(favouriteMoviesLS))
        dispatch(addMovieFromLS(favouriteMoviesLS))
    }
    return <div className="movies-list-search">
        {favouriteMovies.length > 0 ? favouriteMovies.map(item => <div className="movies-list-card" key={item.id}>
                <div className="movies-list-search-card-top">
                    <div className="overlay" onClick={() => deleteMovieItem(item.id)}>
                        <span>Delete from Favourites</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                        </svg>
                    </div>
                    <img src={item.poster} alt={item.title} />
                </div>
            <NavLink to={`/movie-search/${item.id}`}>
                <div className="movies-list-search-title">{item.title}</div>
            </NavLink>
            </div>) : <div className="empty-list-message">Your favourite movies list is empty...</div>}
    </div>
}

export default FavouriteMovies