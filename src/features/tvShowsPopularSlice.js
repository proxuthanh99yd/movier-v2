import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTvShowsPopularApi } from '../Services/tmdbService';

export const fetchTvShowsPopular = createAsyncThunk('tv/fetchTvShowsPopular',
    async () => {
        const {
            page,
            results,
            total_pages: totalPages,
            total_results: totalResults
        } = await getTvShowsPopularApi();
        return { page, results, totalPages, totalResults }
    })

export const tvShowsPopularSlice = createSlice({
    name: 'tvShowsPopular',
    initialState: {
        status: "loading",
        page: 0,
        results: [],
        totalPage: 0,
        totalResults: 0
    },
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTvShowsPopular.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTvShowsPopular.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchTvShowsPopular.rejected, (state) => {
                state.status = 'failed'
            })
    }

})
const tvShowsPopularReducer = tvShowsPopularSlice.reducer
export default tvShowsPopularReducer