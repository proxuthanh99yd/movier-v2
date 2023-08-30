import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTrendingMoviesApi } from '../Services/tmdbService';

export const fetchTrendingMovies = createAsyncThunk('movie/fetchTrendingMovies',
    async () => {
        const {
            page,
            results,
            total_pages: totalPages,
            total_results: totalResults
        } = await getTrendingMoviesApi();
        return { page, results, totalPages, totalResults }
    })

export const trendingMoviesSlice = createSlice({
    name: 'trendingMovies',
    initialState: {
        status: "loading",
        page: 0,
        results: [],
        totalPages: 0,
        totalResults: 0
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTrendingMovies.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTrendingMovies.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchTrendingMovies.rejected, (state) => {
                state.status = 'failed'
            })
    }

})
const trendingMoviesReducer = trendingMoviesSlice.reducer
export default trendingMoviesReducer