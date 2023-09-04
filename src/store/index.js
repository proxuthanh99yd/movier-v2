import { configureStore } from '@reduxjs/toolkit'
import tvShowsReducer from '../features/tvShowsSlice'
import movieReducer from '../features/movieSingleSlice'
import accountReducer from '../features/accountSlice'
import trendingMoviesReducer from '../features/trendingMoviesSlice'
import movieGenresReducer from '../features/movieGenresSlice'
import moviesFavoriteReducer from '../features/moviesFavoriteSlice'
import moviesReducer from '../features/moviesSlice'
import tvShowGenresReducer from '../features/tvShowGenresSlice'
import searchReducer from '../features/searchSlice'
import movieRatedReducer from '../features/moviesRatedSlice'
import tvShowSingleReducer from '../features/tvShowSingleSlice'
import tvShowsFavoriteReducer from '../features/tvShowsFavoriteSlice'
import tvShowsRatedReducer from '../features/tvShowsRatedSlice'
import peopleReducer from '../features/peopleSlice'
import personReducer from '../features/personSlice'

export default configureStore({
    reducer: {
        movie: movieReducer,
        tvShow: tvShowSingleReducer,
        account: accountReducer,
        trendingMovies: trendingMoviesReducer,
        movies: moviesReducer,
        tvShows: tvShowsReducer,
        people: peopleReducer,
        movieGenres: movieGenresReducer,
        moviesFavorite: moviesFavoriteReducer,
        tvShowGenres: tvShowGenresReducer,
        search: searchReducer,
        moviesRated: movieRatedReducer,
        tvShowsFavorite: tvShowsFavoriteReducer,
        tvShowsRated: tvShowsRatedReducer,
        person: personReducer
    }
})