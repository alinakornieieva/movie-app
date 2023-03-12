import useHttp from "../hooks/http.hook"
import ImgNotFound from './img-not-found.jpg'


const useMovieService = () => {
    const _apiBase = 'https://www.omdbapi.com/?'
    const _apiKey = 'apikey=a5d79ee3'
    const {request} = useHttp()
    const getMovie = async (id) => {
        const res = await request(`${_apiBase}i=tt${id}&plot=full&${_apiKey}`)
        if (res.Error) {
            return 'error'
        } else {
            return transformData(res)
        }
    }
    const transformData = (res) => {
        return {
            title: res.Title,
            director: res.Director,
            actors: res.Actors,
            poster: res.Poster !== "N/A" ? res.Poster : ImgNotFound,
            plot: res.Plot !== "N/A" ? res.Plot : 'No plot description',
            year: res.Year !== "N/A" ? res.Year : 'No year description',
            country: res.Country !== "N/A" ? res.Country : 'No country description',
            genre: res.Genre !== "N/A" ? res.Genre : 'No genre description',
            rating: res.imdbRating === "N/A" ? null : +(res.imdbRating)/2,
        }
    }
    return {getMovie}
}
export default useMovieService
