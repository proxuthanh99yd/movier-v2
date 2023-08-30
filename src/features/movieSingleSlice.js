import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { movieSingleApi, movieSinglePhotoApi } from '../Services/movieSingleService';
import { tvShowSingleApi, tvShowSinglePhotoApi } from '../Services/tvShowSingleService';


export const fetchTVShowSingle = createAsyncThunk('tvShow/fetchTVShowSingle',
    async (id) => {
        const tvShow = await tvShowSingleApi(id);
        return tvShow;
    })

export const fetchTVShowSingleImage = createAsyncThunk('tvShow/fetchTVShowSingleImage',
    async (id) => {
        const images = await tvShowSinglePhotoApi(id);
        return images;
    })


export const fetchMovieSingle = createAsyncThunk('movie/fetchMovieSingle',
    async (id) => {
        const movie = await movieSingleApi(id);
        return movie;
    })
export const fetchMovieSingleImage = createAsyncThunk('movie/fetchMovieSingleImage',
    async (id) => {
        const images = await movieSinglePhotoApi(id);
        return images;
    })


export const movieSingleSlice = createSlice({
    name: 'singlePageSlice',
    initialState: {
        movie: {},
        status: "loading",
        images: [],
        imageLoading: "loading",
        crew: [],
        cast: [],
        reviews: [],
        videos: [],
        keywords: []
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
                state.movie = payload
                state.cast = payload.credits.cast
                state.crew = payload.credits.crew
                state.videos = payload.videos.results
                state.reviews = payload.reviews
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
            .addCase(fetchTVShowSingle.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTVShowSingle.fulfilled, (state, { payload }) => {
                // Add any fetched posts to the arrays
                state.status = 'succeeded'
                state.movie = payload
                state.cast = payload.aggregate_credits.cast
                state.crew = payload.aggregate_credits.crew
                state.videos = payload.videos.results
                state.reviews = payload.reviews
                state.keywords = payload.keywords.results
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
    }

})

// export const { } = movieSingleSlice.actions

export default movieSingleSlice.reducer