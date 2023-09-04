import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addMovieFavoriteApi, addMovieRatedApi, getAccountStatesApi, movieSingleApi, movieSinglePhotoApi, removeMovieFavoriteApi } from '../Services/tmdbService';

export const addMovieFavorite = createAsyncThunk('movie/addMovieFavorite',
    async ({ accountId, movieId }) => {
        const auth = JSON.parse(localStorage.getItem('auth'))
        const data = await addMovieFavoriteApi({ accountId, movieId, sessionId: auth.sessionId });
        return data
    })
export const removeMovieFavorite = createAsyncThunk('movie/removeMovieFavorite',
    async ({ accountId, movieId }) => {
        const auth = JSON.parse(localStorage.getItem('auth'))
        const data = await removeMovieFavoriteApi({ accountId, movieId, sessionId: auth.sessionId });
        return data
    })
export const addMovieRated = createAsyncThunk('movie/addMovieRated',
    async ({ movieId, value }) => {
        const auth = JSON.parse(localStorage.getItem('auth'))
        const data = await addMovieRatedApi({ value, movieId, sessionId: auth.sessionId });
        if (data) {
            return { value }
        }
    })
export const fetchMovieSingle = createAsyncThunk('movie/fetchMovieSingle',
    async (id) => {
        const auth = JSON.parse(localStorage.getItem("auth"));
        if (!auth?.sessionId) {
            const movie = await movieSingleApi(id);
            return movie;
        }
        const movie = await movieSingleApi(id);
        const { favorite, rated, watchlist } = await getAccountStatesApi(id, auth.sessionId);
        const newMovie = { ...movie, watchlist, favorite, rated }
        return newMovie;
    })
export const fetchMovieSingleImage = createAsyncThunk('movie/fetchMovieSingleImage',
    async (id) => {
        const images = await movieSinglePhotoApi(id);
        return images;
    })


export const movieSingleSlice = createSlice({
    name: 'movieSingleSlice',
    initialState: {
        movie: {
            adult: false,
            belongsToCollection: {},
            budget: 0,
            homePage: "",
            id: 0,
            overview: "",
            backdropPath: "",
            posterPath: "",
            name: "",
            releaseDate: "",
            revenue: 0,
            runTime: 0,
            vote: 0,
            rated: false,
            favorite: false,
        },
        status: "loading",
        images: [],
        imageLoading: "loading",
        crew: [],
        cast: [],
        reviews: {
            page: 1,
            results: [],
            totalPages: 0,
            totalResults: 0
        },
        videos: [],
        keywords: [],
        genres: []
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchMovieSingle.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchMovieSingle.fulfilled, (state, { payload }) => {
                // Add any fetched posts to the arrays
                state.status = 'succeeded'
                state.movie.adult = payload.adult
                state.movie.backdropPath = payload.backdrop_path
                state.movie.belongsToCollection = payload.belongs_to_collection
                state.movie.budget = payload.budget
                state.movie.homePage = payload.homepage
                state.movie.id = payload.id
                state.movie.overview = payload.overview
                state.movie.posterPath = payload.poster_path
                state.movie.name = payload.title || payload.original_title
                state.movie.releaseDate = payload.release_date
                state.movie.revenue = payload.revenue
                state.movie.runTime = payload.runtime
                state.movie.vote = payload.vote_average
                state.movie.rated = payload.rated
                state.movie.favorite = payload.favorite

                state.cast = payload.credits?.cast.map(item => ({
                    adult: item.adult,
                    castId: item.cast_id,
                    character: item.character,
                    id: item.id,
                    knownForDepartment: item.known_for_department,
                    name: item.name || item.original_name,
                    profilePath: item.profile_path
                }))

                state.crew = payload.credits?.crew.map(item => ({
                    adult: item.adult,
                    id: item.id,
                    knownForDepartment: item.known_for_department,
                    name: item.name || item.original_name,
                    profilePath: item.profile_path,
                    department: item.department,
                    job: item.job,
                }))

                state.videos = payload.videos.results.map(item => ({
                    name: item.name,
                    key: item.key,
                    site: item.site,
                    size: item.size,
                    type: item.type,
                    official: item.official,
                    published_at: item.publishedAt,
                    id: item.id,
                }))

                state.reviews.page = payload.reviews?.page
                state.reviews.totalPages = payload.reviews?.total_pages
                state.reviews.totalResults = payload.reviews?.total_results
                state.reviews.results = payload.reviews?.results.map(item => ({
                    id: item.id,
                    author: item.author,
                    authorDetails: item.author_details,
                    content: item.content,
                    createdAt: item.created_at,
                    updatedAt: item.updated_at,
                    url: item.url
                }))
                state.genres = payload.genres
                state.keywords = payload.keywords.keywords
            })
            .addCase(fetchMovieSingle.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(fetchMovieSingleImage.pending, (state) => {
                state.imageLoading = 'loading'
            })
            .addCase(fetchMovieSingleImage.fulfilled, (state, { payload }) => {
                // Add any fetched posts to the arrays
                state.imageLoading = 'succeeded'
                state.images = payload
            })
            .addCase(fetchMovieSingleImage.rejected, (state) => {
                state.imageLoading = 'failed'
            })
            .addCase(addMovieFavorite.fulfilled, (state) => {
                state.movie.favorite = true
            })
            .addCase(removeMovieFavorite.fulfilled, (state) => {
                state.movie.favorite = false
            })
            .addCase(addMovieRated.fulfilled, (state, { payload }) => {
                state.movie.rated = payload
            })

    }

})

export const { setFavorite } = movieSingleSlice.actions

export default movieSingleSlice.reducer