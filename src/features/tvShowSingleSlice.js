import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addTvShowFavoriteApi, addTvShowRatedApi, getTvShowStatesApi, removeTvShowFavoriteApi, tvShowSingleApi, tvShowSinglePhotoApi } from '../Services/tmdbService';

export const addTvShowFavorite = createAsyncThunk('tvShow/addTvShowFavorite',
    async ({ accountId, tvShowId }) => {
        const auth = JSON.parse(localStorage.getItem('auth'))
        const data = await addTvShowFavoriteApi({ accountId, tvShowId, sessionId: auth.sessionId });
        return data
    })
export const removeTvShowFavorite = createAsyncThunk('tvShow/removetvShowFavorite',
    async ({ accountId, tvShowId }) => {
        const auth = JSON.parse(localStorage.getItem('auth'))
        const data = await removeTvShowFavoriteApi({ accountId, tvShowId, sessionId: auth.sessionId });
        return data
    })
export const addTvShowRated = createAsyncThunk('tvShow/addtvShowRated',
    async ({ tvShowId, value }) => {
        const auth = JSON.parse(localStorage.getItem('auth'))
        const data = await addTvShowRatedApi({ value, tvShowId, sessionId: auth.sessionId });
        if (data) {
            return { value }
        }
    })
export const fetchTVShowSingle = createAsyncThunk('movie/fetchTVShowSingle',
    async (id) => {
        const auth = JSON.parse(localStorage.getItem("auth"));
        if (!auth) {
            const movie = await tvShowSingleApi(id);
            return movie;
        }
        const movie = await tvShowSingleApi(id);
        const { favorite, rated, watchlist } = await getTvShowStatesApi(id, auth.sessionId);
        const newMovie = { ...movie, watchlist, favorite, rated }
        return newMovie;
    })
export const fetchTVShowSingleImage = createAsyncThunk('movie/fetchTVShowSingleImage',
    async (id) => {
        const images = await tvShowSinglePhotoApi(id);
        return images;
    })


export const tvShowSingleSlice = createSlice({
    name: 'tvShowSingleSlice',
    initialState: {
        movie: {},
        status: "loading",
        images: [],
        imageLoading: "loading",
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchTVShowSingle.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTVShowSingle.fulfilled, (state, { payload }) => {
                // Add any fetched posts to the arrays
                state.status = 'succeeded'
                state.movie = payload
            })
            .addCase(fetchTVShowSingle.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(fetchTVShowSingleImage.pending, (state) => {
                state.imageLoading = 'loading'
            })
            .addCase(fetchTVShowSingleImage.fulfilled, (state, { payload }) => {
                // Add any fetched posts to the arrays
                state.imageLoading = 'succeeded'
                state.images = payload
            })
            .addCase(fetchTVShowSingleImage.rejected, (state) => {
                state.imageLoading = 'failed'
            })
            .addCase(addTvShowFavorite.fulfilled, (state) => {
                state.movie.favorite = true
            })
            .addCase(removeTvShowFavorite.fulfilled, (state) => {
                state.movie.favorite = false
            })
            .addCase(addTvShowRated.fulfilled, (state, { payload }) => {
                state.movie.rated = payload
            })
    }

})

// export const { } = tvShowSingleSlice.actions
const tvShowSingleReducer = tvShowSingleSlice.reducer
export default tvShowSingleReducer