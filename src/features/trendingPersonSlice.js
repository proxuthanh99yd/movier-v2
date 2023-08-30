import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTrendingPersonApi } from '../Services/tmdbService';

export const fetchTrendingPerson = createAsyncThunk('person/fetchTrendingPerson',
    async () => {
        const {
            page,
            results,
            total_pages: totalPages,
            total_results: totalResults
        } = await getTrendingPersonApi();
        return { page, results, totalPages, totalResults }
    })

export const trendingPersonSlice = createSlice({
    name: 'trendingPerson',
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
            .addCase(fetchTrendingPerson.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTrendingPerson.fulfilled, (state, { payload }) => {
                return { ...state, ...payload, status: 'succeeded', }
            })
            .addCase(fetchTrendingPerson.rejected, (state) => {
                state.status = 'failed'
            })
    }

})
const trendingPersonReducer = trendingPersonSlice.reducer
export default trendingPersonReducer