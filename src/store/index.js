import { configureStore } from '@reduxjs/toolkit'
import tvShowsReducer from '../features/tvShowsSlice'
import movieReducer from '../features/movieSingleSlice'
import userReducer from '../features/userSlice'
import accountReducer from '../features/accountSlice'
import trendingMoviesReducer from '../features/trendingMoviesSlice'
import moviesPopularReducer from '../features/moviesPopularSlice'
import tvShowsPopularReducer from '../features/tvShowsPopularSlice'
import trendingPersonReducer from '../features/trendingPersonSlice'
import movieGenresReducer from '../features/movieGenresSlice'
import moviesFavoriteReducer from '../features/moviesFavoriteSlice'
import moviesTopRatedReducer from '../features/moviesTopRatedSlice'
import moviesUpcomingReducer from '../features/moviesUpcomingSlice'
import moviesNowPlayingReducer from '../features/moviesNowPlayingSlice'

export default configureStore({
    reducer: {
        tvShows: tvShowsReducer,
        movie: movieReducer,
        auth: userReducer,
        account: accountReducer,
        trendingMovies: trendingMoviesReducer,
        moviesPopular: moviesPopularReducer,
        tvShowsPopular: tvShowsPopularReducer,
        trendingPerson: trendingPersonReducer,
        movieGenres: movieGenresReducer,
        moviesFavorite: moviesFavoriteReducer,
        moviesTopRated: moviesTopRatedReducer,
        moviesUpcoming: moviesUpcomingReducer,
        moviesNowPlaying: moviesNowPlayingReducer
    }
})