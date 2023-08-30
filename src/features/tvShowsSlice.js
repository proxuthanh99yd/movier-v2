import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { tvAiringTodayApi, tvOnTheAirApi, tvPopularApi, tvTopRatedApi } from '../Services/tvShowsService';

export const fetchTvPopular = createAsyncThunk('tvShow/fetchTvPopular',
    async () => {
        const tvShows = await tvPopularApi();
        return { tvShows }
    })
export const fetchAiringToday = createAsyncThunk('tvShow/fetchAiringToday',
    async () => {
        const tvShows = await tvAiringTodayApi();
        return { tvShows }
    })
export const fetchOnTheAir = createAsyncThunk('tvShow/fetchOnTheAir',
    async () => {
        const tvShows = await tvOnTheAirApi();
        return { tvShows }
    })
export const fetchTopRated = createAsyncThunk('tvShow/fetchTopRated',
    async () => {
        const tvShows = await tvTopRatedApi();
        return { tvShows }
    })


export const TvShowsSlice = createSlice({
    name: 'TvShowsSlice',
    initialState: {
        status: "loading",
        tvShows: [],
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTvPopular.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTvPopular.fulfilled, (state, { payload }) => {
                // Add any fetched posts to the arrays
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchTvPopular.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(fetchAiringToday.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAiringToday.fulfilled, (state, { payload }) => {
                // Add any fetched posts to the arrays
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchAiringToday.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(fetchOnTheAir.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchOnTheAir.fulfilled, (state, { payload }) => {
                // Add any fetched posts to the arrays
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchOnTheAir.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(fetchTopRated.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTopRated.fulfilled, (state, { payload }) => {
                // Add any fetched posts to the arrays
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchTopRated.rejected, (state) => {
                state.status = 'failed'
            })
    }

})

// export const { } = homeSlice.actions

export default TvShowsSlice.reducer