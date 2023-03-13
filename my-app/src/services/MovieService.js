import useHttp from "../hooks/http.hook"
import ImgNotFound from './img-not-found.jpg'


const useMovieService = () => {
    const _apiBase = 'https://www.omdbapi.com/?'
    const _apiKey = 'apikey=a5d79ee3'
    const {request} = useHttp()
    const getMovie = async (id) => {
        const res = await request(`${_apiBase}i=${id}&plot=full&${_apiKey}`)
        if (res.Error) {
            return 'error'
        } else {
            return transformData(res)
        }
    }
    const getMoviesBySearch = async (term) => {
        const res = await request(`${_apiBase}s=${term}&${_apiKey}`)
        if (res.Error) {
            return res.Error
        } else {
            return res.Search.map(transformDataBySearch)
        }
    }
    const transformData = (res) => {
        return {
            title: res.Title,
            director: res.Director !== "N/A" ? res.Director : 'No director description',
            actors: res.Actors !== "N/A" ? res.Actors : 'No actors description',
            poster: res.Poster !== "N/A" ? res.Poster : ImgNotFound,
            plot: res.Plot !== "N/A" ? res.Plot : 'No plot description',
            year: res.Year !== "N/A" ? res.Year : 'No year description',
            country: res.Country !== "N/A" ? res.Country : 'No country description',
            genre: res.Genre !== "N/A" ? res.Genre : 'No genre description',
            rating: res.imdbRating === "N/A" ? null : +(res.imdbRating)/2,
        }
    }
    const transformDataBySearch = (res) => {
        return {
            id: res.imdbID,
            title: res.Title,
            poster: res.Poster !== "N/A" ? res.Poster : ImgNotFound,
        }
    }
    return {getMovie, getMoviesBySearch}
}
export default useMovieService
